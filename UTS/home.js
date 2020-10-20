function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
        }   
    });
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }