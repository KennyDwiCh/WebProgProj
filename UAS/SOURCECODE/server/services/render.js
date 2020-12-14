exports.homeRouter = (req, res) =>{
    res.render('layout/main', {pageTitle: 'PONSHOP', header:'header', body:'home', footer:'footer'})
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
        res.render('pages/showData',{items: response.data});   
}

exports.inputPage = (req, res) => {
    res.render("pages/inputData");  
}

exports.updatePage = (req, res) => {
        res.render("pages/updateData");
}