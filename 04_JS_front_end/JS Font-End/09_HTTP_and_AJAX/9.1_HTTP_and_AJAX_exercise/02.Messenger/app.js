function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    // Button Elements
    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');

    // Input Elements
    const nameInput = document.querySelector('input[name=author]');
    const messageInput = document.querySelector('input[name=content]');

    // Textarea Element
    const textarea = document.getElementById('messages');

    sendButton.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                author: nameInput.value,
                content: messageInput.value,
            })
        });
    });

    refreshButton.addEventListener('click', () => {
        textarea.textContent = '';

        let messages = [];

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                const messages = Object.values(data).map(message => `${message.author}: ${message.content}`);
                textarea.textContent = messages.join('\n');
            })
    })
}

attachEvents();