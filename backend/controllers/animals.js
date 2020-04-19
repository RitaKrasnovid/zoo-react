const models = require('../models');

const Animal = models.Animals;
const Image = models.Images;

const create = (req, res) => {
  return Animal
    .create({
      title: req.body.title,
    })
    .then(animal => res.status(201).send(animal))
    .catch(error => res.status(400).send(error));
};

const list = (req, res, next) => Animal
  .findAll({
    include: [{
      model: Image,
      as: 'images',
    }],
  })
  .then(result => res.status(200).send(result))
  .catch(error => next(error));

const filterByNameContainsValue = (req, res, next) => {
  const value = req.params.value.toLowerCase();

  Animal.findAll({
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
  filterByNameContainsValue,
};
