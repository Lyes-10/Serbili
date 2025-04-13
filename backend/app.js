const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const {sequelize} = require('sequelize')

require('dotenv').config();
const cors = require('cors');
//middlewares
const errorHandlerMiddleware = require('./middlewares/error-handelr');
const notFound = require('./middlewares/notFound-error')
const authentication = require('./middlewares/authentication')
//routes
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const dashboardRouter = require('./routes/dashboard');
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());
//routes
app.use('/products',authentication, productsRouter);
app.use('/cart',authentication, cartRouter);
app.use('/auth', authRouter);
app.use('/order',authentication, orderRouter);
app.use('/dashboard',authentication, dashboardRouter);

//image access 
app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
  res.send('Hello World');
  
});
app.get('/about', authentication ,(req, res) => {
  res.json({msg: 'Welcome to the about page'});
})

app.use(notFound);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
