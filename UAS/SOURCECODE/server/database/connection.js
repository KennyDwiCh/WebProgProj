const mongoose = require('mongoose');
const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Account-ponshop";
const connectDB = async()=>{
    try{
        const con = await mongoose.connect(url, 
            {useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`mongoose Connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1); 
    }
}

module.exports = connectDB;