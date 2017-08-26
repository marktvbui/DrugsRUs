module.exports = function(sequelize, DataTypes) {
    var Interactions = sequelize.define("Interactions", {
      med1_id: DataTypes.INTEGER,
      med2_id: DataTypes.INTEGER,
      med1_name: DataTypes.STRING(500),
      med2_name: DataTypes.STRING(500),
      interaction: DataTypes.STRING(2000)
    });

    Interactions.associate = function(models) {
    Interactions.belongsTo(models.User, {
     foreignKey: {
      allowNull: false
     }
    });
  };
    return Interactions;
  };
