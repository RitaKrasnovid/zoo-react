module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NewsImages', [
      {
        newsId: 1,
        imageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        newsId: 2,
        imageId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('NewsImages', null, {});
  }
};
