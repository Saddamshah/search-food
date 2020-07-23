require('dotenv').config()
const express = require('express')
const app = express();
const ejs = require('ejs')
const mongoose = require('mongoose');
const homePageRoutes = require('./routes/router')

const url = process.env.DATABASE_URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB CONNECTED"))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', homePageRoutes)

const PORT = process.env.PORT || 9595;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))