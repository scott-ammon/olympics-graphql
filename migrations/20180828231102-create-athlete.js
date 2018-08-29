'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('athletes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.REAL
      },
      weight: {
        type: Sequelize.REAL
      },
      team: {
        type: Sequelize.STRING
      },
      noc: {
        type: Sequelize.STRING
      },
      games: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      season: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      sport: {
        type: Sequelize.STRING
      },
      event: {
        type: Sequelize.STRING
      },
      medal: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('athletes');
  }
};