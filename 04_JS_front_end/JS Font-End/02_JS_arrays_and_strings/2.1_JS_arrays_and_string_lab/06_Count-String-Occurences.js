function solve(text, wantedWord) {
    let result = (text.match(new RegExp('\\b' + wantedWord + '\\b', 'gi')) || []).length;
    
    console.log(result);
    
    // let textArr = text.split(" ");
    // let counter = 0;
    // for (let word of textArr) {
    //     if (word.toLowerCase() == wantedWord.toLowerCase()) {
    //         counter++;
    //     }
    // }
    // console.log(counter);
}


// solve('This is a word and it also is a sentence', 'is');
// solve('softuni is great place for learning new programming languages', 'softuni');