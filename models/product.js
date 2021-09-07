'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    kategori: DataTypes.STRING,
    warna: DataTypes.STRING,
    ukuran: DataTypes.STRING,
    harga: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    berat: DataTypes.INTEGER,
    kondisi: DataTypes.STRING,
    foto: DataTypes.TEXT,
    slide: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};