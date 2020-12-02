const { json } = require('body-parser');
const { error } = require('console');
const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");
const acc = require('./acc');

mongoose.connect(
    "mongodb://127.0.0.1:27017/Account-ponshop",
    {useNewUrlParser:true}
)
const db = mongoose.connection;
db.once("open",()=>{
    console.log("Succses connect ke monggose")
})
const account = require('./acc')
const Router = express.Router();

Router.get('/Login', async (req,res)=>{
    if (req.session.user){
        res.redirect('/');
    }else{
        res.render('/Login', {layout:false});
    }
});

Router.post('/Login', async (req,res)=>{
    
    const username = req.body.username;
    const password = req.body.password;

    acc.find({"username": username, "password": password}).exec((error,data)=>{
        if(error) console.log(JSON.stringify(error));
        if(data){
            console.log("Find: "+JSON.stringify(data));
            req.session.user = username;
            res.redirect('/');
        }
    });
});
Router.get('/register',async(req,res)=>{
    res.render('register',{layout:false});
});

Router.post('/register',async(req,res)=>{
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
        res.redirect('/Login');
    });
});

Router.get('/logout',async(req,res)=>{
    req.session.destroy();
    res.redirect('/Login');
});
module.exports = Router;