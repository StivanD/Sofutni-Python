function solve(fruitType, grams, pricePerKg) {
    let gramsToKg = grams / 1000;
    let sum = gramsToKg * pricePerKg;
    
    console.log(`I need $${sum.toFixed(2)} to buy ${gramsToKg.toFixed(2)} kilograms ${fruitType}.`);
}

// solve('orange', 2500, 1.80);
// solve('apple', 1563, 2.35);