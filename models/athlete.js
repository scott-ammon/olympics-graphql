'use strict';
module.exports = (sequelize, DataTypes) => {
  var athlete = sequelize.define('athlete', {
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.REAL,
    weight: DataTypes.REAL,
    team: DataTypes.STRING,
    noc: DataTypes.STRING,
    games: DataTypes.STRING,
    year: DataTypes.INTEGER,
    season: DataTypes.STRING,
    city: DataTypes.STRING,
    sport: DataTypes.STRING,
    event: DataTypes.STRING,
    medal: DataTypes.STRING
  }, {});
  athlete.associate = function(models) {
    // associations can be defined here
  };
  return athlete;
};