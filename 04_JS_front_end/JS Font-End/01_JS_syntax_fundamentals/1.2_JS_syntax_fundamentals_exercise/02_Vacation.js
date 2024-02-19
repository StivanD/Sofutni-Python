function solve(peopleCount, groupType, dayOfWeek) {
    let totalPrice;

    if (groupType === "Students") {
        if (dayOfWeek === "Friday") {
            totalPrice = 8.45 * peopleCount;
        }
        else if (dayOfWeek === "Saturday") {
            totalPrice = 9.80 * peopleCount;
        }
        else if (dayOfWeek === "Sunday") {
            totalPrice = 10.46 * peopleCount;
        }

        if (peopleCount >= 30) {
            totalPrice *= 0.85;
        }
    }
    else if (groupType === "Business") {
        if (dayOfWeek === "Friday") {
            totalPrice = 10.90 * peopleCount;

            if (peopleCount >= 100) {
                totalPrice -= 10 * 10.90;
            }
        }
        else if (dayOfWeek === "Saturday") {
            totalPrice = 15.60 * peopleCount;

            if (peopleCount >= 100) {
                totalPrice -= 10 * 15.60
            }
        }
        else if (dayOfWeek === "Sunday") {
            totalPrice = 16 * peopleCount;

            if (peopleCount >= 100) {
                totalPrice -= 10 * 16;
            }
        }
    }
    else if (groupType === "Regular") {
        if (dayOfWeek === "Friday") {
            totalPrice = 15 * peopleCount;
        }
        else if (dayOfWeek === "Saturday") {
            totalPrice = 20 * peopleCount;
        }
        else if (dayOfWeek === "Sunday") {
            totalPrice = 22.50 * peopleCount;
        }
        
        if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95;
        }
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// solve(30, "Students", "Sunday");
// solve(40, "Regular", "Saturday");