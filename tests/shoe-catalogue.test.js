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

describe('Add to list function for registration numbers', function() {
  it('Should add orange Puma size 7 to list', function() {

    var callFunction = ShoeCatalogueFunction();

    assert.deepEqual(callFunction.add('orange', 'Puma', 7, 300, 1), [

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
      },

      {
        color: 'orange',
        brand: "Puma",
        price: 300,
        size: 7,
        in_stock: 1
      },

    ]);

  });

  it('Should only increment in stock amount of white All Stars and not add to list', function() {

    var callFunction = ShoeCatalogueFunction();

    assert.deepEqual(callFunction.add('white', 'All Stars', 9, 250, 1), [

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
        in_stock: 2
      },

      // {color : 'orange', brand : "Puma",price : 300, size :7, in_stock : 1},

    ]);

  });
});

describe('Filter function', function() {
  var callFunction = ShoeCatalogueFunction()

  it('should return list of white shoes', function() {



    assert.deepEqual(callFunction.filter({
      color: 'white'
    }), [

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

    ]);
  });

  it('should return list of Adidas ', function() {


    assert.deepEqual(callFunction.filter({
        brand: "Adidas"
      }),

      [

        {
          color: 'blue',
          brand: "Adidas",
          price: 275,
          size: 6,
          in_stock: 3
        },
        {
          color: 'red',
          brand: "Adidas",
          price: 275,
          size: 4,
          in_stock: 3
        },
        {
          color: 'green',
          brand: "Adidas",
          price: 275,
          size: 4,
          in_stock: 9
        },
        {
          color: 'black',
          brand: "Adidas",
          price: 275,
          size: 4,
          in_stock: 2
        },
        {
          color: 'white',
          brand: "Adidas",
          price: 275,
          size: 6,
          in_stock: 6
        }
      ]);
  });

  it('should return all size 6', function(){
    assert.equal(callFunction.filter({
      size: 6
    })[

      {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
      {color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
      {color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
      {color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
      {color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6}

    ]);

  });

  it('should return white nike shoes', function() {



    assert.equal(callFunction.filter({
      brand: "Adidas",
      color: 'white',
    })[

      {
        color: 'white',
        brand: "Nike",
        price: 350,
        size: 4,
        in_stock: 7
      }

    ]);
  });

  it('should return black Adidas size 4', function() {



    assert.equal(callFunction.filter({
      brand: "Adidas",
      color: 'black',
      size: 4
    })[

      {
        color: 'black',
        brand: "Adidas",
        price: 350,
        size: 4,
        in_stock: 7
      }

    ]);
  });

});

describe('Add to Shopping Basket function', function() {
  it('Should add 1 item to shopping basket', function() {
    var callFunction = ShoeCatalogueFunction()
    var params = callFunction.addBasket({
      color: 'black',
      brand: "Adidas",
      price: 350,
      size: 4,
      in_stock: 7
    })

    assert.equal(callFunction.returnBasket()[{
      color: 'black',
      brand: "Adidas",
      price: 350,
      size: 4
    }])

  });

  it('Should add 2 items to shopping basket', function() {
    var callFunction = ShoeCatalogueFunction()


    callFunction.addBasket({
      color: 'blue',
      brand: "Adidas",
      price: 275,
      size: 6,
      in_stock: 3
    })
    callFunction.addBasket({
      color: 'red',
      brand: "Adidas",
      price: 275,
      size: 4,
      in_stock: 3
    }, )

    // console.log(callFunction.addBasket(params))

    assert.deepEqual(callFunction.returnBasket(), [{
        color: 'blue',
        brand: "Adidas",
        price: 275,
        size: 6
      },
      {
        color: 'red',
        brand: "Adidas",
        price: 275,
        size: 4
      },

    ])

  });

  it('Should add 3 items to shopping basket', function() {
    var callFunction = ShoeCatalogueFunction()


    callFunction.addBasket({
      color: 'blue',
      brand: "Adidas",
      price: 275,
      size: 6,
      in_stock: 3
    })
    callFunction.addBasket({
      color: 'red',
      brand: "Adidas",
      price: 275,
      size: 4,
      in_stock: 3
    }, )
    callFunction.addBasket({
      color: 'black',
      brand: "Adidas",
      price: 275,
      size: 4,
      in_stock: 2
    })

    // console.log(callFunction.addBasket(params))

    assert.deepEqual(callFunction.returnBasket(), [{
        color: 'blue',
        brand: "Adidas",
        price: 275,
        size: 6
      },
      {
        color: 'red',
        brand: "Adidas",
        price: 275,
        size: 4
      },
      {
        color: 'black',
        brand: "Adidas",
        price: 275,
        size: 4
      }

    ])

  });

  // it('Should alert that item already in basket', function(){
  //   var callFunction = ShoeCatalogueFunction()
  //
  //   var params = {
  //     color: 'black',
  //     brand: "Adidas",
  //     price: 350,
  //     size: 4,
  //     in_stock: 7
  //   }
  //
  //   callFunction.returnBasket([{
  //     color: 'black',
  //     brand: "Adidas",
  //     price: 350,
  //     size: 4
  //   }])
  //
  //   callFunction.addBasket({
  //       color: 'black',
  //       brand: "Adidas",
  //       price: 350,
  //       size: 4,
  //       in_stock: 7
  //     })
  //
  //
  //   assert.equal(callFunction.addBasket({
  //       color: 'black',
  //       brand: "Adidas",
  //       price: 350,
  //       size: 4,
  //       in_stock: 7
  //     }), 'Item already in basket' )
  //
  // });
});
