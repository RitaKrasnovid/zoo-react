
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AnimalsImages', [
      {
        animalId: 1,
        imageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        animalId: 2,
        imageId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        animalId: 3,
        imageId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        animalId: 4,
        imageId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        animalId: 6,
        imageId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        animalId: 7,
        imageId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AnimalsImages', null, {});
  },
};
