"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "phoneNumber", {
      type: Sequelize.STRING,
      allowNull: false, 
      defaultValue: "0000000000",
    });

    await queryInterface.changeColumn("Users", "userType", {
      type: Sequelize.ENUM("admin", "worker", "costumer"), // Add new roles here
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "phoneNumber");

    await queryInterface.changeColumn("Users", "userType", {
      type: Sequelize.ENUM("admin", "user"), // Revert to original values
      allowNull: false,
    });
  },
};
