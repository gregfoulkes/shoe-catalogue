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
var getQty = document.querySelector('.getQty');

//buttons
var addBtn = document.querySelector('.addButton');
var searchBtn = document.querySelector('.filterButton')

//template

// var shoeFilterTemplateSource = document.querySelector(".dislpayFilterTemplate").innerHTML;
//
// var shoeFilterTemplate = Handlebars.compile(shoeFilterTemplateSource);
//
// var insertRegDataElem = document.querySelector(".displayResult");

var callFunction = ShoeCatalogueFunction()

searchBtn.addEventListener('click', function(){

//console.log(color.value)
//console.log(brand.value)
//console.log(callFunction.filter(color.value, brand.value))
console.log(callFunction.otherFilter(color.value, brand.value))


displayColor.innerHTML = callFunction.filter(color.value, brand.value)

  // if (color.value != ''){
  //
  // }

  // insertRegDataElem.innerHTML = shoeFilterTemplate({
  //   color:  callFunction.filter(color)
  //
  // });
});

addBtn.addEventListener('click', function(){
callFunction.add('red','Puma',10)
});
