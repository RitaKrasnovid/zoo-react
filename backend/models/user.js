module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['admin', 'visitor']],
      },
    },
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};
