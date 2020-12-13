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

function doSomething(clickedElement) {
    var itemID = clickedElement;
    localStorage.setItem("serialID", itemID);
}



var itemFixed = localStorage.getItem("serialID")
console.log(itemFixed);
var eles = document.getElementById("beautySkin").id = itemFixed;
console.log(eles);  



$.getJSON('public/json/kumpulanDataHome/allCat.json', function(data){
    let beautySkin = data[eles];  
    $.each(beautySkin, function(i, data){
        $('#clickedItems').append('<div onclick="sendInfo(this)" class="col-md-3 mb-4 z '+ eles +''+[i+1]+'"><a href="items"><div class="card h-100" style="width: 19rem;"><img class="card-img-top" src="'+ data.Image +'" alt="Card image cap"><div class="card-body"><h5 class="card-title"><b>' + data.Name + '</b></h5><p class="card-text" >' + data.Description + '<h6 style="color: #006667;"><b>' + formatToCurrency(data.ListPrice) + '</b></h6></a> </div></div></a></div>');
        document.getElementById("nameBody").innerHTML=data.namaItem;
        document.getElementById("changeName2").innerHTML=data.namaItem;
    }); 
    // window.onload = 
    
    
});
