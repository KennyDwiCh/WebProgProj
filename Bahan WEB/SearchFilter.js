$.getJSON('public/json/kumpulanDataHome/HomeMen.json' , function(data){
    let men = data.men;

    $.each(men,function(data){
        $('#HomeMen').append('<div class="mid card h-100"> type="button" style="margin-top: 40px; margin-left: 90px; margin-right: 90px; margin-bottom: 40px;"> <div class="grid-container" id="borderpicbutton"><div><img src="' + data.image + '"></div><div class="mid-text"><div class="udlite-focus-visible-target udlite-heading-md course-card--course-title--2f7tE col mb-4"><h5>"' + data.name + '"</h5> </div> <p class="card-text col mb-4">"' + data.description + '"<br/></p> <div class="col mb-4" style="color: #006667;"><h6><b> IDR"' + data.price + '"</b></h6></div></div></div></div>')
    });
});