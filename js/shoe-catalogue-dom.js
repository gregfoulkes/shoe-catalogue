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
var searchBtn = document.querySelector('.filterButton')

//template

var shoeFilterTemplateSource = document.querySelector(".displayFilterTemplate").innerHTML;

var shoeFilterTemplate = Handlebars.compile(shoeFilterTemplateSource);

var insertRegDataElem = document.querySelector(".displayResult");

var callFunction = ShoeCatalogueFunction()

searchBtn.addEventListener('click', function(){

  var params = {
    color: color.value,
    brand: brand.value,
    size: size.value,
    // price: price.value,

  }

if(color.value == ''){
  delete params.color
}

if(brand.value == ''){
  delete params.brand
}

if(size.value == ''){
  delete params.size
}


var x = callFunction.filter(params)
console.log(x)
console.log(params)


var shoeList = callFunction.filter(params)

insertRegDataElem.innerHTML = shoeFilterTemplate({
  color:color,
  brand:brand,
  size:size,
  // price: price.value,
  // in_stock:in_stock
});

});

addBtn.addEventListener('click', function(){
//console.log(callFunction.add(getColor.value, getBrand.value, getSize.value, getPrice.value, getQty.value))
console.log(callFunction.add('orange', 'Puma', 7, 300, 1))
});
