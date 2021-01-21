module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 150],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 2000],
      },
    },
    videoId: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 150],
      },
    },
  }, {});

  News.associate = (models) => {
    News.belongsToMany(models.Images, {
      through: 'NewsImages',
      as: 'images',
      foreignKey: 'newsId',
    });
  };

  return News;
};
