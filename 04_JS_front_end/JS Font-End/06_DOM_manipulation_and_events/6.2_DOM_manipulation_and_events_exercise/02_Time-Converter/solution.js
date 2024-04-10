function attachEventsListeners() {
    const timeUnitsToSeconds = {
        days: 24 * 60 * 60,
        hours: 60 * 60,
        minutes: 60,
        seconds: 1
    };

    const convertButtons = document.querySelectorAll('input[type="button"][value="Convert"]');

    Array.from(convertButtons).forEach(button => {
        button.addEventListener('click', function() {
            const inputField = this.previousElementSibling;
            const inputValue = parseFloat(inputField.value);
            const inputId = inputField.id;

            const inputSeconds = inputValue * timeUnitsToSeconds[inputId];

            for (const unit in timeUnitsToSeconds) {
                if (unit !== inputId) {
                    document.getElementById(unit).value = inputSeconds / timeUnits[unit];
                }
            }
        });
    });
}
