function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');
    
    for (const profileElement of profileElements) {
        const showButtonElement = profileElement.querySelector('button');
        const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]');
         
        showButtonElement.addEventListener('click', () => {
            if (lockRadioElement.checked) {
                return;
            }
            
            const additionalInformationElement = showButtonElement.previousElementSibling;
            
            additionalInformationElement.style.display = additionalInformationElement.style.display === 'block'
                ? 'none'
                : 'block';
            showButtonElement.textContent = showButtonElement.textContent === 'Show more'
                ? 'Hide it'
                : 'Show more';
        })
    }
}