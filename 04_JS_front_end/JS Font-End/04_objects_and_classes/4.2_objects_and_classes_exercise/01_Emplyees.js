function employee(names) {
    let employees = {};

    for (let name of names) {
        let personalNumber = name.length;
        employees[name] = personalNumber
    }

    Object.entries(employees).forEach(([name, personalNumber]) =>
        console.log(`Name: ${name} -- Personal Number: ${personalNumber}`)
    );
}

// employee([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ]);

// employee([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]);