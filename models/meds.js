module.exports = function(sequelize, DataTypes) {
  var Medicine = sequelize.define('Medicine', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    medicine_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Medicine.associate = function(models) {
    Medicine.belongsTo(models.User, {
     foreignKey: {
      allowNull: false
     }
    });
  };

  return Medicine;
};