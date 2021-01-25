module.exports = (sequelize, DataTypes) => {
  const NewsImages = sequelize.define('NewsImages', {
    newsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {});

  NewsImages.associate = function (models) {
    // associations can be defined here
  };

  return NewsImages;
};
