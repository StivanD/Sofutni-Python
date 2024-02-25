function factorialDivision(numOne, numTwo) {
    let factorial = (x) => (x > 1 ? x * factorial(x - 1) : 1);
    console.log(`${(factorial(numOne) / factorial(numTwo)).toFixed(2)}`);
}

factorialDivision(5, 2);
factorialDivision(6, 2);