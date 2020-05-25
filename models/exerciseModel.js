// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    exercise_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isIn: [['stretching', 'cardio', 'strength-training', 'meditation']]
      },
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    }

  });
  Exercise.associate = function (models) {
    Exercise.belongsTo(models.Activity, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Exercise;
};
