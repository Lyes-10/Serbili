const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

//middlewares
const errorHandlerMiddleware = require('./middlewares/error-handelr');
const notFound = require('./middlewares/notFound-error')
const router = require('./routes/auth');
const authentication = require('./middlewares/authentication')

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());

app.use('/auth', router);
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/about', authentication ,(req, res) => {
  res.json({msg: 'Welcome to the about page'});
})

app.use(notFound);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server is running on port ${PORT}`);
});