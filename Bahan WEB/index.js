const express = require('express'); 
const router = express.Router();
const bodyParser = require('body-parser'); 
const session = require('express-session');
const mongoose = require("mongoose");
const user = require('./models/user');
const { static } = require('express');
const app = express(); 


app.use(express.json());

// set the view engine to ejs 

app.set('views', './views')
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
    console.log("Success connect ke monggose")
})
 

// static files 

app.use("/public",express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static("Database JSON"));
app.use('/kumpulanData', express.static(__dirname+ 'Database JSON/kumpulanData'));
app.use('/css', express.static(__dirname+ 'public/css'));
app.use('/js', express.static(__dirname+ 'public/js'));
app.use('/img', express.static(__dirname+ 'public/img'));
app.use('/json', express.static(__dirname+ 'public/json'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes 
app.get('/', (req,res)=>{
    res.render('layout/main', {pageTitle: 'PONSHOP', header:'header', body:'home', footer:'footer'});
});

// app.get('/items', (req,res)=>{
//     res.render('layout/selectedItems', {pageTitle: 'PONSHOP', header:'header', body:'templateItem'});
// });

app.get('/items',(req,res)=>{
    res.render('pages/templateItem', {pageTitle: 'PONSHOP'});
});

app.get('/itemsElec',(req,res)=>{
    res.render('pages/templateItemElec', {pageTitle: 'PONSHOP'});
});


//app.get('/Filter', (req,res) => {
//    res.render('pages/' , {pagetitle: 'ponshop'});
//})

// Setelah disearching muncul 

// const database_searching = require('.models/database');

//app.post('/' , async (req,res) => {

//const category_barang = req.body.category_barang;

//var searching = database_searching.find({Name : {$regex: "J"}})
    // searching.exec((error, data) => {
    //      if (data) console.log("Got result in = " + JSON.stringify(data));
   // })
     
//})

app.get('/account', async (req,res)=>{
res.render('pages/Account',{layout:false});
});
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
