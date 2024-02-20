function solve(startingYield) {
    let spices = 0;
    let days = 0;
    
    while (startingYield >= 100) {
        days++;
        spices += startingYield - 26;
        startingYield -= 10;
    }
    
    if (spices >= 26) {
        spices -= 26;
    }
    
    console.log(days);
    console.log(spices);
}

solve(111);
solve(450);