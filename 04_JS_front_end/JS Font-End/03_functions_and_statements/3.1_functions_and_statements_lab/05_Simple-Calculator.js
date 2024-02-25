function solve(firstNum, secondNum, operator) {
    let operations = {
        'multiply': (firstNum, secondNum) => firstNum * secondNum,
        'divide': (firstNum, secondNum) => firstNum / secondNum,
        'add': (firstNum, secondNum) => firstNum + secondNum,
        'subtract': (firstNum, secondNum) => firstNum - secondNum
    };
    
    console.log(operations[operator](firstNum, secondNum));
}

// solve(5, 5, 'multiply');
// solve(40, 8, 'divide');
// solve(12, 19, 'add');
// solve(50, 13, 'subtract');