function addAndSubtract(numOne, numTwo, numThree) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    
    console.log(subtract(sum(numOne, numTwo), numThree));
}

// addAndSubtract(23, 6, 10);
// addAndSubtract(1, 17, 30);
// addAndSubtract(42, 58, 100);