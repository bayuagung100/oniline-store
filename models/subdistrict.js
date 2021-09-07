'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subdistrict extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subdistrict.init({
    subdistrictId: DataTypes.STRING,
    provinceId: DataTypes.STRING,
    provinceName: DataTypes.STRING,
    cityId: DataTypes.STRING,
    cityName: DataTypes.STRING,
    type: DataTypes.STRING,
    subdistrictName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subdistrict',
  });
  return Subdistrict;
};