const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const asyncHandler = require('../middleware/asyncHandler');
const products = require('../data/products');
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const p = await Product.findById(id);
    if (p) {
        return res.json(p);
    }
    res.status(404).json({ message: "Product Not Found" })
}))

module.exports = router;