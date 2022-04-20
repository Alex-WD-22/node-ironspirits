const express = require("express");
const app = express();


app.set("views", __dirname + "/views"); // set config using views directory
app.set("view engine", "hbs"); // using view engine hbs


app.use(express.static('public'));


app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});


app.get('/contact', (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
})


app.get("/limoncello", (req, res, next) => {

    // res.render("view", info);

    const data = {
        title: "Limoncello",
        price: 20,
        imageFile: "images.jpg",
        stores: ['Freiburg', 'Paris', 'Amsterdam', 'Berlin']
    }

    res.render("product", data)
});


app.get("/whisky", (req, res, next) => {
    const data = {
        title: 'whiskey',
        price: 40,
        imageFile: "single-malt.jpg"
    }
    res.render("product", data)
});

app.get("/tequila", (req, res, next) => {
    const data = {
        title: 'Tequila',
        price: 55,
        imageFile: "tequilla.png",
        stores: []
    }
    res.render("product", data)
});


app.listen(3000, () => {
    console.log("server listening to requests...")
});
