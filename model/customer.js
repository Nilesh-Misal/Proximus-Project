'use strict';
module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define('Customer', {
    language: DataTypes.STRING,
    name:DataTypes.TEXT,
    companyname:DataTypes.STRING,
    address:DataTypes.STRING,
    postalcode:DataTypes.STRING,
    vatno:DataTypes.number,
    customer:DataTypes.STRING
  })
  return customer;
}