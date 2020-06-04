module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('NewsImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      newsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('NewsImages');
  },
};
