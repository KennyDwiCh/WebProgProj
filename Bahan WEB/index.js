const express = require('express'); 
const router = express.Router();
const bodyParser = require('body-parser'); 
const session = require('express-session');
const mongoose = require("mongoose");
const acc = require('./models/user');

 

const app = express(); 

app.use(express.json());

// set the view engine to ejs 

app.set('view engine', 'ejs'); 

 

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

acc.find({"username": username, "password": password}).exec((error,data)=>{
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
const username = req.body.username;
const email = req.body.email;
const password = req.body.password;
const reppass = req.body.reppass;
const dateof = req.body.dateof;
const gender = req.body.gender;
const address = req.body.address;
const mobnum = req.body.mobnum;

var acc_insert = new acc({
    username : username,
    email : email,
    password : password,
    reppass : reppass,
    dateof : dateof,
    gender : gender,
    address : address,
    mobnum : mobnum,
})
acc_insert.save((err,product) => {
    if (err) console.log(err);
    console.log(JSON.stringify(product))
    res.redirect('/login');
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
