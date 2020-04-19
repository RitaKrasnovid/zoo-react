module.exports = (sequelize, DataTypes) => {
  const NewsImages = sequelize.define('NewsImages', {
    newsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  NewsImages.associate = function (models) {
    // associations can be defined here
  };

  return NewsImages;
};
