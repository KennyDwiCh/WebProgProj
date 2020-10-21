//var ponshop = ["NASA Jacket", "Jogger Sweatpants" , "Space Bucket Hat"];

//function checkbarang(ponshop) {
//  return ponshop == document.getElementById("barangcheckslot").value;
//}

//function fungsihasilsearch() {
//  var myImage = new Image(300, 300);
//	myImage.src = 'HomePage/Men/nasa.png';
//	x = document.getElementById("demo");
//	x.appendChild(myImage);	
//}

/*
$(function() {
  $("#search").on("keyup", function() {
    //$(".users").html("");
    var val = $.trim(this.value);
    if (val) {
      val = val.toLowerCase();
      $.each(dataponshop, function(_,obj) {
       // console.log(val,obj.name.toLowerCase().indexOf(val),obj)
        if (obj.Name.toLowerCase().indexOf(val) != -1) {
          $(".users").append('<div class="user-card"><span class="user-info">'+obj.Name+'</span><br/><img class="user-image" src="'+obj.image+'"/></div>');
        }
      });
    }
    $(".not-found").toggle($(".users").find("img").length==0);
  });
});


var dataponshop = [{
    Name: "Jogger Sweatpants",
	Category: Men,
    image: "HomePage/Men/jogger.png" + Math.random()
  },
  {
    Name: "Converse Urban Utility Chuck",
    Category: "Men",
    image: "HomePage/Men/sepatu.png" + Math.random()
  },
  {
    Name: "NASA Jacket",
    Category: "Men",
    image: "HomePage/Men/nasa.png" + Math.random()
  },
  {
    Name: "LeMannosh",
    Category: "Men",
    image: "HomePage/Men/jam.png" + Math.random()
  },
  {
    Name: "Space Bucket Hat",
    Category: "Men",
    image: "HomePage/Men/topi.png" + Math.random()
  },
  {
    Name: "Smooth T-Shirt",
    Category: "Men",
    image: "HomePage/Men/kaos.png" + Math.random()
  },
  {
    Name: "Japan Long Sleeve",
    Category: "Men",
    image: "HomePage/Men/Milky Inverted Sweatshirt.png" + Math.random()
  },
  {
    Name: "Tropical Leaf Stripe",
    Category: "Men",
    image: "HomePage/Men/kemeja.png" + Math.random()
  },
  {
    Name: "SweatyRock Crop Top",
    Category: "Women",
    image: "HomePage/Women/item.png" + Math.random()
  },
  {
    Name: "Shoulder Bag Rucksack",
    Category: "Women",
    image: "HomePage/Women/tas.png" + Math.random()
  },
  {
    Name: "Delicate Solid Slim",
    Category: "Women",
    image: "HomePage/Women/ijo.png" + Math.random()
  },
  {
    Name: "High Heel Dress Pumps Shoes",
    Category: "Women",
    image: "HomePage/Women/sepatu.png" + Math.random()
  },
  {
    Name: "Denim Jacket",
    Category: "Women",
    image: "HomePage/Women/jaket.png" + Math.random()
  },
  {
    Name: "Tropical Hat",
    Category: "Women",
    image: "HomePage/Women/topi.png" + Math.random()
  },
  {
    Name: "Timeless Oska",
    Category: "Women",
    image: "HomePage/Women/celana.png" + Math.random()
  },
  {
    Name: "Crop Tops Autumn Winter",
    Category: "Women",
    image: "HomePage/Women/panjang.png" + Math.random()
  },

];
*/

/*
$ (function(){
var ponshop = [
	"Jogger Sweatpants",
	"Converse Urban Utility Chuck",
	"NASA Jacket",
];

$(Document).ready(function (){
	$("#autocomplete").autocomplete({source:ponshop})
	.data("ui-autocomplete")._renderItem = function(ul,item){
		var expression = new RegExp(this.term, "gi");
		answer = item.label.replace(expression, "<span style='font-weight:bold;color:black'>" + this.term + "</span>");
		return $("<li></li>")
			.append("<a>" + answer)
			.appendTo(ul);
	};
});
*/

const ponshop = [
	{name : 'Jogger Sweatpants'},
	{name : 'NASA Jacket'},
	{name : 'LeMannosh'},
];

const searchInput = document.querySelector('.search-input');
const suggestionpanel = document.querySelector('.suggestions');

searchInput.addEventListener('keyup' , function(){
	const input = searchInput.value();
	suggestionpanel.innerHTML = '';
	const suggestions = ponshop.filter(function(ponshop){
		return ponshop.name.startswith(input);
	});
	suggestions.forEach(function(suggested){
		const div = document.createElement('div');
		div.innerHTML = suggested.name;
		suggestionpanel.appendChild(div);
	});
	if (input == ''){
		suggestionpanel.innerHTML = '';	
	}
})
 
