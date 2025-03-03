const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db'); // Adjust the path to your connection file
require('dotenv').config();

// Middlewares
const errorHandlerMiddleware = require('./middlewares/error-handelr');
const notFound = require('./middlewares/notFound-error');
const router = require('./routes/auth'); // Adjust the path to your router file
const authentication = require('./middlewares/authentication');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Database connected successfully: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('Database connection error');
    console.error('Database connection error', err.stack);
  }
});

app.use('/auth', router); // Use the router
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/about', authentication, (req, res) => {
  res.json({ msg: 'Welcome to the about page' });
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
