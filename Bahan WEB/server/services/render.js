
exports.homeRouter = (req, res) =>{
    res.render('layout/main', {pageTitle: 'PONSHOP', header:'header', body:'home', footer:'footer'});
}

exports.itemPage = (req, res) =>{
    res.render('pages/templateItem', {pageTitle: 'PONSHOP'});
}

exports.itemPageElec = (req, res) =>{
    res.render('pages/templateItemElec', {pageTitle: 'PONSHOP'});
}

exports.checkOut = (req, res) =>{
    res.render('pages/checkout', {pageTitle: 'PONSHOP'});
}