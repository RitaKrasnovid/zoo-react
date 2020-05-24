
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AnimalsImages', [{
      animalId: 1,
      imageId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AnimalsImages', null, {});
  },
};
