function encodeAndDecodeMessages() {
    const textAreaEncryptElement = document.querySelector('textarea');
    const encodeButtonElement = document.querySelector('button');
    
    const textAreaDecryptElement = document.querySelectorAll('textarea')[1];
    const decodeButtonElement = document.querySelectorAll('button')[1];
    
    let message = '';
    
    encodeButtonElement.addEventListener('click', () => {
        message = textAreaEncryptElement.value;
        textAreaDecryptElement.value = encryptMessage(textAreaEncryptElement.value);
        textAreaEncryptElement.value = '';
    });

    decodeButtonElement.addEventListener('click', () => {
        textAreaDecryptElement.value = message;
    });

    function encryptMessage(message) {
        return [...message].map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    }
    
}
