'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMidtrans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PaymentMidtrans.init({
    orderId: DataTypes.STRING,
    transactionId: DataTypes.STRING,
    transactionStatus: DataTypes.STRING,
    transactionTime: DataTypes.DATE,
    paymentMethod: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PaymentMidtrans',
  });
  return PaymentMidtrans;
};