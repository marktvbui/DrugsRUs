module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: {msg: 'Reason'}
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
           args: [6, 20],
           msg: "The password length should be between 7 and 20 characters."
        }
      }
  };
  return User;
};