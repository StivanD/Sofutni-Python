function solve(speed, area) {
    let speedLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }
    
    if (speedLimits[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    }
    else {
        let difference = speed - speedLimits[area];
        let status = '';
        
        if (difference <= 20) {
            status = 'speeding';
        }
        else if (difference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }
        
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    }
}

// solve(40, "city");
// solve(21, "residential")
// solve(120, "interstate");