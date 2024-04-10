function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');
    
    Array.from(inputElements).forEach(inputElement => {
        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);
    });

    function handleFocus(event) {
        event.target.parentElement.classList.add('focused');
    }

    function handleBlur(event) {
        event.target.parentElement.classList.remove('focused');
    }
}
