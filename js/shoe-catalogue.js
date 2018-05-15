function ShoeCatalogueFunction() {

  var shoes = [

    {
      color: 'blue',
      brand: "Nike",
      price: 350,
      size: 8,
      in_stock: 5
    },
    {
      color: 'blue',
      brand: "Adidas",
      price: 275,
      size: 6,
      in_stock: 3
    },
    {
      color: 'blue',
      brand: "New Balance",
      price: 320,
      size: 4,
      in_stock: 7
    },
    {
      color: 'blue',
      brand: "LaCoste",
      price: 400,
      size: 8,
      in_stock: 4
    },
    {
      color: 'blue',
      brand: "All Stars",
      price: 250,
      size: 7,
      in_stock: 5
    },

    {
      color: 'red',
      brand: "Nike",
      price: 350,
      size: 7,
      in_stock: 9
    },
    {
      color: 'red',
      brand: "Adidas",
      price: 275,
      size: 4,
      in_stock: 3
    },
    {
      color: 'red',
      brand: "New Balance",
      price: 320,
      size: 6,
      in_stock: 2
    },
    {
      color: 'red',
      brand: "LaCoste",
      price: 400,
      size: 5,
      in_stock: 9
    },
    {
      color: 'red',
      brand: "All Stars",
      price: 250,
      size: 9,
      in_stock: 6
    },

    {
      color: 'green',
      brand: "Nike",
      price: 350,
      size: 5,
      in_stock: 1
    },
    {
      color: 'green',
      brand: "Adidas",
      price: 275,
      size: 4,
      in_stock: 9
    },
    {
      color: 'green',
      brand: "New Balance",
      price: 320,
      size: 8,
      in_stock: 3
    },
    {
      color: 'green',
      brand: "LaCoste",
      price: 400,
      size: 6,
      in_stock: 7
    },
    {
      color: 'green',
      brand: "All Stars",
      price: 250,
      size: 8,
      in_stock: 8
    },

    {
      color: 'black',
      brand: "Nike",
      price: 350,
      size: 7,
      in_stock: 8
    },
    {
      color: 'black',
      brand: "Adidas",
      price: 275,
      size: 4,
      in_stock: 2
    },
    {
      color: 'black',
      brand: "New Balance",
      price: 320,
      size: 8,
      in_stock: 4
    },
    {
      color: 'black',
      brand: "LaCoste",
      price: 400,
      size: 6,
      in_stock: 2
    },
    {
      color: 'black',
      brand: "All Stars",
      price: 250,
      size: 5,
      in_stock: 6
    },

    {
      color: 'white',
      brand: "Nike",
      price: 350,
      size: 4,
      in_stock: 7
    },
    {
      color: 'white',
      brand: "Adidas",
      price: 275,
      size: 6,
      in_stock: 6
    },
    {
      color: 'white',
      brand: "New Balance",
      price: 320,
      size: 8,
      in_stock: 3
    },
    {
      color: 'white',
      brand: "LaCoste",
      price: 400,
      size: 4,
      in_stock: 5
    },
    {
      color: 'white',
      brand: "All Stars",
      price: 250,
      size: 9,
      in_stock: 1
    }

  ];
  var filterMap = {}
  var shoppingBasket = []
  function shoeCatalogueFilter(params) {
    filterMap =  _.filter(shoes, params);
    return filterMap
  }

  function addShoeToList(color, brand, size, price, in_stock) {


    var exists = false;
    for (var i = 0; i < shoes.length; i++) {
      var shoe = shoes[i]
      if (color === shoe.color && brand === shoe.brand && size === shoe.size && price === shoe.price) {
        shoe.in_stock++
          exists = true;
      }
    }

    if (!exists) {
      var newShoeList = {
        color: color,
        brand: brand,
        size: parseInt(size),
        price: parseInt(price),
        in_stock: parseInt(in_stock)
      }
      shoes.push(newShoeList)
    }

    return shoes

  }

  function addToBasket(filterMap){
  var  itExists = false
    if(filterMap.color  && filterMap.brand && filterMap.size){

    var  addToBasket = {
      color: filterMap.color,
      brand: filterMap.brand,
      size: filterMap.size,
      price: filterMap.price,
    }
  shoes.in_stock--
  itExists = true;
  // console.log(shoes.in_stock)

  shoppingBasket.push(addToBasket)
  return shoppingBasket

  }
  if(filterMap.color == color && filterMap.brand == brand && filterMap.size == size){
    //itExists = true;
    
  return  //alert('Item already in basket')
  }
}

function returnShoppingBasket(){
  return shoppingBasket
}

  return {
    filter: shoeCatalogueFilter,
    add: addShoeToList,
    returnBasket: returnShoppingBasket,
    addBasket: addToBasket
  }

  }

// function shoeCatalogueFunctionFilter(color, brand) {
//
//   var filterFunc = function(shoe) {
//     return true;
//   }
//
//   if (color && !brand) {
//     filterFunc = function(shoe) {
//       return shoe.color === color;
//     }
//   } else if (!color && brand) {
//     filterFunc = function(shoe) {
//       return shoe.brand === brand;
//     }
//   } else if (color && brand) {
//     filterFunc = function(shoe) {
//       return shoe.color === color && shoe.brand === brand;
//     }
//   }
//
//   var filteredShoes = shoes.filter(filterFunc);
//
//   return filteredShoes
//
// }

// function shoeCatalogueOtherFilter(color, brand, size) {
//
//   var filteredShoes = []
//
//   if (color) {
//     filteredShoes = _.filter(shoes, {
//       color: color
//     })
//     if (brand) {
//       filteredShoes = _.filter(shoes, {
//         brand: brand
//       })
//       if (brand && color) {
//
//         filteredShoes = _.filter(shoes, {
//           brand: brand,
//           color: color
//         })
//       }
//     }
//   }
//
//   return filteredShoes
// }
