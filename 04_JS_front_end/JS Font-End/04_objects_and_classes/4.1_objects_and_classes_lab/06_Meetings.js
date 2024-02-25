function meetings(appointments) {
    let appointmentsObj = {};
    
    for (let appointment of appointments) {
        let [day, name] = appointment.split(' ');
        
        if (appointmentsObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            appointmentsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    
    for (let [day, name] of Object.entries(appointmentsObj)) {
        console.log(`${day} -> ${name}`);
    }
}

// meetings(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim'
// ]);

// meetings(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George'
// ]);