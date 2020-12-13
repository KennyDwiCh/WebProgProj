const express = require("express");
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller');

route.get('/', services.homeRouter);

route.get('/items', services.itemPage);

route.get('/itemsElec', services.itemPageElec);

route.get('/checkout', services.checkOut); 

route.get('/show-data', services.showPage);

route.get('/input-data', services.inputPage);

//API
route.post('/api/items', controller.create);
route.get('/api/items', controller.find);
route.put('/api/items/:id', controller.update);
route.delete('/api/items/:id', controller.delete);



module.exports = route;