const express = require('express'); 
const router = express.Router();
const bodyParser = require('body-parser'); 
const session = require('express-session');
const mongoose = require("mongoose");
const user = require('./models/user');

 

const app = express(); 

app.use(express.json());

// set the view engine to ejs 

app.set('view engine', 'ejs'); 
app.use(session({ 

    secret: 'some_secret_key', 
  
    cookie: {} 
  
  })); 
 

 

// body-parser to parse request body 

router.use(bodyParser.urlencoded()); 

mongoose.connect(
    "mongodb://127.0.0.1:27017/Account-ponshop",
    {useNewUrlParser:true}
)
const db = mongoose.connection;
db.once("open",()=>{
    console.log("Succses connect ke monggose")
})
 

// static files 

app.use("/public",express.static(__dirname + '/public'));
 

// routes 
app.get('/login', async (req,res)=>{
    res.render('pages/Login');
});

app.post('/login', async (req,res)=>{

const username = req.body.username;
const password = req.body.password;

user.find({"username": username, "password": password}).exec((error,data)=>{
    if(error) console.log(JSON.stringify(error));
    if(data){
        console.log("Find: "+JSON.stringify(data));
        req.session.user = username;
        res.redirect('/account');
    }
});
});
app.get('/account', async (req,res)=>{
res.render('pages/Account');
});

app.get('/register',async(req,res)=>{
res.render('pages/Login',{layout:false});
});

app.post('/register',async(req,res)=>{
var acc_insert = new user({
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    reppass : req.body.reppass,
    dateof : req.body.dateof,
    gender : req.body.gender,
    address : req.body.address,
    mobnum : req.body.mobnum,
})
acc_insert.save((err,product) => {
    if (err) console.log(err);
    console.log(JSON.stringify(product))
    res.redirect('/account');
});
});

app.get('/logout',async(req,res)=>{
req.session.destroy();
res.redirect('/login');
});
module.exports = app;

// start server on port 3000 

app.listen(3000); 

console.log('Server runs at port 3000...'); 
