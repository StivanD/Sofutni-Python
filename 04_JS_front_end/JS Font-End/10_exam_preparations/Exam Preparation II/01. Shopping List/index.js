function solve(initialList) {
    let groceries = initialList.shift().split('!');

    for (let commandLine of initialList) {
        const [operation, item, ...args] = commandLine.split(' ');

        switch (operation) {
            case 'Urgent':
                if (!groceries.includes(item)) {
                    groceries.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (groceries.includes(item)) {
                    groceries = groceries.filter(g => g !== item);
                }
                break;
            case 'Correct':
                if (groceries.includes(item)) {
                    const [newItem] = args;
                    groceries[groceries.indexOf(item)] = newItem;
                }
                break;
            case 'Rearrange':
                if (groceries.includes(item)) {
                    groceries = groceries.filter(g => g !== item);
                    groceries.push(item);
                }
                break;
        }
    }

    console.log(groceries.join(', '));
}

// solve(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"
// ]);

// solve(["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"
// ]);
