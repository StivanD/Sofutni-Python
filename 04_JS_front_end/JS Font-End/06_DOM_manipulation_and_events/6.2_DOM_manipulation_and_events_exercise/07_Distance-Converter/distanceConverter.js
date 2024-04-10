function attachEventsListeners() {
    const conversionRates = {
        // conversions to meters
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', () => {
        const inputDistanceElement = document.getElementById('inputDistance');
        const inputUnitsElement = document.getElementById('inputUnits');
        
        const outputDistanceElement = document.getElementById('outputDistance');
        const outputUnitsElement = document.getElementById('outputUnits');

        const resultDistance = (conversionRates[inputUnitsElement.value] * Number(inputDistanceElement.value)) / conversionRates[outputUnitsElement.value];
        outputDistanceElement.value = resultDistance;
    });
}


