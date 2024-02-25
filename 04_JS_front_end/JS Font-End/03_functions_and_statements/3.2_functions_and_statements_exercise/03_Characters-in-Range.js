function charactersInRange(firstChar, secondChar) {
    let result = '';
    let startCharAscii = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endCharAscii = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    
    for (let i = startCharAscii + 1; i < endCharAscii; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    
    console.log(result.trim());
}

// charactersInRange('a', 'd');
// charactersInRange('#', ':');
// charactersInRange('C', '#');