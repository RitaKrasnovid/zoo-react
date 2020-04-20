const animalsController = require('../controllers').animals;
const newsController = require('../controllers').news;

module.exports = (app) => {
  app.get('/api/', (req, res) => res.status(200).send({
    message: 'API working',
  }));

  app.get('/api/animals/', animalsController.list);
  app.post('/api/animals/', (req, res) => animalsController.create);
  // app.get('/api/animals/:value', animalsController.filterByNameContainsValue);
  app.get('/api/animals/:id', animalsController.getById);

  app.get('/api/news/', newsController.getMainNews);
};
