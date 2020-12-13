const express = require('express'); 
const router = express.Router();
const bodyParser = require('body-parser'); 
const session = require('express-session');
const mongoose = require("mongoose");
const user = require('./models/user');
const { static } = require('express');
const connectDB = require('./server/database/connection');
const database_searching = require('./server/model/item');
const app = express(); 


app.use(express.json());

// set the view engine to ejs 

app.set('views', './views')
app.set('view engine', 'ejs'); 
app.use(session({ 
    secret: 'some_secret_key', 
    cookie: {} 
})); 
 
//MonggoDB Connection
 connectDB();
// body-parser to parse request body 

router.use(bodyParser.urlencoded()); 

// mongoose.connect(
//     "mongodb://127.0.0.1:27017/Account-ponshop",
//     {useNewUrlParser:true}
// )
//const db = mongoose.connection;
// db.once("open",()=>{
//     console.log("Success connect ke monggose")
// })
 

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

// Setelah disearching muncul 

// testing format searching 
app.get('/Search' , (req,res) => {
    res.render('pages/Search' , {pageTitle : 'PONSHOP'});
});


app.post('/Search' , async (req,res) => {
    
const search_name = req.body.Name;

var searching = database_searching.find({Name : {$regex: search_name}})
    searching.exec((error, data) => {
    if (error) console.log("No Result for " + search_name);
    if (data) console.log("Got result in = " + JSON.stringify(data));  
    res.redirect('/Search');
});
     
});

// routes 
app.use('/', require('./server/route/routes'))
app.use('/', require('./server/route/catRoute'))

app.get('/account', async (req,res)=>{
res.render('pages/Account',{layout:false});
});
app.put('/account', async (req,res)=>{
    var username = req.session.user
    user.find({'username' : username}.exec((error,data)=>{
        if(error) console.log(JSON.stringify(error));
        if(data){
            console.log("Find: "+JSON.stringify(data));
            document.getElementsByName('username').innerHTML = user.username;
            document.getElementsByName('dateof').innerHTML = user.dateof;
            document.getElementsByName('mobnum').innerHTML = user.mobnum;
            document.getElementsByName('gender').innerHTML = user.gender;
            document.getElementsByName('email').innerHTML = user.email;
            document.getElementsByName('address').innerHTML = user.address;
        }
    }))
});
app.get('/login', async (req,res)=>{
    res.render('pages/Login');
});

app.post('/login', async (req,res)=>{

const username = req.body.username;
const password = req.body.password;

user.find({"username": username, "password": password}).exec((error,data)=>{
    if(error) {
        console.log(JSON.stringify(error));
        res.redirect('/login')
    }
    if(data){
        console.log("Find: "+JSON.stringify(data));
        req.session.user = username;
        console.log(req.session.user);
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
    req.session.user = req.body.username;
    res.redirect('/account');
});
});
app.post('/update',async(req,res)=>{
    const username = req.body.username;
    user.find({"username": username}).exec((error,data)=>{
        if (error) console.log(error);
        if (data){
user.update({username:req.body.username},
    {email : req.body.email},
    function(err,res){
    if (err) throw err;
    console.log(req.body.email);
});
user.update({email : req.body.email},
    {dateof : req.body.dateof},
    function(err,res){
    if (err) throw err;
    console.log(req.body.dateof);
});
user.update({dateof : req.body.dateof},
    {gender : req.body.gender},
    function(err,res){
    if (err) throw err;
    console.log(req.body.gender);
});
user.update({gender : req.body.gender},
    {address : req.body.address},
    function(err,res){
    if (err) throw err;
    console.log(req.body.address);
});
user.update({address : req.body.address},
    {mobnum : req.body.mobnum},
    function(err,res){
    if (err) throw err;
    console.log(req.body.mobnum);
});
user.update({mobnum : req.body.mobnum},
    {username:req.body.username},
    function(err,res){
    if (err) throw err;
    console.log(req.body.username);
});
}
});
res.redirect('/account');
});

app.post('/logout',async(req,res)=>{
req.session.destroy();
res.redirect('/login');
});
module.exports = app;

// start server on port 3000 

app.listen(3000); 

console.log('Server runs at port 3000...'); 
module.exports = router;

