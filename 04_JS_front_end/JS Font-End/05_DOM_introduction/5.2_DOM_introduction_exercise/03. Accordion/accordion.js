function toggle() {
    const buttonText = document.querySelector('.button');
    const extraText = document.getElementById('extra');
    
    buttonText.textContent = extraText.style.display === 'none' ? 'Less' : 'More';
    
    extraText.style.display = extraText.style.display === 'none' ? 'block' : 'none';
}
