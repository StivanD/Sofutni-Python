function solve(inputArr) {
    let evenNums = inputArr.filter((num) => num % 2 === 0).reduce((partialSum, a) => partialSum + a, 0);
    let oddNums = inputArr.filter((num) => num % 2 !== 0).reduce((partialSum, a) => partialSum + a, 0);
    let result = evenNums - oddNums
    
    console.log(result);
}

// solve([1,2,3,4,5,6]);
// solve([3,5,7,9]);
// solve([2,4,6,8,10]);
