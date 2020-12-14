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

// function basket(){
//   // var imgs = data.className;
//   // localStorage.setItem("serialNumber", imgs);
// }



// function postData(){
//   fetch("http://localhost:3000/api/items",{
//     method: 'POST',
//     headers: {
//       'Type' : 'Wear'
//     },
//     body: JSON.stringify({
//       name : "Ivan",
//       job : "leader"
//     })
//   })
//   .then(response => {
//       if(!response.ok){
//           throw Error("Error");
//       }
//       return response.json();
//   })
//   .then( data => {
//       console.log(data);
//   })
//   .catch(error =>{
//       console.log(error);
//   });
// }
  
// postData();

// var fetchFile = fetch("http://localhost:3000/api/items").then(response =>{
//   return response;
// });
// console.log(fetchFile);

var addtobasket = document.getElementById("addtobasket");

var buynow = document.getElementById("buynow");

var locImage = localStorage.getItem("serialNumber");
var slicing = locImage.slice(16);
console.log(locImage);


window.addEventListener('load', function(){
  var eles = document.getElementsByClassName(slicing);
});

// function fetchData(){
//   fetch("http://localhost:3000/api/items")
//   .then(response => {
//       if(!response.ok){
//           throw Error("Error");
//       }
//       return response.json();
//   })
//   .then( data => {
//       console.log(data);
//       const html = data.map(users =>{
//         return `<p>Name: ${users.Name}</p>`;
//       })
//       .join("");
//       console.log(html)
//   })
//   .catch(error =>{
//       console.log(error);
//   });
// }
  
// fetchData();
$.getJSON('public/json/kumpulanDataHome/allItem.json', function(data){
  let allItem = data;
  $.each(allItem, function(i, data){
      if(slicing == data.subID){
        try{
          document.getElementById("imgChange").src = data.Image;
          document.getElementById("nameChange").innerHTML = data.Name;
          document.getElementById("priceChange").innerHTML = formatToCurrency(data.ListPrice);
          document.getElementById("descChange").innerHTML = data.Description;
          document.getElementById("totalChange").innerHTML = formatToCurrency(data.ListPrice);;
          

          if(slicing.slice(0,8)=="technews"){
            document.getElementById("nameItem").innerHTML = data.nameItem;
            document.getElementById("screenItem").innerHTML = data.Screen;
            document.getElementById("wieghtItem").innerHTML = data.Wieght;
            document.getElementById("processorItem").innerHTML = data.Processor;
            document.getElementById("osItem").innerHTML = data.OS;
            document.getElementById("gpuItem").innerHTML = data.GPU;
            document.getElementById("memoryItem").innerHTML = data.Memory;
            document.getElementById("storageItem").innerHTML = data.Storage;
            document.getElementById("audioItem").innerHTML = data.Audio;
            document.getElementById("baterryItem").innerHTML = data.Battery;
          }else if(slicing.slice(0,9)=="furniture" || slicing.slice(0,5)=="music" || slicing.slice(0,10)=="tfurniture" || slicing.slice(0,4)=="elec" || slicing=="men4"){
            document.getElementById("sizeList").remove();
          }
        }catch(err){
          
          // var xangka =  document.getElementById("labelChanged").innerHTML
          // var fangka = parseInt(xangka)
          document.getElementById("checkoutimage").src = data.Image;
          document.getElementById("checkoutName").innerHTML = data.Name;
          document.getElementById("checkoutPrice").innerHTML = formatToCurrency(data.ListPrice);
          document.getElementById("subTotal").innerHTML = formatToCurrency(data.ListPrice+5000);
          
        } 
          // return false;
      }
      else{
        console.log("gk ada");
      } 
  });
  $.each(allItem, function(i, data){
    if(slicing == data.subID){
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

      var valueCount=1;
      var price = data.ListPrice;

      function priceTotal() {
          var total = valueCount * price;
          var totalChange = formatToCurrency(total);
          document.getElementById("totalChange").innerText = totalChange;
        //  return valueCount;
          
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
      x=0;
      array = Array();

      var title = data.Name;
      var gambar = data.Image;
      var harga = data.ListPrice*valueCount;
      var total = formatToCurrency(harga);
      var listbasket = document.getElementById("listbasket");
      buynow.addEventListener("click", function(){
        console.log("oke");
      });

      addtobasket.addEventListener("click", function(){
        
        var newBasket = document.createElement("tr");
        var basketItems = document.getElementsByClassName('basketItems')[0]

        var cartRowContents = `
        
          <td>
            <img src="${gambar}" width="60px">
          </td>
          <td style="font-size: small ">
            <span style="display:inline-block; white-space: nowrap; overflow: hidden;text-overflow: ellipsis; max-width: 70px;">${title}</span><br>
            <span>${valueCount} item(s)</span>
          </td>
          <td style="font-size: medium; color: #006667;">${total}</td>
        
          `

        listbasket.innerHTML = cartRowContents;
        // array[x] = listbasket.innerHTML;
        // basketItems.append(listbasket);
        // localStorage.setItem("basket", listbasket);
        // x++;
      });
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
  

