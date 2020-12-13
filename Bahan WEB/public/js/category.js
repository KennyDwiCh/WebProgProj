function formatToCurrency(amount){
    return "IDR "+(amount).toLocaleString("id-ID")+",-";
}

function discount(price, disc){
    var harga = price*((100-disc)/100);
    return "IDR "+(harga).toLocaleString("id-ID")+",-";
}

function formatDiscount(disc){
    return (disc).toString()+"%";
}

function save(price, disc){
    var harga = price - (price*((100-disc)/100));
    return "IDR "+(harga).toLocaleString("id-ID")+",-";
}