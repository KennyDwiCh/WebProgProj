exports.category = (req, res) =>{
    res.render('pages/category', {pageTitle: 'PONSHOP'});
}

exports.selectedItem = (req, res) =>{
    res.render('pages/clickedCat', {pageTitle: 'PONSHOP', header:'header', footer:'footer'});
}