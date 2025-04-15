const db = require("../db/models/index")
const { BadRequestError, UnauthenticatedError,ForbiddenError , NotFoundError} = require('../errors');
require('dotenv').config();
const asyncWrapper = require("../middlewares/async");
const { StatusCodes } = require('http-status-codes');

const getAllProducts = asyncWrapper(async (req, res) => {
    const products = await db.Product.findAll();
    
    if (!products) {
        throw new NotFoundError('No products found');
    }
    return res.status(StatusCodes.OK).json({products})
})

const getProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const product = await db.Product.findOne({ where: { id } });
    if (!product) {
        throw new NotFoundError('Product not found');
    }
    return res.status(StatusCodes.OK).json({product})
})

const createProduct = asyncWrapper(async (req, res) => {
  const { name, price, stock, description,rating,category } = req.body;
  const imagePath = req.file.path;
  if (!name || !price || !stock || !description || !rating || !category || !imagePath) {
    throw new BadRequestError("Please fill all fields");
  }
  const product = await db.Product.create({ name, price, stock,description, rating, category, image:imagePath });
  return res.status(StatusCodes.CREATED).json({ product });
});

const updateProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const [updated] = await db.Product.update(req.body, {
        where: { id }
    });
    if (!updated) {
        throw new NotFoundError('Product not found');
    }
    return res.status(StatusCodes.OK).json({msg: 'Product updated successfully'})
});

const deleteProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const deleted = await db.Product.destroy({
        where: { id }
    });
    if (!deleted) {
        throw new NotFoundError('Product not found');
    }
    return res.status(StatusCodes.OK).json({msg: 'Product deleted successfully'})
});

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}