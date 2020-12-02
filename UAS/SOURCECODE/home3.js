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

function sendInfo(data){
    var imgs = data.className;
    localStorage.setItem("serialNumber", imgs);
}

var locImage = localStorage.getItem("serialNumber");
var slicing = locImage.slice(16);
console.log(locImage);

window.addEventListener('load', function(){
  var eles = document.getElementsByClassName(slicing);
});

$.getJSON('kumpulanData/allItem.json', function(data){
    let allItem = data.allItem;
    $.each(allItem, function(i, data){
        if(slicing == data.ID){
          document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

          var valueCount
          var price = data.ListPrice;

          function priceTotal() {
              var total = valueCount * price;
              var totalChange = formatToCurrency(total);
              document.getElementById("totalChange").innerText = totalChange;
          }

          document.querySelector(".plus-btn").addEventListener("click", function() {
              valueCount = document.getElementById("quantity").value;
              valueCount++;
              document.getElementById("quantity").value = valueCount;

              if (valueCount > 1) {
                  document.querySelector(".minus-btn").removeAttribute("disabled");
                  document.querySelector(".minus-btn").classList.remove("disabled")
              }

              priceTotal()
          })

          document.querySelector(".minus-btn").addEventListener("click", function() {
              valueCount = document.getElementById("quantity").value;
              valueCount--;
              document.getElementById("quantity").value = valueCount

              if (valueCount == 1) {
                  document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
              }

              priceTotal()
          })
          
          document.getElementById("imgChange").src = data.Image;
          document.getElementById("nameChange").innerHTML = data.Name;
          document.getElementById("priceChange").innerHTML = formatToCurrency(data.ListPrice);
          document.getElementById("descChange").innerHTML = data.Description;
          document.getElementById("totalChange").innerHTML = formatToCurrency(data.ListPrice);;
          return false;
        }
        else{
          console.log("gk ada");
        }
    }); 
});

function imageGallery() {
    const highlight = document.querySelector(".gallery-hightlight");
    const previews = document.querySelectorAll(".room-preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("room-active"));
        highlight.src = bigSrc;
        preview.classList.add("room-active");
      });
    });
  }
  
  imageGallery();
  

