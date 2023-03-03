const express = require('express');
const { createProduct, getProducts, editProduct, deleteProduct } = require('../Controllers/productController') 

const productRouter = express.Router();

//! endpoints
productRouter.route('/products')
    .get(getProducts)    
    .post(createProduct)

productRouter.route('/products/:productId')
    .put(editProduct)
    .delete(deleteProduct)



module.exports = productRouter;