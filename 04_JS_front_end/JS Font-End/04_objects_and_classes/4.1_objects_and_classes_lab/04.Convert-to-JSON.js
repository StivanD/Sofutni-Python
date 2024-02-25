function convertObjectToJson(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
        
    };
    
    console.log(JSON.stringify(person));
}

// convertObjectToJson('George', 'Jones', 'Brown');
// convertObjectToJson('Peter', 'Smith', 'Blond');