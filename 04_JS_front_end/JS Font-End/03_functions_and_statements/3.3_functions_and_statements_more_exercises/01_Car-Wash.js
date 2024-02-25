function carWash(commands) {
    let percentage = 0;
    
    let commandsObj = {
        'soap': (x) => x + 10,
        'water': (x) => x * 1.2,
        'vacuum cleaner': (x) => x * 1.25,
        'mud': (x) => x * 0.9
    };
    
    for (let command of commands) {
        percentage = commandsObj[command](percentage);
    }
    
    console.log(`The car is ${percentage.toFixed(2)}% clean.`)
}

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
// carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);