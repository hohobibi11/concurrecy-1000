'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
    }
  }

  Account.init({
    balance: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Account',
    timestamps: false,
  });
  return Account;
};
