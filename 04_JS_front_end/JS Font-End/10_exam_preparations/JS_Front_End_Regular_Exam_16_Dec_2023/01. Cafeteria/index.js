function solve(input) {
    const baristasCount = Number(input.shift());

    let baristasObj = {};

    for (let i = 0; i < baristasCount; i++) {
        const [ name, shift, ...coffeeTypes ] = input.shift().split(' ');
        
        baristasObj[name] = {
            'shift': shift,
            'coffeeTypes': coffeeTypes[0].split(','),
        };
    }

    let currentCommand = input.shift();

    while (currentCommand !== 'Closed') {
        let args = currentCommand.split(' / ');
        
        const operation = args.shift();
        const baristaName = args.shift();
        
        if (operation === 'Prepare') {
            const [ shift, coffeeType ] = args;
            
            if (baristasObj[baristaName]['shift'] === shift
                && baristasObj[baristaName]['coffeeTypes'].includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
            }
            else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }
        }
        else if (operation === 'Change Shift') {
            const newShift = args[0];
            
            baristasObj[baristaName]['shift'] = newShift;
            console.log(`${baristaName} has updated his shift to: ${newShift}`);
        }
        else if (operation === 'Learn') {
            const newCoffeeType = args[0];
            
            if (baristasObj[baristaName]['coffeeTypes'].includes(newCoffeeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            }
            else {
                baristasObj[baristaName]['coffeeTypes'].push(newCoffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`)
            }
        }
        
        currentCommand = input.shift();
    }
    
    for (let [baristaName, baristaInfo] of Object.entries(baristasObj)) {
        console.log(`Barista: ${baristaName}, Shift: ${baristaInfo['shift']}, Drinks: ${baristaInfo['coffeeTypes'].join(', ')}`);
    }
}

// solve([
//     '3',
//       'Alice day Espresso,Cappuccino',
//       'Bob night Latte,Mocha',
//       'Carol day Americano,Mocha',
//       'Prepare / Alice / day / Espresso',
//       'Change Shift / Bob / night',
//       'Learn / Carol / Latte',
//       'Learn / Bob / Latte',
//       'Prepare / Bob / night / Latte',
//       'Closed']
// );

// console.log('\n');

// solve(['4',
// 'Alice day Espresso,Cappuccino',
// 'Bob night Latte,Mocha',
// 'Carol day Americano,Mocha',
// 'David night Espresso',
// 'Prepare / Alice / day / Espresso',
// 'Change Shift / Bob / day',
// 'Learn / Carol / Latte',
// 'Prepare / Bob / night / Latte',
// 'Learn / David / Cappuccino',
// 'Prepare / Carol / day / Cappuccino',
// 'Change Shift / Alice / night',
//  'Learn / Bob / Mocha',
// 'Prepare / David / night / Espresso',
// 'Closed']
// );