const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },    
    price: {
        type: Number,
        min: 1
    },
    hasStock: {
        type: Boolean,
        default: true
    },  
    tags: {
        type: [String],
        enum: ["spirits", "drink", "italian", "japanise", 'besteller']
    },
     // in Lab !! also can store Objects
    imageFile: {
        type: String,   //more information type it like this
        default: "default.jpg"
    },
    store: {
        type: String,
        enum: ["online", "germany", "colombia"]
    }
});

const Product = mongoose.model('Product', productSchema);

// export to the outside world whatever you have in the Product!!
module.exports = Product;

