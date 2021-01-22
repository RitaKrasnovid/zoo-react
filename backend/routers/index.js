const passport = require('passport');
const { animals: animalsController, news: newsController } = require('../controllers');

const CLIENT_HOME_PAGE_URL = "http://localhost:3000";

module.exports = (app) => {
  app.get('/api/', (req, res) => res.status(200).send({
    message: 'API working',
  }));

  app.get('/api/animals/', animalsController.list);
  app.post('/api/animals/', (req, res) => animalsController.create);
  app.get('/api/animals/:order', animalsController.filterByOrder);

  app.get('/api/animals/details/:id', animalsController.getAnimalById);
  app.get('/api/animals/:value', animalsController.filterByNameContainsValue);

  app.get('/api/news', newsController.list);
  app.get('/api/news/:id', newsController.getById);
  app.post('/api/news/', newsController.create);
  app.delete('/api/news/:id', newsController.deleteNewsById);
  app.put('/api/news/:id', newsController.editById);
  app.get('/api/current_news/:limit', newsController.getMainNews);

  app.get('/api/auth/google', passport.authenticate('google', {
    scope: ['profile', "email"],
  }));
  
  app.get('/api/auth/google/redirect', passport.authenticate('google', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/api/auth/login/failed",
  }));

  app.get("/api/auth/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL);
  });

  app.get("/api/auth/login/success", (req, res) => {
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies,
      });
    }
  });

  app.get("/api/auth/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
  });
};
