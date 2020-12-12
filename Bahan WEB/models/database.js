var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({
    Image : String,
    Name : String,
    Description : String,
    Color : String,
    List_Price : Number,
    Category : String,
    Filter : String,
    Discount : Number,
    Price : Number,
    Save : Number
});

module.exports = mongoose.model('database' , categorySchema);