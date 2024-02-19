function solve(num) {
    let numToStr = String(num);
    let firstNum = numToStr[0];
    let sum = 0;
    let isSame = true;
    
    for (let i = 0; i < numToStr.length; i++) {
        if (firstNum !== numToStr[i]) {
            isSame = false;
        }
        
        sum += Number(numToStr[i]);
    }
    
    console.log(isSame);
    console.log(sum);
}

// solve(2222222);
// solve(1234);