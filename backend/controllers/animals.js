const { Animals, Images } = require('../models');

const create = (req, res) => {
  return Animals
    .create({
      title: req.body.title,
    })
    .then(animal => res.status(201).send(animal))
    .catch(error => res.status(400).send(error));
};

const list = (req, res, next) => Animals
  .findAll({
    include: [{
      model: Images,
      as: 'images',
    }],
  })
  .then(result => res.status(200).send(result))
  .catch(error => next(error));

const filterByOrder = (req, res, next) => {
  const { order } = req.params;

  Animals.findAll({
    include: [{
      model: Images,
      as: 'images',
    }],
    where: {
      order: {
        $like: order,
      },
    },
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(error => next(error));
};

const filterByNameContainsValue = (req, res, next) => {
  const value = req.params.value.toLowerCase();

  Animals.findAll({
    where: {
      title: {
        $like: `%${value}%`,
      },
    },
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(error => next(error));
};

module.exports = {
  create,
  list,
  filterByOrder,
  filterByNameContainsValue,
};
