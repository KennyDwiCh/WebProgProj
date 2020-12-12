const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Image : {
        type: String,
        required: true
    },
    Name : {
        type: String,
        required: true
    },
    Description : {
        type: String,
        required: true
    },
    Color : String,
    ListPrice : {
        type: Number,
        required: true
    },
    Category : {
        type: String,
        required: true
    },
    Filter : String,
    Discount : Number
});

const itemDB = mongoose.model('itemDB', schema);

module.exports = itemDB;