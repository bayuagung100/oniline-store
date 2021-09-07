'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      kategori: {
        type: Sequelize.STRING
      },
      warna: {
        type: Sequelize.STRING
      },
      ukuran: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.STRING
      },
      stok: {
        type: Sequelize.INTEGER
      },
      berat: {
        type: Sequelize.INTEGER
      },
      kondisi: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.TEXT
      },
      slide: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};