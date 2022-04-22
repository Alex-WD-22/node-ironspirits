const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/Product.model");
const app = express();


app.set("views", __dirname + "/views"); // set config using views directory
app.set("view engine", "hbs"); // using view engine hbs


app.use(express.static('public'));

mongoose /// connecting to dadabase | Name of DB 
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));



app.get("/", (req, res, next) => {
    res.render('home')
});

app.get("/about", (req, res, next) => {
    res.render('about')
});


app.get('/contact', (req, res, next) => {
    res.render('contact')
})


app.get("/limoncello", (req, res, next) => {
    // res.render("view", info);

    Product.findOne({ title: 'Limoncello' })
        .then(prodcutDetails => {
            res.render("product", prodcutDetails)
        })
        .catch(err => {
            console.log('getting product from DB', err)
        })
});

app.get("/whisky", (req, res, next) => {

    Product.findOne({ title: 'whisky' })
    .then(productDetails => {
        res.render("product", productDetails)
    })
    .catch(err => {
        console.log('getting product from DB', err)
    })
});

app.get("/tequila", (req, res, next) => {
    Product.findOne({ title: 'tequila' })
    .then(productDetails => {

        
        res.render("product", productDetails)
    })
    .catch(err => {
        console.log('getting product from DB', err)
    })
});


app.listen(3000, () => {
    console.log("server listening to requests...")
});
