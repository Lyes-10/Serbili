'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "userType", {
      type: Sequelize.ENUM("admin", "worker", "costumer"), // Add new roles here
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "userType", {
      type: Sequelize.ENUM("admin", "user"), // Revert to original values
      allowNull: false,
    });
  }
};
