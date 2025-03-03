'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // Compare password
    async comparePassword(plainPassword) {
      return await bcrypt.compare(plainPassword, this.password);
    }
    // Generate access token
    async generateAccessToken() {
      return jwt.sign({ userId: this.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
    }
    // Verify token
    async verifyToken(token) {
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    }
    static associate(models) {
      // Define association here
      User.hasMany(models.RefreshToken, { foreignKey: 'userId', as: 'refreshTokens' });
    }
  }

  User.init(
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      userType: {
        type: DataTypes.ENUM('admin', 'worker', 'customer'),
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '0000000000',
        unique: true,
      },
      otpCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otpExpiresAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'Users',
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
    }
  );
  return User;
};
