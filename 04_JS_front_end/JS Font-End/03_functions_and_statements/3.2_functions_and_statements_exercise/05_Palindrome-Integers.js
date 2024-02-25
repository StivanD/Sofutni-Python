function palindrome(numbers) {
    for (let num of numbers) {
        if (String(num) === String(num).split('').reverse().join('')) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
}

// palindrome([123,323,421,121]);
// palindrome([32,2,232,1010]);