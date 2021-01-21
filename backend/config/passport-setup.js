const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const { Users } = require("../models");

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
          Users.create({
            googleId: profile.id,
            name: profile.displayName,
          }).then(newUser => { done(null, newUser) })
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
