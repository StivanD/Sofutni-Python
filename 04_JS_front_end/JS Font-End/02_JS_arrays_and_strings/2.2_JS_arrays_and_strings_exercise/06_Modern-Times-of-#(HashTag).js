function solve(text) {
    const re = /#[a-zA-Z]+/gm;
    let matches = text.match(re);
 
    for (let match of matches) {
        console.log(match.slice(1, match.length));
    }
}

// solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
// solve('The symbol # is known #variously in English-speaking #regions as the #number sign');