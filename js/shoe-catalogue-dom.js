//filter selection
var brand = document.querySelector('.brandSelect');
var color = document.querySelector('.colorSelect');
var size = document.querySelector('.sizeSelect');

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
var addToCart = document.querySelector('.addToCartBtn')

// shoeFiltertemplate

var shoeFilterTemplateSource = document.querySelector(".displayFilterTemplate").innerHTML;

var shoeFilterTemplate = Handlebars.compile(shoeFilterTemplateSource);

var insertRegDataElem = document.querySelector(".displayShoelist");

//shoeBasketTemplate

var shoeBasketTemplateSource = document.querySelector('.displaylBasketTemplate').innerHTML;

var shoeBasketTemplate = Handlebars.compile(shoeBasketTemplateSource);

var insertBasketDataElem = document.querySelector(".displayBasketList");


var storedShoes = localStorage.getItem('shoeList') ? JSON.parse(localStorage.getItem('shoeList')) : [];
var basket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];

var callFunction = ShoeCatalogueFunction()



function getId(id){
  callFunction.addBasket(id)
  localStorage.setItem('basket', JSON.stringify(callFunction.returnBasket()));
  localStorage.setItem('shoeList', JSON.stringify(callFunction.shoe()));
  basketDisplay()
  // location.reload()

  }

  function basketDisplay() {
    //console.log(callFunction.returnBasket())
    var basket = callFunction.returnBasket()
      insertBasketDataElem.innerHTML = shoeBasketTemplate({
          items:basket,
        //  total: callFunction.basketTotal()
      });
  }


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

console.log(params.size)

var shoeList = callFunction.filter(params)

insertRegDataElem.innerHTML = shoeFilterTemplate({shoeList:shoeList});

});

addBtn.addEventListener('click', function(){
callFunction.add(getColor.value, getBrand.value, getSize.value, getPrice.value, getQty.value)
});



window.addEventListener('load', function(){
localStorage.setItem('shoeList', JSON.stringify(callFunction.shoe()))
insertRegDataElem.innerHTML = shoeFilterTemplate({shoeList:storedShoes});
basketDisplay()
})
