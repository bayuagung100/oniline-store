'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.STRING
      },
      memberId: {
        type: Sequelize.STRING
      },
      guestMember: {
        type: Sequelize.TEXT('long')
      },
      size: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.STRING
      },
      ekspedisiName: {
        type: Sequelize.STRING
      },
      ekspedisiService: {
        type: Sequelize.STRING
      },
      statusPengiriman: {
        type: Sequelize.STRING
      },
      kodeUnik: {
        type: Sequelize.STRING
      },
      totalBerat: {
        type: Sequelize.STRING
      },
      subtotal: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      statusPembayaran: {
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
    await queryInterface.dropTable('Orders');
  }
};