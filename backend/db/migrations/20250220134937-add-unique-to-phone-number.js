"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Step 1: Temporarily allow NULL values
    await queryInterface.changeColumn("Users", "phoneNumber", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Step 2: Ensure all existing phone numbers are unique
    const users = await queryInterface.sequelize.query(
      `SELECT "id", "phoneNumber" FROM "Users";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const seenNumbers = new Set();
    for (const user of users) {
      if (!user.phoneNumber || seenNumbers.has(user.phoneNumber)) {
        await queryInterface.sequelize.query(
          `UPDATE "Users" SET "phoneNumber" = '000000000${user.id}' WHERE "id" = ${user.id};`
        );
      }
      seenNumbers.add(user.phoneNumber);
    }

    // Step 3: Apply the UNIQUE constraint
    await queryInterface.changeColumn("Users", "phoneNumber", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        Len: [10, 10],
        isNumeric: true,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "phoneNumber", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
  },
};
