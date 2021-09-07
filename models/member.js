'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Member.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    namaLengkap: DataTypes.STRING,
    noHp: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kodePos: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};