'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subdistricts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subdistrictId: {
        type: Sequelize.STRING
      },
      provinceId: {
        type: Sequelize.STRING
      },
      provinceName: {
        type: Sequelize.STRING
      },
      cityId: {
        type: Sequelize.STRING
      },
      cityName: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      subdistrictName: {
        type: Sequelize.STRING
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Subdistricts');
  }
};