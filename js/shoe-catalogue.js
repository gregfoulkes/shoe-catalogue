
function ShoeCatalogueFunction(){

  var shoes = [

          {color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
          {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
          {color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
          {color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
          {color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},

          {color : 'red', brand : "Nike",price : 350,  size:7, in_stock : 9},
          {color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
          {color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
          {color : 'red', brand : "LaCoste",price : 400, size:5, in_stock : 9},
          {color : 'red', brand : "All Stars",price : 250, size:9, in_stock : 6},

          {color : 'green', brand : "Nike",price : 350, size:5, in_stock : 1},
          {color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
          {color : 'green', brand : "New Balance",price : 320, size:8, in_stock : 3},
          {color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
          {color : 'green', brand : "All Stars",price : 250, size:8, in_stock : 8},

          {color : 'black', brand : "Nike",price : 350, size:7, in_stock : 8},
          {color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
          {color : 'black', brand : "New Balance",price : 320, size:8, in_stock : 4},
          {color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
          {color : 'black', brand : "All Stars",price : 250, size:5, in_stock : 6},

          {color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
          {color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
          {color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
          {color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
          {color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}

  ];

  function shoeCatalogueFunctionFilter(color, brand) {
    // var params = {};
    // if (color){
    //   params['color'] = color
    // }
    //
    // if (brand){
    //   params['brand'] = color
    // }
    //
    // if(size){
    //   params['size'] = color
    // }
    //
    // // _.filter(shoes, {color : 'black'})
    //
    // _.filter(shoes, {'color': color}, 'brand': )

    var filterFunc = function(shoe){ return true; }

    if(color && !brand){
        filterFunc = function(shoe){
          return shoe.color === color;
        }
    }


    else if (!color && brand){
      filterFunc = function(shoe){
        return shoe.brand === brand;
      }
    }
    else if (color && brand){
      filterFunc = function(shoe){
        return shoe.color === color && shoe.brand === brand;
      }
    }

    var filteredShoes = shoes.filter(filterFunc);

    console.log(filteredShoes)
    //console.log(shoes)

    return filteredShoes

  }

function addShoeToList(color, brand, size){
  var newShoeList = {
  color: color,
  brand: brand,
  size: size
}

  return shoes.push(newShoeList)
  console.log(filteredShoes)

}

  return{
    filter: shoeCatalogueFunctionFilter,
    add: addShoeToList
  }

}

// _.filter(shoes, {color : 'black'});
// console.log(_.filter(shoes, {color : 'black', size : 5}));



















  // function addShoes(color, shoe){
  //   var shoeList = {brand:brand, color:color, price:price, in_stock:in_stock}
  //
  //   return shoeList
  // }
