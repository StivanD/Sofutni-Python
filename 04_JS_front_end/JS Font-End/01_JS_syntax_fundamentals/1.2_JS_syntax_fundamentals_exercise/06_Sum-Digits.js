function solve(num) {
    let sum = 0;
    let numToStr = String(num);
    
    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }
    
    console.log(sum);
}

// solve(245678);
// solve(97561);
// solve(543);