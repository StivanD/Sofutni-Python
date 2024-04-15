window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById('name');
    const phoneNumberInput = document.getElementById('phone');
    const categorySelect = document.getElementById('category');

    const addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', handleAddClick);

    function handleAddClick(e) {
        e.preventDefault();

        const name = nameInput.value;
        const phoneNumber = phoneNumberInput.value;
        const category = categorySelect.value;

        if (!name || !phoneNumber || !category) {
            return;
        }

        const contactData = { name, phoneNumber, category };
        const contactLiElement = createLiElement(contactData);

        const checkList = document.getElementById('check-list');
        checkList.appendChild(contactLiElement);
        
        clearInputData();
        
        const editButton = contactLiElement.querySelector('.edit-btn');
        const saveButton = contactLiElement.querySelector('.save-btn');
        
        editButton.addEventListener('click', () => editContact(contactLiElement, contactData));
        
        saveButton.addEventListener('click', () => moveToContacts(contactLiElement));
    }

    function createLiElement(contactData) {
        const liElement = document.createElement('li');

        const articleElement = document.createElement('article')

        const nameParagraph = createParagraph(`name:${contactData.name}`);
        const phoneParagraph = createParagraph(`phone:${contactData.phoneNumber}`);
        const categoryParagraph = createParagraph(`category:${contactData.category}`);

        articleElement.appendChild(nameParagraph);
        articleElement.appendChild(phoneParagraph);
        articleElement.appendChild(categoryParagraph);

        liElement.appendChild(articleElement);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(saveButton);
        
        liElement.appendChild(buttonsDiv);

        return liElement;
    }

    function createParagraph(text) {
        const pElement = document.createElement('p');
        pElement.textContent = text;

        return pElement;
    }

    function clearInputData() {
        nameInput.value = '';
        phoneNumberInput.value = '';
        categorySelect.value = '';
    }
    
    function editContact(contactLiElement, contactData) {
        populateInputFields(contactData.name, contactData.phoneNumber, contactData.category);
        contactLiElement.remove();
    }
    
    function moveToContacts(contactLiElement) {
        const contactList = document.getElementById('contact-list');
        contactLiElement.querySelector('.buttons').remove();
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('del-btn');
        
        deleteButton.addEventListener('click', () => {
            contactLiElement.remove();
        });
        
        contactLiElement.appendChild(deleteButton);
        
        contactList.appendChild(contactLiElement);
    }
    
    function populateInputFields(name, phoneNumber, category) {
        nameInput.value = name;
        phoneNumberInput.value = phoneNumber;
        categorySelect.value = category;
    }
}
