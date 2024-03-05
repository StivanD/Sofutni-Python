function oddOccurrences(string) {
    let wordsOccurrencesObj = {};
    
    string.toLowerCase().split(' ').forEach(word => {
        wordsOccurrencesObj[word] = (wordsOccurrencesObj[word] || 0) + 1;
    });

    let result = Object.keys(wordsOccurrencesObj).filter(key => {
        return wordsOccurrencesObj[key] % 2 !== 0;
    });

    console.log(result.join(" "));
}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');