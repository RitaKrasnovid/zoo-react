module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Images', {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],
      },
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  }, {});

  Image.associate = (models) => {
    Image.belongsToMany(models.News, {
      through: 'NewsImages',
      as: 'news',
      foreignKey: 'imageId',
    });
    Image.belongsToMany(models.Animals, {
      through: 'AnimalsImages',
      as: 'animals',
      foreignKey: 'imageId',
    });
  };

  return Image;
};
