function sequences(array) {
    const uniqueSequences = new Set();

    array.forEach(entry => {
        const sequence = JSON.parse(entry).sort((a, b) => b - a);
        uniqueSequences.add(JSON.stringify(sequence));
    });

    const sortedSequences = Array.from(uniqueSequences)
        .map(seq => JSON.parse(seq))
        .sort((a, b) => a.length - b.length);

    sortedSequences.forEach(seq => console.log(`[${seq.join(', ')}]`));
}

// sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"
// ]);

// sequences(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ]);