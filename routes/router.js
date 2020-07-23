const express = require('express');
const router = express.Router()
const { homePage, cartPage } = require('../controllers/product')


//home route
router.get('/', homePage)

//cart route
router.get('/cart', cartPage)

module.exports = router;