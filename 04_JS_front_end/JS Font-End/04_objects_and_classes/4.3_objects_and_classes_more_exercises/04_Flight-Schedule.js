function flightSchedule(arrays) {
    const schedule = {};

    const [flights, changedFlights, status] = arrays;

    flights.forEach((el) => {
        const [sector, destination] = el.split(" ");
        schedule[sector] = { Destination: destination, Status: "Ready to fly" };
    });

    changedFlights.forEach((el) => {
        const [sector, newStatus] = el.split(" ");
        if (schedule[sector]) {
            schedule[sector].Status = newStatus;
        }
    });
    
    Object.values(schedule)
        .filter((info) => info.Status === status[0])
        .forEach((info) => console.log(info));
}

// flightSchedule([
//     ['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'],
//     ['Cancelled']
// ]);

// flightSchedule([
//     ['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK330 Cancelled'],
//     ['Ready to fly']
// ]);