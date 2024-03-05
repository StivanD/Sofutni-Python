function wordsTracker(wordsInput) {
    let searchedWordsArr = wordsInput.shift().split(' ');

    let wordsOccurrences = {};

    for (let word of searchedWordsArr) {
        wordsOccurrences[word] = 0;

        for (let currWord of wordsInput) {
            if (currWord === word) {
                wordsOccurrences[word] += 1;
            }
        }
    }
    
    let sortedWords = Object.entries(wordsOccurrences).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, occurrences]) => {
        console.log(`${word} - ${occurrences}`);
    });
}

// wordsTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);

// wordsTracker([
//     'is the',
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
// ]);