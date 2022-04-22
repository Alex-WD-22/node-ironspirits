const mongoose = require('mongoose');
const Product = require('../models/Product.model'); 

mongoose /// connecting to dadabase | Name of DB 
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


  const products = [
    {
        title: 'whisky',
        price: 40,
        imageFile: "single-malt.jpg"
    },
    {
        title: 'Tequila',
        price: 55,
        imageFile: "tequilla.png",
        stores: [],
    },
    {
        title: "Limoncello",
        price: 20,
        imageFile: "images.jpg",
        stores: ['Freiburg', 'Paris', 'Amsterdam', 'Berlin']
    },
    {
        title: "Lambrusco",
        price: 18,
    }
  ];



Product.insertMany(products)
  .then ( response => {
      console.log(`${response.length} prducts created!`);
      console.log(response)
      // close connection
  })
  .catch (  err=> {
    console.log("error creating products in DB")
    console.log(err)
  })
  .finally( () => {
    mongoose.connection.close()
  });

  