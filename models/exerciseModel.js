// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    exercise_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isIn: [['cardio', 'strength', 'stretching', 'meditation']]
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
  return Exercise;
};

