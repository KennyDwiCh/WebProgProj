const body = require('body-parser');
const { error } = require('console');
const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");
const acc = require('../models/User');

mongoose.connect(
    "mongodb://127.0.0.1:27017/Account-ponshop",
    {useNewUrlParser:true}
)
const db = mongoose.connection;
db.once("open",()=>{
    console.log("Succses connect ke monggose")
})
const account = require('../models/User')
const Router = express.Router();
Router.use(express.json());

