'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'otpCode', {
      type: Sequelize.STRING,
      allowNull: true, // OTP is null until sent
    });
    await queryInterface.addColumn('Users', 'otpExpiresAt', {
      type: Sequelize.DATE,
      allowNull: true, // Expiration is null until OTP is sent
    });
    await queryInterface.addColumn('Users', 'isVerified', {
      type: Sequelize.BOOLEAN,
      defaultValue: false, // User is unverified initially
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'otpCode');
    await queryInterface.removeColumn('Users', 'otpExpiresAt');
    await queryInterface.removeColumn('Users', 'isVerified');
  }
};
