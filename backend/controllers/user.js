const { Users } = require('../models');

const create = (req, res) => {
  return Users
    .create({
      googleId: req.body.googleId,
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
};

const getUserByGoogleId = (req, res, next) => {
  Users.findOne({
    where: {
      goggleId: {
        $eq: req.params.goggleId,
      },
    },
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(error => next(error));
};

const getUserById = (req, res, next) => {
  Users.findOne({
    where: {
      id: {
        $eq: req.params.id,
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
  getUserByGoogleId,
  getUserById,
};
