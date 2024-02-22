function solve(string, text) {
    words = string.split(', ');
        
    for (let word of words) {
        let searchedWord = "*".repeat(word.length);
        text = text.replace(searchedWord, word);
    }
    
    console.log(text);
}

// solve('great', 'softuni is ***** place for learning new programming languages');
// solve('great, learning','softuni is ***** place for ******** new programming languages');