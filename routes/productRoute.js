const express = require('express');
const Product = require('../models/productModels')
const {getProducts, getProduct,createProduct,updateProduct,deleteProduct} = require('../controller/productController')

const router = express.Router();

//get all products
router.get('/', getProducts)

//get single product
router.get('/:id', getProduct)

//create product
router.post('/', createProduct)

//uptade a product
router.put('/:id', updateProduct )

//delete a product
router.delete('/:id', deleteProduct)

module.exports = router;