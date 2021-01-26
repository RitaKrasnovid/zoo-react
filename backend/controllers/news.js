const { News, Images, NewsImages } = require('../models');

const create = async (req, res) => {
  const { title, description, videoId, file } = req.body;

  const news = await News.create({
    title,
    description,
    videoId,
  });

  if(file) {
    const image = await Images.create({
      title: file.name,
      data: file.data,
    });

    await NewsImages.create({newsId: news.id, imageId: image.id});
  }

  return News.findOne({
    where: { id: news.id },
    include: {
      model: Images,
      as: 'images',
    },
  }).then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error))
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
    order: [
      ['createdAt', 'DESC'],
    ],
    limit: req.params.limit,
    include: [{
      model: Images,
      as: 'images',
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

const editById = async (req, res) => {
  const { id } = req.params;
  const { title, description, videoId, file } = req.body;

  const image = await Images.create({
    title: file.name,
    data: file.data,
  });

  await NewsImages.update({ newsId: id, imageId: image.id }, { returning: true, where: { newsId: id } });

  await News.update({
    title,
    description,
    videoId,
  }, { returning: true, where: { id } });

  return News.findOne({
    where: { id },
    include: {
      model: Images,
      as: 'images',
    },
  }).then(result => res.status(200).send(result))
    .catch(error => res.status(400).send(error))
}

module.exports = {
  create,
  list,
  getById,
  getMainNews,
  deleteNewsById,
  editById,
};
