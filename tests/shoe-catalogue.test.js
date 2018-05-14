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


describe('Filter registration numbers', function() {
  it('Should return all blue shoes from list ', function() {
    var callFunction = ShoeCatalogueFunction();

    var filteredShoes = callFunction.filter('blue', undefined);

    assert.deepEqual(filteredShoes, [

                  {color : 'blue', brand : "Nike",price : 350, size:8, in_stock : 5},
                  {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
                  {color : 'blue', brand : "New Balance",price : 320, size:4, in_stock : 7},
                  {color : 'blue', brand : "LaCoste",price : 400, size:8, in_stock : 4},
                  {color : 'blue', brand : "All Stars",price : 250, size:7, in_stock : 5},
  ]);

  });

  it('Should return all Adidas from list', function() {
    var callFunction = ShoeCatalogueFunction();

    var filteredShoes = callFunction.filter(undefined, 'Adidas');

    assert.deepEqual(filteredShoes, [

                  {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
                  {color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
                  {color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
                  {color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
                  {color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
  ]);

  });

  it('Should return the blue Adidas from list ', function() {
    var callFunction = ShoeCatalogueFunction();

    var filteredShoes = callFunction.filter('blue', 'Adidas');

    assert.deepEqual(filteredShoes, [

                  {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},

  ]);

  });
});

describe('otherFilter for registration numbers', function() {
  it('Should return blue Adidas from list', function() {
    var callFunction = ShoeCatalogueFunction();

    var filteredShoes = callFunction.otherFilter('blue', 'Adidas');

    assert.deepEqual(filteredShoes, [

                  {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},

  ]);
  });
  it('Should return all white shoes from list ', function() {
    var callFunction = ShoeCatalogueFunction();

    var filteredShoes = callFunction.otherFilter('white', undefined);

    assert.deepEqual(filteredShoes, [

            {color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
            {color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
            {color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
            {color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
            {color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}
  ]);

  });

  it('Should return all Adidas from list', function() {
    var callFunction = ShoeCatalogueFunction();

    var filteredShoes = callFunction.otherFilter(undefined, 'Adidas');

    assert.deepEqual(filteredShoes, [

                  {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
                  {color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
                  {color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
                  {color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
                  {color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
  ]);

  });
});

describe('Add to list function for registration numbers', function() {
  it('Should add orange Puma size 7 to list', function() {

    var callFunction = ShoeCatalogueFunction();

    assert.deepEqual(callFunction.add('orange', 'Puma', 7, 300 , 1), [

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
            {color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1},

            {color : 'orange', brand : "Puma",price : 300, size:7, in_stock : 1},

    ]);

  });

  it('Should only increment in stock amount of white All Stars and not add to list', function() {

    var callFunction = ShoeCatalogueFunction();

    assert.deepEqual(callFunction.add('white','All Stars', 9 , 250, 1), [

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
            {color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 2},

            // {color : 'orange', brand : "Puma",price : 300, size :7, in_stock : 1},

    ]);

  });
});

describe('Filter by object function', function(){
    var callFunction = ShoeCatalogueFunction()

    it('should return list of white shoes', function(){



    assert.equal(callFunction.objectFilter('white',undefined) [

      {color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7},
      {color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6},
      {color : 'white', brand : "New Balance",price : 320, size:8, in_stock : 3},
      {color : 'white', brand : "LaCoste",price : 400, size:4, in_stock : 5},
      {color : 'white', brand : "All Stars",price : 250, size:9, in_stock : 1}

    ]);
    });

    it('should return list of Adidas ', function(){
      assert.equal(callFunction.objectFilter(undefined, 'Adidas')[

      {color : 'blue', brand : "Adidas",price : 275, size:6, in_stock : 3},
      {color : 'red', brand : "Adidas",price : 275, size:4, in_stock : 3},
      {color : 'green', brand : "Adidas",price : 275, size:4, in_stock : 9},
      {color : 'black', brand : "Adidas",price : 275, size:4, in_stock : 2},
      {color : 'white', brand : "Adidas",price : 275, size:6, in_stock : 6}
    ]);
    });

    it('should return white nike shoes', function(){



    assert.equal(callFunction.objectFilter('white', 'Nike', undefined) [

      {color : 'white', brand : "Nike",price : 350, size:4, in_stock : 7}

    ]);
    });

    it('should return black Adidas size 4', function(){



    assert.equal(callFunction.objectFilter('black', 'Adidas', 4) [

      {color : 'black', brand : "Adidas",price : 350, size:4, in_stock : 7}

    ]);
    });

    });
