const axios = require('axios');


exports.homeRouter = (req, res) =>{
    res.render('layout/main', {pageTitle: 'PONSHOP', header:'header', body:'home', footer:'footer'});
}

exports.itemPage = (req, res) =>{
    res.render('pages/templateItem', {pageTitle: 'PONSHOP', header:'header'});
}

exports.itemPageElec = (req, res) =>{
    res.render('pages/templateItemElec', {pageTitle: 'PONSHOP', header:'header'});
}

exports.checkOut = (req, res) =>{
    res.render('pages/checkout', {pageTitle: 'PONSHOP'});
}

exports.showPage = (req, res) => {
    axios.get("http://localhost:3000/api/items")
    .then(function(response){
        console.log(response.data)
        res.render('pages/showData',{items: response.data});
    })
    .catch(err =>{
        res.render(err);
    })
    
}

exports.inputPage = (req, res) => {
    res.render('pages/inputData',{items: response});
}