const mongoose = require('mongoose')
const Product = require('../modules/product')
exports.homePage = (req, res) => {
    let data = [
    //     {name: 'Dam Briyani', price: "345", stock: true, rating: "4.6", store: "No 1"},
    //     {name: 'Sindhi Briyani', price: "400", stock: false, rating: "4.0", store: "No 2"},
    //     {name: 'Chiken Briyani', price: "370", stock: true, rating: "4.5", store: "No 3"},
    //     {name: 'Sahi Kabab', price: "299", stock: true, rating: "4.3", store: "No 1"},
    //     {name: 'Mutton Kabab', price: "375", stock: true, rating: "4.2", store: "No 2"},
    //     {name: 'kabab mughlai', price: "415", stock: false, rating: "4.8", store: "No 3"},
    //     {name: 'Pulao Rice', price: "199", stock: true, rating: "3.9", store: "No 1"},
    //     {name: 'Jeera Rice', price: "250", stock: true, rating: "4.2", store: "No 2"},
    //     {name: 'Fried Rice', price: "315", stock: false, rating: "4.5", store: "No 3"},
    //     {name: 'Tandoori Roti', price: "80", stock: false, rating: "4.5", store: "No 1"},
    //     {name: 'Kamachi Roti', price: "50", stock: true, rating: "4.3", store: "No 2"},
    //     {name: 'Rumali Roti', price: "65", stock: false, rating: "4.6", store: "No 3"},
    //     {name: 'Dal Fry', price: "165", stock: true, rating: "4.0", store: "No 1"},
    //     {name: 'Dal Makhani', price: "290", stock: false, rating: "4.4", store: "No 2"},
    //     {name: 'Dal Gosht', price: "150", stock: true, rating: "4.6", store: "No 3"},
    // {name: 'Plain Dosa', price: "180", stock: false, rating: "4.6", store: "No 1"},
    // {name: 'Masala Dosa', price: "200", stock: true, rating: "4.5", store: "No 2"},
    // {name: 'Moong Dosa', price: "170", stock: true, rating: "4.3", store: "No 3"},
    // {name: 'Palak Paneer', price: "200", stock: true, rating: "3.5", store: "No 1"},
    // {name: 'Paneer Makhani', price: "220", stock: true, rating: "4.8", store: "No 2"},
    // {name: 'Paneer Tikka', price: "250", stock: true, rating: "4.2", store: "No 3"},
    // {name: 'Fish Fry', price: "250", stock: true, rating: "4.1", store: "No 1"},
    // {name: 'Fish Cutlet', price: "200", stock: false, rating: "4.8", store: "No 2"},
    // {name: 'Fish Curry', price: "280", stock: true, rating: "4.6", store: "No 3"},
    // {name: 'Rava Halwa', price: "100", stock: true, rating: "4.8", store: "No 1"},
    // {name: 'Dudhi Halwa', price: "120", stock: false, rating: "4.2", store: "No 2"},
    // {name: 'Gajar Halwa', price: "135", stock: true, rating: "4.9", store: "No 3"},
    // {name: 'Milk Shake', price: "180", stock: true, rating: "4.2", store: "No 1"},
    // {name: 'Banana Shake', price: "200", stock: true, rating: "4.5", store: "No 2"},
    // {name: 'Strawberry Shake', price: "220", stock: true, rating: "4.0", store: "No 3"},
      ]

    //dammy data
    //  Product.insertMany(data).then(() => console.log("data added"))

    function escapeRegex(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };

    if (req.query.food) {
        const regex = new RegExp(escapeRegex(req.query.food), 'gi');
        Product.find({ "name": regex }).limit(3).exec( (err, founddata) => {
            if (err) console.log(err)
            else {
                if (founddata.length > 0) {
                    res.render("home", { data: founddata, message: "Your Search Result" })
                } else {
                    res.render("home", { data: false, message: "Sorry we don't get any Food" })
                }
            }
        })
    } else {
        Product.find({}, (err, founddata) => {
            if (err) console.log(err)
            else {
                res.render("home", { data: founddata, message: "All the products" })
            }
        })
    }
}

exports.cartPage = (req, res) => {
    res.render('cart', { message: "Your cart is Empty" })
}