const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Account-onshop"
const connectDB = async()=>{
    try{
        const con = await mongoose.connect(url, 
            {useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MonggoDB Connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1); 
    }
}

module.exports = connectDB;