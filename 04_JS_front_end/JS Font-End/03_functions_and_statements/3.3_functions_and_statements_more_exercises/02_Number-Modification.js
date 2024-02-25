function numberModification(number) {
    
    function calculateAverage(num) {
        let digits = String(num).split('').map(Number);
        let sum = digits.reduce((acc, digit) => acc + digit, 0);
        return sum / digits.length;
    }
    
    while (calculateAverage(number) <= 5) {
        number = parseInt(number.toString() + '9');
    }
    
    console.log(number);
}

numberModification(101);
numberModification(5835);