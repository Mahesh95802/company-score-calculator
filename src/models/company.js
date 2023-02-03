'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    companyId: DataTypes.STRING,
    companySector: DataTypes.STRING,
    companyName: DataTypes.STRING,
    companyDescription: DataTypes.STRING,
    companyCEO: DataTypes.STRING,
    companyTags: DataTypes.ARRAY(DataTypes.STRING),
    companyPerformance: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};