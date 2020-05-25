// // -- CREATE A WORKOUT MODEL DEFINITION -- //

module.exports = function (sequelize, DataTypes) {
  const Workout = sequelize.define("Workout", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      }
    },
    day: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  Workout.associate = function (models) {
    Workout.hasMany(models.Activity, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Workout;
};