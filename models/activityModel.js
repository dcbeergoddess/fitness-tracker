// // -- CREATE AN ACTIVITY MODEL DEFINITION -- //

module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define("Activity", {
    duration: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
  });

  Activity.associate = function(models) {
    Activity.belongsTo(models.Workout,{
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Activity;
};