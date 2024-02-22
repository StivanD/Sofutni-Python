function solve(namesArr) {
    namesArr.sort((a, b) => a.localeCompare(b));
    
    for (let i = 0; i < namesArr.length; i++) {
        console.log(`${i + 1}.${namesArr[i]}`);
    }
}

// solve(["John", "Bob", "Christina", "Ema"]);