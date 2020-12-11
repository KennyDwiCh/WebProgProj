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

$.getJSON('public/json/kumpulanDataHome/homeMen.json', function(data){
    let men = data.men;
    
    $.each(men, function(i, data){
        $('#homeMen').append('<div onclick="sendInfo(this)" class="col-md-3 mb-4 z men'+[i+1]+'" ><a href="items"><div class="card h-100 " style="width: 19rem;"><img  class="card-img-top " src="'+ data.Image +'" alt="Card image cap"><div class="card-body"><h5 class="card-title"><b>' + data.Name + '</b></h5><p class="card-text" style="height: 100px;" >' + data.Description + '<h6 style="color: #006667;"><b>' + data.Harga + '</b></h6></a> </div></div></a></div>'); 
    }); 
    // var els = document.querySelectorAll('#homeMen .thisImage');
    // $.each(men, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('men'+[i+1]);
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeWomen.json', function(data){
    let women = data.women;
 
    $.each(women, function(i, data){
        $('#homeWomen').append('<div onclick="sendInfo(this)" class="col-md-3 mb-4 z women'+[i+1]+'"><a href="templateItem.html"><div class="card h-100" style="width: 19rem;"><img class="card-img-top" src="'+ data.Image +'" alt="Card image cap"><div class="card-body"><h5 class="card-title"><b>' + data.Name + '</b></h5><p class="card-text" style="height: 100px;">' + data.Description + '<h6 style="color: #006667;"><b>' + formatToCurrency(data.ListPrice) + '</b></h6></a> </div></div></a></div>');
    }); 
    // var els = document.querySelectorAll('#homeWomen .thisImage');
    // $.each(women, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('women'+[i+1]);
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeTotebags.json', function(data){
    let totebags = data.totebags;
 
    $.each(totebags, function(i, data){
        $('#totebagsCol').append('<div onclick="sendInfo(this)" class="col-md-4 mb-4 z totebag'+[i+1]+'"><a href="templateItem.html"><div type="button" data-toggle="modal" data-target="#midlightpink" class="card"style="border-color: #DCDCDC; border-top-right-radius: 33px; border-top-left-radius: 33px;"><img class="card-img-top" src="'+ data.Image +'" alt="Card image cap" style="border-top-right-radius: 33px; border-top-left-radius: 33px;"><div class="card-body"><h5 class="card-title"><b>' + data.Name + '</b></h5> <p class="card-text" style="font-size: 12px;">' + data.Description + '</p> <h6 style="color: #006667;"><b>' + formatToCurrency(data.ListPrice) + '</b></h6></div> </div></a></div>');
    }); 
    // var els = document.querySelectorAll('#totebagsCol .thisImage');
    // $.each(totebags, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('totebag'+[i+1]);
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeHoodies.json', function(data){
    let hoodies = data.hoodies;
 
    $.each(hoodies, function(i, data){
        $('#hoodiesCol').append('<div onclick="sendInfo(this)" class="col-md-4 mb-4 z hoodie'+[i+1]+'"><a href="templateItem.html"><div type="button" data-toggle="modal" data-target="#midlightpink" style="border-top-right-radius: 33px; border-top-left-radius: 33px;" class="card border border-#dcdcdc"><img class="card-img-top" src="'+ data.Image +'" style="border-top-right-radius: 33px; border-top-left-radius: 33px;" alt="Card image cap"><div class="card-body"><h5 class="card-title"><b>' + data.Name + '</b></h5> <p class="card-text" style="font-size: 12px;">' + data.Description + '</p> <h6 style="color: #006667;"><b>' + formatToCurrency(data.ListPrice) + '</b></h6></div> </div></a></div>');
    }); 
    // var els = document.querySelectorAll('#hoodiesCol .thisImage');
    // $.each(hoodies, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('hoodie'+[i+1]);
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeFurniture.json', function(data){
    let furnitures = data.furnitures;
 
    $.each(furnitures, function(i, data){
        if(i%2==0){
            $('#furnitureCol').append('<a href="templateItem.html"><img onclick="sendInfo(this)" class="mr-3 mb-5 zzzzz furniture'+[i+1]+'" src="'+ data.Image +'" width="400px" height="auto" alt="Generic placeholder image" ></a><div class="media-body"><div class="bingkai "><h5 class="mt-0"><b>' + data.Name + '</b></h5> <div class="row"><div class="col-3" style="font-size: smaller;">List Price</div><div class="col-8" style=" font-size: smaller;"><strike>'+ formatToCurrency(data.ListPrice) +'</strike></div></div> <div class="row"><div class="col-3" style="font-size: medium;">Price</div> <div class="col-8" style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice, data.Discount) +'</b></div> </div><div class="row"><div class="col-3" style="font-size: smaller;">Save</div> <div class="col-8" style=" font-size: smaller;">'+ save(data.ListPrice, data.Discount) +'</div> </div> </div><p><br>'+ data.Description +'</p></div>');
        }    
        else{
            $('#furnitureCol').append('<div class="media" style="margin-bottom: 50px;"><div class="media-body" ><h5 class="mt-0 mb-1" ><b>' + data.Name + '</b></h5><div class="row"><div class="col-3" style="font-size: smaller; margin-top: 20px;">List Price</div> <div class="col-8" style=" font-size: smaller; margin-top: 20px;"><strike>'+ formatToCurrency(data.ListPrice) +'</strike></div></div><div class="row"> <div class="col-3" style="font-size: medium;">Price</div><div class="col-8" style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice, data.Discount) +'</b></div></div><div class="row"><div class="col-3" style="font-size: smaller;">Save</div><div class="col-8" style=" font-size: smaller;">'+ save(data.ListPrice, data.Discount) +'</div></div><br><p >'+ data.Description +'</p> </div><a href="templateItem.html"><img onclick="sendInfo(this)" class="mr-3 zzzzzzzzzz furniture'+[i+1]+'" src="'+ data.Image +'" style="margin-left: 30px;" width="400px" height="auto" alt="Generic placeholder image"></a> </div>');
        }
    }); 
    // var els = document.querySelectorAll('#furnitureCol .thisImage');
    // $.each(furnitures, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('furniture'+[i+1]);
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeTechNews.json', function(data){
    let technews = data.technews;
 
    $.each(technews, function(i, data){
        if(i%2==0){
            $('#technewsCol').append('<div class="media"><div"><a href="templateItemElec.html"><img onclick="sendInfo(this)" class="mr-3 zzzzzzzz x technews'+[i+1]+'" src="'+ data.Image +'" width="400px" alt="Generic placeholder image" style="margin-bottom: 20px; float: left;"></a><h5><b>' + data.Name + '</b></h5><br><div class="row"><div class="col-sm-3"><small>List Price</small></div><strike class="col">'+ formatToCurrency(data.ListPrice) +'</strike></div><div class="row"><div class="col-sm-3">Price</div><div class="col" style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice, data.Discount) +'</b></div></div><div class="row"><div class="col-sm-3"><small>Save</small></div><div class="col" style="font-size: smaller;">'+ save(data.ListPrice, data.Discount) +'</div></div><br>'+ data.Description +'</div></div><br><br>');
        }    
         else{
            $('#technewsCol').append('<div class="media"><div"><a href="templateItemElec.html"><img onclick="sendInfo(this)" class="mr-3 zzzzzzzz x technews'+[i+1]+'" src="'+ data.Image +'" width="200px" alt="Generic placeholder image" style="margin-bottom: 20px; margin-left: 10px; float: right;"></a><h5><b>' + data.Name + '</b></h5><br><div class="row"><div class="col-sm-3"><small>List Price</small></div><strike class="col">'+ formatToCurrency(data.ListPrice) +'</strike></div><div class="row"><div class="col-sm-3">Price</div><div class="col" style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice, data.Discount) +'</b></div></div><div class="row"><div class="col-sm-3"><small>Save</small></div><div class="col" style="font-size: smaller;">'+ save(data.ListPrice, data.Discount) +'</div></div><br>'+ data.Description +'</div></div><br><br>');
         }
    }); 
    // var els = document.querySelectorAll('#technewsCol .thisImage');
    // $.each(technews, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('technews'+[i+1]);
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeTrending.json', function(data){
    let trending = data.trending;
 
    $.each(trending, function(i, data){
        if(i%2==0){
            $('#trendingCol').append('<div onclick="sendInfo(this)" class="col-md-3 mb-4 z trending'+[i+1]+'"><a href="templateItem.html"><div type="button" data-toggle="modal" data-target="#whitebeanie" class="card" style="border-radius: 33px;"><img src="'+ data.Image +'" class="card-img-top" alt="..." style="border-top-right-radius: 33px; border-top-left-radius: 33px;"> <div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p id="sale" class="card-text" style="height: 160px;">'+ data.Description +'</p><p style="color: #006667; font-size: large;"><b>'+ formatToCurrency(data.ListPrice) +'</b></p></div></div></a></div>');
        }else{
            $('#trendingCol').append('<div onclick="sendInfo(this)" class="col-md-3 mb-4 z trending'+[i+1]+'"><a href="templateItem.html"><div class="card" style="border-radius: 33px;"><div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p class="card-text" style="height: 160px;">'+ data.Description +'</p><p style="color: #006667; font-size: large;"><b>'+ formatToCurrency(data.ListPrice) +'</b></p> </div> <img src="'+ data.Image +'" class="card-img-top" alt="..." style="border-bottom-left-radius: 33px; border-bottom-right-radius: 33px;"></div></a></div>')
        }
    }); 
    // var els = document.querySelectorAll('#trendingCol .thisImage');
    // $.each(trending, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('trending'+[i+1]);
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeSaleFashion.json', function(data){
    let fashion = data.fashion;

    $.each(fashion, function(i, data){
        if(i<4){
            $('#homeFashionActive').append('<div class="card col"><a href="templateItem.html"><img src="'+ data.Image +'" onclick="sendInfo(this)" class="card-img-top zz fashion'+[i+1]+'" alt="..."></a><div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p class="card-text" style="height: 100px;">'+ data.Description +'</p><div class="d-flex flex-row" > <div class="p-2"><div class="box"><small class="diskonBorder" style="color: #006667;">'+ formatDiscount(data.Discount) +'</small></div></div><div class="p-2" ><strike style="display: inline;"><small style="color: #006667;"><b>'+ formatToCurrency(data.ListPrice) +'</b></small> </strike> </div></div><p style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice,data.Discount) +'</b></p></div></div>');
        }
        else{
            $('#homeFashion').append('<div class="card col zzzz"><a href="templateItem.html"><img src="'+ data.Image +'" onclick="sendInfo(this)" class="card-img-top zz fashion'+[i+1]+'" alt="..."></a><div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p class="card-text" style="height: 100px;">'+ data.Description +'</p><div class="d-flex flex-row" > <div class="p-2"><div class="box"><small class="diskonBorder" style="color: #006667;">'+ formatDiscount(data.Discount) +'</small></div></div><div class="p-2" ><strike style="display: inline;"><small style="color: #006667;"><b>'+ formatToCurrency(data.ListPrice) +'</b></small> </strike> </div></div><p style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice,data.Discount) +'</b></p></div></div>');
        }    
    });
    
    // var els = document.querySelectorAll('#homeFashionActive .thisImage');
    // var elzz = document.querySelectorAll('#homeFashion .thisImage');
    // $.each(fashion, function(i, data){
    //     if(i<4){
    //         els[i].classList.remove('thisImage');
    //         els[i].classList.add('fashion'+[i+1]);
    //     }else{
    //         elzz[i].classList.remove('thisImage');
    //         elzz[i].classList.add('fashion'+[i+1]);
    //     }
    // });
});

$.getJSON('public/json/kumpulanDataHome/homeSaleFurniture.json', function(data){
    let homefurniture = data.homefurniture;

    $.each(homefurniture, function(i, data){
        if(i<4){
            $('#homeFurniture').append('<div class="card col"><a href="templateItem.html"><img src="'+ data.Image +'" onclick="sendInfo(this)" class="card-img-top zz tfurniture'+[i+1]+'" alt="..."></a><div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p class="card-text desc" style="height: 100px;">'+ data.Description +'</p><div class="d-flex flex-row" > <div class="p-2"><div class="box"><small class="diskonBorder" style="color: #006667;">'+ formatDiscount(data.Discount) +'</small></div></div><div class="p-2" ><strike style="display: inline;"><small style="color: #006667;"><b>'+ formatToCurrency(data.ListPrice) +'</b></small> </strike> </div></div><p style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice,data.Discount) +'</b></p></div></div>');
        }
        else{
            $('#homeFurniture2').append('<div class="card col"><a href="templateItem.html"><img src="'+ data.Image +'" onclick="sendInfo(this)" class="card-img-top zz tfurniture'+[i+1]+'" alt="..."></a><div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p class="card-text" style="height: 100px;">'+ data.Description +'</p><div class="d-flex flex-row" > <div class="p-2"><div class="box"><small class="diskonBorder" style="color: #006667;">'+ formatDiscount(data.Discount) +'</small></div></div><div class="p-2" ><strike style="display: inline;"><small style="color: #006667;"><b>'+ formatToCurrency(data.ListPrice) +'</b></small> </strike> </div></div><p style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice,data.Discount) +'</b></p></div></div>');
        }    
    }); 
});

$.getJSON('public/json/kumpulanDataHome/homeSaleElectronic.json', function(data){
    let electronic = data.electronic;

    $.each(electronic, function(i, data){
        if(i<4){
            $('#homeElectronic').append('<div class="card col"><a href="templateItem.html"><img src="'+ data.Image +'" onclick="sendInfo(this)" class="card-img-top zz elec'+[i+1]+'" alt="..."></a><div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p class="card-text desc" style="height: 100px;">'+ data.Description +'</p><div class="d-flex flex-row" > <div class="p-2"><div class="box"><small class="diskonBorder" style="color: #006667;">'+ formatDiscount(data.Discount) +'</small></div></div><div class="p-2" ><strike style="display: inline;"><small style="color: #006667;"><b>'+ formatToCurrency(data.ListPrice) +'</b></small> </strike> </div></div><p style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice,data.Discount) +'</b></p></div></div>');
        }
        else{
            $('#homeElectronic2').append('<div class="card col"><a href="templateItem.html"><img src="'+ data.Image +'" onclick="sendInfo(this)" class="card-img-top zz elec'+[i+1]+'" alt="..."></a><div class="card-body"><h5 class="card-title"><b>'+ data.Name +'</b></h5><p class="card-text" style="height: 100px;">'+ data.Description +'</p><div class="d-flex flex-row" > <div class="p-2"><div class="box"><small class="diskonBorder" style="color: #006667;">'+ formatDiscount(data.Discount) +'</small></div></div><div class="p-2" ><strike style="display: inline;"><small style="color: #006667;"><b>'+ formatToCurrency(data.ListPrice) +'</b></small> </strike> </div></div><p style="color: #006667; font-size: large;"><b>'+ discount(data.ListPrice,data.Discount) +'</b></p></div></div>');
        }    
    }); 
});

$.getJSON('public/json/kumpulanDataHome/homeMusic.json', function(data){
    let music = data.music;
 
    $.each(music, function(i, data){
        $('#homeMusic').append('<div class="col-6 mb-4"><a href="templateItem.html"><img src="'+ data.Image +'" width="auto" height="200px" onclick="sendInfo(this)" class="zzzzzzzzzzzzzzz music'+[i+1]+'" alt="" ></a></div>');
    }); 
});

