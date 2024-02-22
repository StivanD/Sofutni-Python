function solve(text, wordToCensor) {
    let result = text.replace(new RegExp(wordToCensor, 'g'), match => '*'.repeat(match.length));
    console.log(result);
}

// solve('A small sentence with some words', 'small');
// solve('Find the hidden word', 'hidden')