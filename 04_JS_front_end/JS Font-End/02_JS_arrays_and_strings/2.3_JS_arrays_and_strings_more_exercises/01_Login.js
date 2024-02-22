function solve(passwords) {
    let username = passwords.shift();
    let count = 0;
    for (let password of passwords) {
        if (password === username.split('').reverse().join('')) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else 
        {
            count += 1;
            
            if (count === 4) {
                console.log(`User ${username} blocked!`);
                break
            }
            
            console.log('Incorrect password. Try again.');
        }
    }
}

// solve(['Acer','login','go','let me in','recA']);
// solve(['momo','omom']);
// solve(['sunny','rainy','cloudy','sunny','not sunny']);