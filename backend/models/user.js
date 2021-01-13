module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: DataTypes.STRING,
    googleId: DataTypes.STRING,
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};
