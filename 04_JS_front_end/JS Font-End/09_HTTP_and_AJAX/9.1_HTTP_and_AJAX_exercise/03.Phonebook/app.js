function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');
    const phonebook = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    loadButton.addEventListener('click', () => {
        phonebook.innerHTML = '';

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                    .forEach(entry => {
                        phonebook.appendChild(createEntryLiElement(entry));
                    });
            });
    });

    createButton.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value,
            })
        })
            .then((res) => res.json())
            .then(entry => {
                const liElement = createEntryLiElement(entry);

                phonebook.appendChild(liElement);

                personInput.value = '';
                phoneInput.value = '';
            });
    });

    function createEntryLiElement({ _id, person, phone }) {
        const liElement = document.createElement('li');
        liElement.textContent = `${person}: ${phone}`

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            fetch(`${baseUrl}/${_id}`, {
                method: 'DELETE'
            })
                .then(() => {
                    liElement.remove();
                })
        });

        liElement.appendChild(deleteButton);

        return liElement;
    }
}

attachEvents();