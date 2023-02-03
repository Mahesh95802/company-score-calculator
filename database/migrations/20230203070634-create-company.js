'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      companySector: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      companyDescription: {
        type: Sequelize.STRING
      },
      companyCEO: {
        type: Sequelize.STRING
      },
      companyTags: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      companyPerformance: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};