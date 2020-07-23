const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    store: String,
    rating: String,
    stock: Boolean
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product;