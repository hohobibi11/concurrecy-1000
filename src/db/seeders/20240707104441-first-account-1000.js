'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Accounts', [{ balance: 1000 }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
