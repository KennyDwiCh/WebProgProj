const mongoose = require('mongoose');
// const db = ('../database/connection');

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
// module.exports = {
//     fetchData:function(callback){
//         var userData=itemDB.find({});
//         userData.exec(function(err, data){
//             if(err) throw err;
//             return callback(data);
//         })
        
//      }
// }