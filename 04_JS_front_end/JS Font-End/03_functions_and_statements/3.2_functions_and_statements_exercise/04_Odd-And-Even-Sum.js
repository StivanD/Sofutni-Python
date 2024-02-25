function oddEvenSum(num) {
    let numbersArr = String(num).split('');
    
    let oddNumbersSum = numbersArr.reduce((acc, curr) => Number(curr) % 2 !== 0 ? Number(acc) + Number(curr) : Number(acc), 0);
    let evenNumbersSum = numbersArr.reduce((acc, curr) => Number(curr) % 2 === 0 ? Number(acc) + Number(curr) : Number(acc), 0);
    
    console.log(`Odd sum = ${oddNumbersSum}, Even sum = ${evenNumbersSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);