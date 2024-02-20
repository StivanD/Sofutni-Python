function solve(num1, operator, num2) {
    let operationsObj = {
        '+': num1 + num2,
        '-': num1 - num2,
        '/': num1 / num2,
        '*': num1 * num2
    };
    
    console.log(operationsObj[operator].toFixed(2));
}

solve(5, '+', 10);
solve(25.5, '-', 3);