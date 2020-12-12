const body = require('body-parser');
const { error } = require('console');
const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/Men_Category_Suit",
    {useNewUrlParser:true}
)
const db = mongoose.connection;
db.once("open",()=>{
    console.log("Success connect ke monggose")
})
const Database = require('../models/database')
const Router = express.Router();
Router.use(express.json());



