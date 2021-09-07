'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Infoweb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Infoweb.init({
    title: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    alamat: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    subdistrict: DataTypes.STRING,
    postalCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Infoweb',
  });
  return Infoweb;
};