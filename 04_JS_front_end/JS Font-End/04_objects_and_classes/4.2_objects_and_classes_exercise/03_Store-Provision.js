function storeProvision(currStock, products) {
    let productsObj = {};
    
    for (let i = 0; i < currStock.length - 1; i += 2) {
        let currentStockName = currStock[i];
        let quantity = Number(currStock[i + 1]);

        productsObj[currentStockName] = quantity;
    }
    
    for (let i = 0; i < products.length - 1; i += 2) {
        let currentProductName = products[i];
        let quantity = Number(products[i + 1]);
        
        if (productsObj.hasOwnProperty(currentProductName)) {
            productsObj[currentProductName] += quantity;
        }
        else {
            productsObj[currentProductName] = quantity;
        }
    }

    Object.entries(productsObj).forEach(([product, quantity]) =>
        console.log(`${product} -> ${quantity}`)
    );
}

// storeProvision(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
// );

// storeProvision(
//     ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
// )