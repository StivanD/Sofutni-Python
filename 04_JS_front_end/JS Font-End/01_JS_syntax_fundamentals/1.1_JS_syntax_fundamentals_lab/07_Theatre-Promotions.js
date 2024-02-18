function solve(dayType, age) {
    let ticketPrice;
    
    if (age >= 0 && age <= 18) {
        if (dayType === "Weekday") {
            ticketPrice = 12;
        }
        else if (dayType === "Weekend") {
            ticketPrice = 15;
        }
        else if (dayType === "Holiday") {
            ticketPrice = 5;
        }
    }
    else if (age > 18 && age <= 64) {
        if (dayType === "Weekday") {
            ticketPrice = 18;
        }
        else if (dayType === "Weekend") {
            ticketPrice = 20;
        }
        else if (dayType === "Holiday") {
            ticketPrice = 12;
        }
    }
    else if (age > 64 && age <= 122) {
        if (dayType === "Weekday") {
            ticketPrice = 12;
        }
        else if (dayType === "Weekend") {
            ticketPrice = 15;
        }
        else if (dayType === "Holiday") {
            ticketPrice = 10;
        }
    }
    else {
        console.log("Error!")
    }
    
    if (ticketPrice) {
        console.log(`${ticketPrice}$`);
    }
}

// solve('Weekday', 42);
// solve('Holiday', -12);
// solve('Holiday', 15);