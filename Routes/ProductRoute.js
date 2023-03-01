const express = require('express');
const { createProduct, getProducts } = require('../Controllers/productController') 

const productRouter = express.Router();

productRouter.route('/products')
    .get(getProducts)
    .post(createProduct)

module.exports = productRouter;