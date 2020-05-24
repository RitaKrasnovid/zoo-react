module.exports = (sequelize, DataTypes) => {
  const AnimalsImages = sequelize.define('AnimalsImages', {
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  AnimalsImages.associate = function (models) {
    // associations can be defined here
  };

  return AnimalsImages;
};
