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

// cartDisplayTemplate

var shoeCartTemplateSource = document.querySelector('.cartDisplayTemplate').innerHTML;

var shoeCartTemplate = Handlebars.compile(shoeCartTemplateSource);

var insertCartDataElem = document.querySelector(".displayCartTotals");

//localStorage
var storedShoes = localStorage.getItem('shoeList') ? JSON.parse(localStorage.getItem('shoeList')) : [];
var basket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];

var callFunction = ShoeCatalogueFunction(storedShoes, basket)



function getId(id){
  callFunction.addBasket(id)
  localStorage.setItem('basket', JSON.stringify(callFunction.returnBasket()));
  localStorage.setItem('shoeList', JSON.stringify(callFunction.shoe()));
  listDisplay()

  basketDisplay()


  }

  function basketDisplay() {
    localStorage.setItem('basket', JSON.stringify(callFunction.returnBasket()));

    var basket = callFunction.returnBasket()
      insertBasketDataElem.innerHTML = shoeBasketTemplate({
          items:basket,
      });

      var cartTotalHTML = shoeCartTemplate({
         total:  callFunction.total()
      });

      insertCartDataElem.innerHTML = cartTotalHTML;

    }

    function clear() {
      callFunction.clearBasket();
      localStorage.setItem('shoeList', JSON.stringify(callFunction.returnBasket()));
      localStorage.removeItem('basket');
      // force reload to update
      basketDisplay();
    }


  window.addEventListener('load', function(){
  localStorage.setItem('shoeList', JSON.stringify(callFunction.shoe()))
  localStorage.setItem('basket', JSON.stringify(callFunction.returnBasket()));

  insertRegDataElem.innerHTML = shoeFilterTemplate({shoeList:storedShoes});
  basketDisplay()
  listDisplay()

  })

  function listDisplay(){

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

  }

searchBtn.addEventListener('click', function(){
listDisplay()

});

addBtn.addEventListener('click', function(){
callFunction.add(getColor.value, getBrand.value, getSize.value, getPrice.value, getQty.value)
});
