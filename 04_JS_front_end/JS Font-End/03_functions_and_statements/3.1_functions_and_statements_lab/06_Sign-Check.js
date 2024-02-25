function solve(numOne, numTwo, numThree) {
    let numbersArr = [numOne, numTwo, numThree];
    let count_negative = 0;

    for (let num of numbersArr) {
        if (num < 0) {
            count_negative++;
        }
    }

    if (count_negative % 2 === 0) {
        console.log('Positive')
    } 
    else
    {
        console.log('Negative')
    }
}

// solve(5, 12, -15);
// solve(-6, -12, 14);
// solve(-1, -2, -3);
// solve(-5, 1, 1);