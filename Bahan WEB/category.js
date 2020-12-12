$.getJSON('public/json/kumpulanDataHome/homeMen.json', function(data){
    let men = data.men;
    
    $.each(men, function(i, data){
        $('#catTv').append('<div onclick="sendInfo(this)" style="margin-left: 40px;" class="col-md-3 mb-4 z tv'+[i+1]+'" ><a href="templateItem.html"><div class="card h-100 " style="width: 19rem;"><img  class="card-img-top " src="'+ data.Image +'" alt="Card image cap"><div class="card-body"><h5 class="card-title"><b>' + data.Name + '</b></h5><p class="card-text" style="height: 100px;" >' + data.Description + '<h6 style="color: #006667;"><b>' + data.Harga + '</b></h6></a> </div></div></a></div>'); 
    }); 
    // var els = document.querySelectorAll('#homeMen .thisImage');
    // $.each(men, function(i, data){
    //     els[i].classList.remove('thisImage');
    //     els[i].classList.add('men'+[i+1]);
    // });
});
