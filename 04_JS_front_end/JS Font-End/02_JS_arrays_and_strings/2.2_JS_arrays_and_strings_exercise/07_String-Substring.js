function solve(word, text) {
    text = text.toLowerCase().split(' ');
    let result = `${word} not found!`;
    
    if (text.includes(word)) {
        result = word;
    }
    
    console.log(result);
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');