const express = require("express");
const route = express.Router()

const services = require('../services/catRender')
const controller = require('../controller/controller');

route.get('/category', services.category);
route.get('/cat-items', services.selectedItem);




module.exports = route;