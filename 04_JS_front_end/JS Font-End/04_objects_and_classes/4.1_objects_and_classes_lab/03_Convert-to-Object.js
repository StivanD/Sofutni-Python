function convertJsonToObject(jsonStr) {
    let person = JSON.parse(jsonStr);
    let personEntries = Object.entries(person);
    
    for (let [key, value] of personEntries) {
        console.log(`${key}: ${value}`);
    }
}

// convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// convertJsonToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');