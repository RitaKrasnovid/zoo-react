const passport = require('passport');
const { animals: animalsController, news: newsController } = require('../controllers');

module.exports = (app) => {
  app.get('/api/', (req, res) => res.status(200).send({
    message: 'API working',
  }));

  app.get('/api/animals/', animalsController.list);
  app.post('/api/animals/', (req, res) => animalsController.create);
  app.get('/api/animals/:order', animalsController.filterByOrder);

  app.get('/api/animals/details/:id', animalsController.getAnimalById);
  app.get('/api/animals/:value', animalsController.filterByNameContainsValue);

  app.get('/api/news/', newsController.getMainNews);

  app.get('/api/auth/google', passport.authenticate('google', {
    scope: ['profile', "email"],
  }));
  
  app.get('/api/auth/google/redirect', passport.authenticate('google'), (req,res) => {
    res.send(req.user);
    res.send("you reached the redirect URI");
  });

  app.get("/api/auth/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
