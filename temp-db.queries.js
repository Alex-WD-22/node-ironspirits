const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose /// connecting to dadabase
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


// Product.create({ title: "tequila", price: 35, hasStock: true, tags: ["spirits", "best-sellers"] })

                            //we give name Product
 // schema to keep consitancy of data
                                                // structure to database

// Product.create({title: "limoncello", price: 20})
//     .then( product => console.log("a new product was created", product))
//     .catch(error => console.log("error creating a product in DB", error) )

// Product.create({ title: "whisky", price: 105 })
//     .then(product => console.log("a new product was created", product))
//     .catch(error => console.log("error creating a product in DB", error));


// Product.find()
// Product.find({})
// // give all Products in DB 
// Product.find({price: {$gt: 20}})
//     .then( (allProducts) => {
//         console.log(allProducts)
//     })
//     .catch( error => console.log("error getting products from DB", error) );

// const.Product =mongoose.model('Product', productSchema)

// const data = {
//     titel: 'Lambrusco',
//     price: 16,
//     tags: ["drink"]
// }

// Product.create(data)
//     .then(product => console.log("a new product was created", product))
//     .catch(error => console.log("error creating a product in DB", error));


// Product.find({price: {$gt: 30}})
//        .then( productsArr => {
//            console.log("products above 30 are", productsArr)
//        })
//        .catch( error => console.log("error something went wrong"))

//        Product.findById('6261358c3f0d02a0063b6a0c')
//        .then( product => {
//         console.log('this is one product', product)
//        })
//         .catch( error => console.log("error something went wrong"))

// Add `store: ["online"]` to all products in the DB
// Product.updateMany({store: "online"})
//     .then( response => console.log("products updated successfully"))
//     .catch( err => console.log("error updating products from DB", err));


// Add the tag "best-sellers" to all products
// Product.updateMany({price: {$lt: 5}}, {$push: {tags: "best-sellers"}})
//     .then( response => console.log("products updated successfully"))
//     .catch( err => console.log("error updating products from DB", err));

                                                                        // updated in Terminal not only in DB
// Product.findByIdAndUpdate('6261358c3f0d02a0063b6a0b', {price: '60', { returnDocument: 'after' })
// .then( response => console.log("products updated successfully"))
// .catch( err => console.log("error updating products from DB", err));



Product.findByIdAndDelete('6261358c3f0d02a0063b6a0c', {hasStock: true})
.then( response => console.log("products updated successfully"))
.catch( err => console.log("error updating products from DB", err));