function solve(inputArr, n) {
    let resultArr = [];
    
    for (let i = 0; i < inputArr.length; i += n) {
        resultArr.push(inputArr[i]);
    }

    return resultArr
}

// console.log(solve(['5', '20', '31', '4', '20'], 2));
// console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));
// console.log(solve(['1', '2', '3', '4', '5'], 6));