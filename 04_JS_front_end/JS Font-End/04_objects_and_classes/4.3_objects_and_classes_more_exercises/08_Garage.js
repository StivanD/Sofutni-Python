function garage(input) {
    const garages = {};

    input.forEach(entry => {
        const [garageNumber, carInfo] = entry.split(' - ');
        const carDetails = carInfo.split(', ').map(detail => detail.split(': '));
        const carObject = Object.fromEntries(carDetails);

        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        garages[garageNumber].push(carObject);
    });

    Object.entries(garages).forEach(([garageNumber, cars]) => {
        console.log(`Garage № ${garageNumber}`);
        cars.forEach(car => {
            const carDetailsString = Object.entries(car).map(([key, value]) => `${key} - ${value}`).join(', ');
            console.log(`--- ${carDetailsString}`);
        });
    });
}

// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

// garage(['1 - color: green, fuel type: petrol',
// '1 - color: dark red, manufacture: WV',
// '2 - fuel type: diesel',
// '3 - color: dark blue, fuel type: petrol'
// ]);
