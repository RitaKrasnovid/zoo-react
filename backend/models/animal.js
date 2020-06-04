module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animals', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    family: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 15000],
      },
    },
  }, {});

  Animal.associate = (models) => {
    Animal.belongsToMany(models.Images, {
      through: 'AnimalsImages',
      as: 'images',
      foreignKey: 'animalId',
    });
  };

  return Animal;
};
