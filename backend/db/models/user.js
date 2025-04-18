'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    //comapre password
    async comparePassword(plainPassword) {
      return await bcrypt.compare(plainPassword, this.password);
    }
    // generate acces token
    async generateAccessToken() {
      return jwt.sign({ userId: this.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION  });
    }
    // verify token
    async verifyToken(token) {
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    }
    static associate(models) {
      // define association here
      User.hasMany(models.refreshToken, { foreignKey: 'userId', as: 'refreshTokens' });
    }
  }
  User.init({
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
        isEmail:true
      }
    },
    userType: {
      type: DataTypes.ENUM('shop', 'warehouse'),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0000000000',
      unique:true
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
    address:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    profileImage:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    emergencyContact:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    paper:{
      type: DataTypes.TEXT,
      allowNull:false,
    }
    
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users',
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  });
  return User;
};