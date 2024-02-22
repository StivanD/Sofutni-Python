function solve(text) {
    let matches = text.match(/[A-Z][a-z0-9]*/g);
    
    if (matches) {
        console.log(matches.join(', '));
    }
}

// solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
// solve('HoldTheDoor');
// solve('ThisIsSoAnnoyingToDo');