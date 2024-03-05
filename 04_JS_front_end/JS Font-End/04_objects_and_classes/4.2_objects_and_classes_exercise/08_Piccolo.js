function piccolo(records) {
    let parking = {};

    for (let input of records) {
        let [direction, carNumber] = input.split(", ");
        if (direction === 'IN') {
            parking[carNumber] = true;
        } else if (direction === 'OUT') {
            delete parking[carNumber];
        }
    }

    let parkedCars = Object.keys(parking).sort();
    
    if (parkedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(parkedCars.join('\n'));
    }
}


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);