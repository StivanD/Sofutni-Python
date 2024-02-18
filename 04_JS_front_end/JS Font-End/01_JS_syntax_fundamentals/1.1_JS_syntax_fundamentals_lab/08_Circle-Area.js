function solve(radius) {
    let result;
    
    if (typeof radius !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`)
    }
    else {
        result = Math.PI * radius ** 2;
    }
    
    if (result) {
        console.log(result.toFixed(2))
    }
}

// solve(5);
// solve('name');