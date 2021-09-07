'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    orderId: DataTypes.STRING,
    memberId: DataTypes.STRING,
    guestMember: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    qty: DataTypes.STRING,
    ekspedisiName: DataTypes.STRING,
    ekspedisiService: DataTypes.STRING,
    statusPengiriman: DataTypes.STRING,
    kodeUnik: DataTypes.STRING,
    totalBerat: DataTypes.STRING,
    subtotal: DataTypes.STRING,
    total: DataTypes.STRING,
    statusPembayaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};