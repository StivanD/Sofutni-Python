function printDNAHelix(length) {
    const sequence = 'ATCGTTAGGG';
    let sequenceIndex = 0;

    for (let i = 0; i < length; i++) {
        let line = '';
        if (i % 4 === 0) {
            line = `**${sequence[sequenceIndex++ % sequence.length]}${sequence[sequenceIndex++ % sequence.length]}**`;
        } else if (i % 4 === 1 || i % 4 === 3) {
            line = `*${sequence[sequenceIndex++ % sequence.length]}--${sequence[sequenceIndex++ % sequence.length]}*`;
        } else {
            line = `${sequence[sequenceIndex++ % sequence.length]}----${sequence[sequenceIndex++ % sequence.length]}`;
        }
        console.log(line);
    }
}

printDNAHelix(4);
printDNAHelix(10);