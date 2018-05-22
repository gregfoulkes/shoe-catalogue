var shoes = [

        {id: 1,color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
        {id: 2,color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
        {id: 3,color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
        {id: 4,color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
        {id: 5,color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},

        {id: 6,color : 'red', brand : "Nike",price : 350,  size:7, in_stock : 9},
        {id: 7,color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
        {id: 8,color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
        {id: 9,color : 'red', brand : "LaCoste",price : 400, size:5, in_stock : 9},
        {id: 10,color : 'red', brand : "All Stars",price : 250, size:9, in_stock : 6},

        {id: 11,color : 'green', brand : "Nike",price : 350, size:5, in_stock : 1},
        {id: 12,color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
        {id: 13,color : 'green', brand : "New Balance",price : 320, size:8, in_stock : 3},
        {id: 14,color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
        {id: 15,color : 'green', brand : "All Stars",price : 250, size:8, in_stock : 8},

        {id: 16,color : 'black', brand : "Nike",price : 350, size:7, in_stock : 8},
        {id: 17,color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
        {id: 18,color : 'black', brand : "New Balance",price : 320, size:8, in_stock : 4},
        {id: 19,color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
        {id: 20,color : 'black', brand : "All Stars",price : 250, size:5, in_stock : 6},

        {id: 21,color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
        {id: 22,color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
        {id: 23,color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
        {id: 24,color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
        {id: 25,color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}

];

describe('Add to list function for shoe-catalogue', function() {
  it('Should add orange Puma size 7 to list', function() {

    var callFunction = ShoeCatalogueFunction();

    callFunction.add('white', 'Nike', 7, 300, 10)
    callFunction.add('white', 'Nike', 7, 300, 10)
    console.log(callFunction.shoe())

    assert.deepEqual(callFunction.shoe(), [

            {id: 1, color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
            {id: 2, color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
            {id: 3, color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
            {id: 4, color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
            {id: 5, color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},

            {id: 6, color : 'red', brand : "Nike",price : 350,  size:7, in_stock : 9},
            {id: 7, color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
            {id: 8, color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
            {id: 9, color : 'red', brand : "LaCoste",price : 400, size:5, in_stock : 9},
            {id: 10, color : 'red', brand : "All Stars",price : 250, size:9, in_stock : 6},

            {id: 11, color : 'green', brand : "Nike",price : 350, size:5, in_stock : 1},
            {id: 12, color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
            {id: 13, color : 'green', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 14, color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
            {id: 15, color : 'green', brand : "All Stars",price : 250, size:8, in_stock : 8},

            {id: 16, color : 'black', brand : "Nike",price : 350, size:7, in_stock : 8},
            {id: 17, color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
            {id: 18, color : 'black', brand : "New Balance",price : 320, size:8, in_stock : 4},
            {id: 19, color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
            {id: 20, color : 'black', brand : "All Stars",price : 250, size:5, in_stock : 6},

            {id: 21, color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
            {id: 22, color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
            {id: 23, color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 24, color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
            {id: 25, color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1},
            {id: 26, color : 'white', brand : "Nike",price : 300, size:7, in_stock : 20}

            // {id: 26, color : 'orange', brand : "Puma",price : 300, size:7, in_stock : 1}

    ]);

  });

  it('Should only increment in stock amount of white All Stars and not add to list', function() {

    var callFunction = ShoeCatalogueFunction();

    assert.deepEqual(callFunction.add('white', 'All Stars', 9, 250, 1), [

            {id: 1, color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
            {id: 2, color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
            {id: 3, color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
            {id: 4, color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
            {id: 5, color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},

            {id: 6, color : 'red', brand : "Nike",price : 350,  size:7, in_stock : 9},
            {id: 7, color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
            {id: 8, color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
            {id: 9, color : 'red', brand : "LaCoste",price : 400, size:5, in_stock : 9},
            {id: 10, color : 'red', brand : "All Stars",price : 250, size:9, in_stock : 6},

            {id: 11, color : 'green', brand : "Nike",price : 350, size:5, in_stock : 1},
            {id: 12, color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
            {id: 13, color : 'green', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 14, color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
            {id: 15, color : 'green', brand : "All Stars",price : 250, size:8, in_stock : 8},

            {id: 16, color : 'black', brand : "Nike",price : 350, size:7, in_stock : 8},
            {id: 17, color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
            {id: 18, color : 'black', brand : "New Balance",price : 320, size:8, in_stock : 4},
            {id: 19, color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
            {id: 20, color : 'black', brand : "All Stars",price : 250, size:5, in_stock : 6},

            {id: 21, color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
            {id: 22, color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
            {id: 23, color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 24, color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
            {id: 25, color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 2},

    ]);


  });

  it('Should decrease the shoe list quantity of added shoes in stock', function() {
    var callFunction = ShoeCatalogueFunction()

      callFunction.addBasket(25)
      //{color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}

    assert.deepEqual(callFunction.shoe(),shoes = [

            {id: 1, color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
            {id: 2, color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
            {id: 3, color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
            {id: 4, color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
            {id: 5, color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},

            {id: 6, color : 'red', brand : "Nike",price : 350,  size:7, in_stock : 9},
            {id: 7, color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
            {id: 8, color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
            {id: 9, color : 'red', brand : "LaCoste",price : 400, size:5, in_stock : 9},
            {id: 10, color : 'red', brand : "All Stars",price : 250, size:9, in_stock : 6},

            {id: 11, color : 'green', brand : "Nike",price : 350, size:5, in_stock : 1},
            {id: 12, color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
            {id: 13, color : 'green', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 14, color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
            {id: 15, color : 'green', brand : "All Stars",price : 250, size:8, in_stock : 8},

            {id: 16, color : 'black', brand : "Nike",price : 350, size:7, in_stock : 8},
            {id: 17, color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
            {id: 18, color : 'black', brand : "New Balance",price : 320, size:8, in_stock : 4},
            {id: 19, color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
            {id: 20, color : 'black', brand : "All Stars",price : 250, size:5, in_stock : 6},

            {id: 21, color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
            {id: 22, color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
            {id: 23, color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 24, color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
            {id: 25, color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 0},

    ]);


  });
});

describe('Filter function', function() {
  var callFunction = ShoeCatalogueFunction()

  it('should return list of white shoes', function() {



    assert.deepEqual(callFunction.filter({
      color: 'white'
    }), [

      {id: 21,color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
      {id: 22,color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
      {id: 23,color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
      {id: 24,color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
      {id: 25,color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}

    ]);
  });

  it('should return list of Adidas ', function() {


    assert.deepEqual(callFunction.filter({
          brand: "Adidas"
        }),
      [
        {id: 2,color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
        {id: 7,color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
        {id: 12,color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
        {id: 17,color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
        {id: 22,color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
      ]);
    });

  it('should return all size 6', function(){
    // console.log((callFunction.filter({
    //   size: 6
    // })))
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

  it('should return white Adidas shoes', function() {

    assert.deepEqual(callFunction.filter({
      brand: 'Adidas',
      color: 'white',
    }), [

      {
        id:22,
        brand: 'Adidas',
        color: 'white',
        price: 275,
        size: 6,
        in_stock: 6
      }

    ]);
  });

  it('should return black Adidas size 4', function() {


    assert.deepEqual(callFunction.filter({
      brand: "Adidas",
      color: 'black',
      size: 4
    }), [
      {
        id:17,
        color: 'black',
        brand: "Adidas",
        price: 275,
        size: 4,
        in_stock: 2
      }

    ]);
  });


});

describe('Add to Shopping Basket function', function() {
  it('Should add 1 item to shopping basket', function() {
    var callFunction = ShoeCatalogueFunction()
    callFunction.addBasket(7)

    assert.equal(callFunction.returnBasket()[{
      id: 7,
      color: 'black',
      brand: "Adidas",
      price: 350,
      size: 4,
      qty: 7
    }])

  });

  it('Should add 2 items to shopping basket', function() {
    var callFunction = ShoeCatalogueFunction()


    callFunction.addBasket(2)


    callFunction.addBasket(7)


    assert.deepEqual(callFunction.returnBasket(), [{
        id: 2,
        color: 'blue',
        brand: "Adidas",
        price: 275,
        size: 6,
        qty: 1
      },
      {
        id: 7,
        color: 'red',
        brand: "Adidas",
        price: 275,
        size: 4,
        qty: 1
      },

    ])

  });

  it('Should add 3 items to shopping basket', function() {
    var callFunction = ShoeCatalogueFunction()


    callFunction.addBasket(2)
    callFunction.addBasket(7)
    callFunction.addBasket(17)

    assert.deepEqual(callFunction.returnBasket(), [{
        id: 2,
        color: 'blue',
        brand: "Adidas",
        price: 275,
        size: 6,
        qty: 1

      },
      {
        id: 7,
        color: 'red',
        brand: "Adidas",
        price: 275,
        size: 4,
        qty: 1
      },
      {
        id: 17,
        color: 'black',
        brand: "Adidas",
        price: 275,
        size: 4,
        qty: 1

      }

    ])

  });

});

describe('Add function check matching items', function(){

  it('Should add 4 items, 2 of the same, but only return 3 to shopping basket and increase quantity of black Adidas to 2', function() {
    var callFunction = ShoeCatalogueFunction()


        callFunction.addBasket(2)
        callFunction.addBasket(7)
        callFunction.addBasket(17)
        callFunction.addBasket(17)

    assert.deepEqual(callFunction.returnBasket(), [
      {id: 2,color : 'blue', brand : "Adidas",price : 275, size:6, qty : 1},
      {id: 7,color : 'red', brand : "Adidas",price : 275, size:4, qty: 1},
      {id: 17,color : 'black', brand : "Adidas",price : 275, size:4, qty : 2}

    ])

  });

});

describe('checkBasketlength', function() {

  it('Should return cart length of 3', function() {
    var callFunction = ShoeCatalogueFunction()

    callFunction.addBasket(2)
    callFunction.addBasket(7)
    callFunction.addBasket(17)
    callFunction.addBasket(17)

    assert.equal(callFunction.cartLength(), 3)

  });

  it('Should return cart length of when 2 ', function() {
    var callFunction = ShoeCatalogueFunction()

    callFunction.addBasket(16)
    callFunction.addBasket(17)

    assert.equal(callFunction.cartLength(), 2)

  });


  it('Should return cart length of 1', function() {
    var callFunction = ShoeCatalogueFunction()

    callFunction.addBasket(2)

    assert.equal(callFunction.cartLength(), 1)

  });

  it('Should return cart length of when 2 of the same items added to cart', function() {
    var callFunction = ShoeCatalogueFunction()

    callFunction.addBasket(17)
    callFunction.addBasket(17)

    assert.equal(callFunction.cartLength(), 1)

    });
  });

describe('check for zero Qty', function() {

  it('Should stop at zero qauntity', function() {
    var callFunction = ShoeCatalogueFunction()

    callFunction.addBasket(2)
    callFunction.addBasket(2)
    callFunction.addBasket(2)
    callFunction.addBasket(2)


    console.log(callFunction.shoe())
    assert.deepEqual(callFunction.shoe(),[

            {id: 1,color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
            {id: 2,color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 0},
            {id: 3,color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
            {id: 4,color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
            {id: 5,color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},

            {id: 6,color : 'red', brand : "Nike",price : 350,  size:7, in_stock : 9},
            {id: 7,color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
            {id: 8,color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
            {id: 9,color : 'red', brand : "LaCoste",price : 400, size:5, in_stock : 9},
            {id: 10,color : 'red', brand : "All Stars",price : 250, size:9, in_stock : 6},

            {id: 11,color : 'green', brand : "Nike",price : 350, size:5, in_stock : 1},
            {id: 12,color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
            {id: 13,color : 'green', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 14,color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
            {id: 15,color : 'green', brand : "All Stars",price : 250, size:8, in_stock : 8},

            {id: 16,color : 'black', brand : "Nike",price : 350, size:7, in_stock : 8},
            {id: 17,color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
            {id: 18,color : 'black', brand : "New Balance",price : 320, size:8, in_stock : 4},
            {id: 19,color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
            {id: 20,color : 'black', brand : "All Stars",price : 250, size:5, in_stock : 6},

            {id: 21,color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
            {id: 22,color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
            {id: 23,color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 24,color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
            {id: 25,color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}

    ]);

    });

  });

describe('Total Cart Function ', function(){

  it('Should return cart total 1100', function() {
    var callFunction = ShoeCatalogueFunction()



    callFunction.addBasket(2)
    callFunction.addBasket(7)
    callFunction.addBasket(17)
    callFunction.addBasket(17)
  //  callFunction.totalCart( )


    assert.equal(callFunction.total(), 1100)

  });

    it('Should return cart total 825', function() {
      var callFunction = ShoeCatalogueFunction()


      callFunction.addBasket(2)
      callFunction.addBasket(7)
      callFunction.addBasket(17)
    //  callFunction.totalCart()

      assert.equal(callFunction.total(), 825)

    });

    it('Should return cart total 1175', function() {
      var callFunction = ShoeCatalogueFunction()


      callFunction.addBasket(2)
      callFunction.addBasket(7)
      callFunction.addBasket(17)
      callFunction.addBasket(16)
    //  callFunction.totalCart()


      assert.equal(callFunction.total(), 1175)

    });
});

describe('Clear Basket Function ', function(){

  it('Should clear shopping basket', function() {
    var callFunction = ShoeCatalogueFunction()



    callFunction.addBasket(2)
    callFunction.addBasket(7)
    callFunction.addBasket(17)
    callFunction.addBasket(17)
    callFunction.clearBasket()

    console.log(callFunction.returnBasket())
    assert.deepEqual(callFunction.returnBasket(), [])

  });

  it('Should clear shopping basket and add shoe quantity back to shoes list', function() {
    var callFunction = ShoeCatalogueFunction()

    callFunction.addBasket(2)
    callFunction.addBasket(7)
    callFunction.addBasket(17)
    callFunction.addBasket(17)
    callFunction.clearBasket()

    assert.deepEqual(callFunction.shoe(), [

            {id: 1,color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
            {id: 2,color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
            {id: 3,color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
            {id: 4,color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
            {id: 5,color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},

            {id: 6,color : 'red', brand : "Nike",price : 350,  size:7, in_stock : 9},
            {id: 7,color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
            {id: 8,color : 'red', brand : "New Balance",price : 320, size:6, in_stock : 2},
            {id: 9,color : 'red', brand : "LaCoste",price : 400, size:5, in_stock : 9},
            {id: 10,color : 'red', brand : "All Stars",price : 250, size:9, in_stock : 6},

            {id: 11,color : 'green', brand : "Nike",price : 350, size:5, in_stock : 1},
            {id: 12,color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
            {id: 13,color : 'green', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 14,color : 'green', brand : "LaCoste",price : 400, size:6, in_stock : 7},
            {id: 15,color : 'green', brand : "All Stars",price : 250, size:8, in_stock : 8},

            {id: 16,color : 'black', brand : "Nike",price : 350, size:7, in_stock : 8},
            {id: 17,color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
            {id: 18,color : 'black', brand : "New Balance",price : 320, size:8, in_stock : 4},
            {id: 19,color : 'black', brand : "LaCoste",price : 400, size:6, in_stock : 2},
            {id: 20,color : 'black', brand : "All Stars",price : 250, size:5, in_stock : 6},

            {id: 21,color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
            {id: 22,color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
            {id: 23,color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {id: 24,color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
            {id: 25,color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}

    ]);

  });

  it('Should return basket total to zero', function() {
    var callFunction = ShoeCatalogueFunction()



    callFunction.addBasket(2)
    callFunction.addBasket(7)
    callFunction.addBasket(17)
    callFunction.addBasket(17)
    callFunction.clearBasket(2)
    callFunction.clearBasket(7)
    callFunction.clearBasket(17)
    callFunction.clearBasket(17)




    console.log(callFunction.basketTotal())
    assert.deepEqual(callFunction.basketTotal(), 0)

  });

});
