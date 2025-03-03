const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging; default: console.log
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Accept self-signed certificates
    },
  },
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Import the User model
const UserModel = require('./models/user')(sequelize, Sequelize.DataTypes);

// Export the sequelize instance and models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Users = UserModel;

module.exports = db;
