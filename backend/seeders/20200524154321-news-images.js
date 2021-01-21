module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NewsImages', [
      {
        newsId: 2,
        imageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        newsId: 3,
        imageId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        newsId: 1,
        imageId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('NewsImages', null, {});
  }
};
