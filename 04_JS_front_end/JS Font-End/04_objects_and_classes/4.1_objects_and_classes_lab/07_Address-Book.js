function adressBook(peopleData) {
    let adressesObj = {};
    
    for (let el of peopleData) {
        let [name, address] = el.split(':');
        adressesObj[name] = address;
    }
    
    let sortedAdresses = Object.entries(adressesObj).sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedAdresses.forEach(([name, address]) => 
        console.log(`${name} -> ${address}`)
    );
}

// adressBook(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd'
// ]);

// adressBook(['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd'
// ]);