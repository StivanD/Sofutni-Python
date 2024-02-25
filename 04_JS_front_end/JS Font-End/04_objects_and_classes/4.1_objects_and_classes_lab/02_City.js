function city(cityObj) {
    let cityEntries = Object.entries(cityObj);
    for (let [key, value] of cityEntries) {
        console.log(`${key} -> ${value}`);
    }
}

// city({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// });

// city({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// });