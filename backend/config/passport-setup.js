const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const { Users } = require("../models");

const ADMIN_ROLE_PATTERN = 'lineate.com';
const ROLE_TITLE = Object.freeze({
  ADMIN: 'admin',
  VISITOR: 'visitor',
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.CLIENT_ID,
      clientSecret: keys.CLIENT_SECRET,
      callbackURL: "/api/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      Users.findOne({
        where: {
          googleId: {
            $eq: profile.id,
          },
        },
      })
      .then(currentUser => {
        if(currentUser){
          done(null, currentUser);
        } else {
          const splittedEmail = profile.emails[0].value.split('@');
          const isAdmin = splittedEmail[1] === ADMIN_ROLE_PATTERN;

          Users.create({
            googleId: profile.id,
            name: profile.displayName,
            role: isAdmin ? ROLE_TITLE.ADMIN : ROLE_TITLE.VISITOR,
          })
          .then(newUser => { done(null, newUser) })
        }
      })
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findOne({
    where: {
      id: {
        $eq: id,
      },
    },
  })
  .then(user => {
    done(null, user);
  })
  .catch(e => {
    done(new Error("Failed to deserialize an user"));
  });
});
