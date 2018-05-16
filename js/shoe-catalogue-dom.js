//filter selection
var brand = document.querySelector('.brandSelect');
var color = document.querySelector('.colorSelect');
var size = document.querySelector('.size');

//display elements
var displayBrand = document.querySelector('.displayBrand')
var displayQty = document.querySelector('.displayQty');
var displayFilter = document.querySelector('.displayFilter');
var displaySize = document.querySelector('.displaySize');

var displayColor = document.querySelector('.displayColor')

//add elements
var getBrand = document.querySelector('.getBrand');
var getColor = document.querySelector('.getColor');
var getSize = document.querySelector('.getSize');
var getPrice = document.querySelector('.getPrice')
var getQty = document.querySelector('.getQty');

//buttons
var addBtn = document.querySelector('.addButton');
var searchBtn = document.querySelector('.filterButton');
var addToCart = document.querySelectorAll('.addToCartBtn')

//template

var shoeFilterTemplateSource = document.querySelector(".displayFilterTemplate").innerHTML;

var shoeFilterTemplate = Handlebars.compile(shoeFilterTemplateSource);

var insertRegDataElem = document.querySelector(".displayResult");

//Local Storage
var storedShoes = localStorage.getItem('shoeList') ? JSON.parse(localStorage.getItem('shoeList')) : {};
var basket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : {};

var callFunction = ShoeCatalogueFunction()

// function getId(addToCart){
//
//   // for(var i = 0; i<storedShoes.length; i++){
//     return addToCart.id
//   }
// }

searchBtn.addEventListener('click', function(){
  var params = {
  }

if(color.value !== ''){
   params.color =  color.value
}

if(brand.value !== ''){
  params.brand = brand.value
}

if(size.value !== ''){
  params.size = size.value;
}

var shoeList = callFunction.filter(params)

insertRegDataElem.innerHTML = shoeFilterTemplate({shoeList:shoeList});

});

addBtn.addEventListener('click', function(){
//console.log(callFunction.add(getColor.value, getBrand.value, getSize.value, getPrice.value, getQty.value))
// getId(addbasketitem)
callFunction.addBasket()
});

// addToCart.addEventlistener('click', function(){
//
// });
