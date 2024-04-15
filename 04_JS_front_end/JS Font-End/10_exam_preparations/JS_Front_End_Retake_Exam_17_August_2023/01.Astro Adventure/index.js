function solve(input) {
    const astronautsCount = Number(input.shift());
    const astronautsObj = {};
    const MAX_OXYGEN_LEVEL = 100;
    const MAX_ENERGY_RESERVES = 200;
    
    const operationMapper = {
        'Explore': (astronautName, amount) => {
            if (astronautsObj[astronautName].energyReserves >= amount) {
                astronautsObj[astronautName].energyReserves -= amount;
                console.log(`${astronautName} has successfully explored a new area and now has ${astronautsObj[astronautName].energyReserves} energy!`)
            } else {
                console.log(`${astronautName} does not have enough energy to explore!`);
            }
        },
        'Refuel': (astronautName, amount) => {
            const recoveredEnergy = Math.min(Number(amount), MAX_ENERGY_RESERVES - astronautsObj[astronautName].energyReserves);
            astronautsObj[astronautName].energyReserves += recoveredEnergy;
            console.log(`${astronautName} refueled their energy by ${recoveredEnergy}!`);
        },
        'Breathe': (astronautName, amount) => {
            const recoveredOxygen = Math.min(Number(amount), MAX_OXYGEN_LEVEL - astronautsObj[astronautName].oxygenLevel);
            astronautsObj[astronautName].oxygenLevel += recoveredOxygen;
            console.log(`${astronautName} took a breath and recovered ${recoveredOxygen} oxygen!`);
        },
    };

    for (let i = 0; i < astronautsCount; i++) {
        let [name, oxygenLevel, energyReserves] = input.shift().split(' ');
        astronautsObj[name] = {
            oxygenLevel: Number(oxygenLevel),
            energyReserves: Number(energyReserves),
        };
    }

    let commandLine = input.shift();

    while (commandLine !== 'End') {
        const [operation, astronautName, amount] = commandLine.split(' - ');

        operationMapper[operation](astronautName, Number(amount));

        commandLine = input.shift();
    }

    Object.entries(astronautsObj).forEach(([name, { oxygenLevel, energyReserves }]) => {
        console.log(`Astronaut: ${name}, Oxygen: ${oxygenLevel}, Energy: ${energyReserves}`);
    });
}