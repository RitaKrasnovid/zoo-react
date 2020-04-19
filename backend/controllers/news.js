const models = require('../models');

const News = models.News;
const Image = models.Images;

const create = (req, res) => {
  return News
    .create({
      title: req.body.title,
      description: req.body.description,
      image_id: req.body.imageId,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));
};

const list = (req, res, next) => News
  .findAll({
    include: [{
      model: Image,
      as: 'images',
    }],
  })
  .then(result => res.status(200).send(result))
  .catch(error => next(error));

const getMainNews = (req, res, next) => News
  .findAll({
    order: [
      ['updatedAt', 'DESC'],
    ],
    limit: 3,
    include: [{
      model: Image,
      as: 'images',
      required: false,
    }],
  })
  .then(result => res.status(200).send(result))
  .catch(error => next(error));

const getById = (req, res, next) => {
  const newsId = req.params.id;

  News.findAll({
    where: {
      id: newsId,
    },
  })
    .then(result => res.status(200).send(result))
    .catch(error => next(error));
};

module.exports = {
  create,
  list,
  getById,
  getMainNews,
};
