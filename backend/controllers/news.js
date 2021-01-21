const { News, Images } = require('../models');

const create = (req, res) => {
  return News
  .create({
    title: req.body.title,
    description: req.body.description,
  }, {
      include: [{
        model: Images,
        as: 'images',
        imageId: req.body.imageId,
    }],
  })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));
};

const list = (req, res, next) =>
  News.findAll({
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: Images,
        as: 'images',
      },
    ],
  })
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));

const getMainNews = (req, res, next) => News
  .findAll({
    order: [['createdAt', 'DESC']],
    limit: 3,
    include: [{
        model: Images,
        as: 'images',
        required: false,
      }],
  })
    .then(result => res.status(200).send(result))
    .catch(error => next(error));

const getById = (req, res, next) => {
  const { id } = req.params;

  News.findOne({
    where: {
      id: {
        $eq: id,
      },
    },
  })
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
};

const deleteNewsById = (req, res, next) => {
  const { id } = req.params;

  News.findOne({
    where: { id: { $eq: id } },
  })
    .then((result) =>
      News.destroy({ where: { id: { $eq: id } } }).then((deletedRecord) => {
        if (deletedRecord === 1) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: 'Element not found' });
        }
      })
    )
    .catch((error) => next(error));
};

const editById = (req, res) => News
  .update(
    { where: 
      { id: { $eq: req.params.id } },
    },
    {
      title: req.body.title,
      description: req.body.description,
    },
    {
      include: [{
        model: Images,
        as: 'images',
        imageId: req.body.imageId,
      }],
    })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(400).send(error));

module.exports = {
  create,
  list,
  getById,
  getMainNews,
  deleteNewsById,
  editById,
};
