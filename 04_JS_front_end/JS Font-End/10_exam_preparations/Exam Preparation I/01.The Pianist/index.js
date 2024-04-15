function solve(input) {
    const piecesCount = Number(input.shift());
    const piecesObj = {};

    for (let i = 0; i < piecesCount; i++) {
        const [piece, composer, key] = input.shift().split('|');
        piecesObj[piece] = { composer, key };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Stop') {
        const [operation, piece, ...args] = commandLine.split('|');

        if (operation === 'Add') {
            if (piecesObj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                const [composer, key] = args;
                piecesObj[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (operation === 'Remove') {
            if (!piecesObj.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                delete piecesObj[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        } else if (operation === 'ChangeKey') {
            if (!piecesObj.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                const [newKey] = args;
                piecesObj[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }

        commandLine = input.shift();
    }

    Object.entries(piecesObj).forEach(([piece, { composer, key }]) => {
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    });
}

// Example usage
// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);


// solve([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);