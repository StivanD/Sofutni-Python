function solve(product, quantity) {
    let productsObj = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    };
    
    console.log((productsObj[product] * quantity).toFixed(2));
}

solve("water", 5);
solve("coffee", 2);