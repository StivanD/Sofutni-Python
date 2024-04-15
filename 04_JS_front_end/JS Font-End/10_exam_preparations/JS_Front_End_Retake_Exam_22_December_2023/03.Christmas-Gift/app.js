const baseUrl = 'http://localhost:3030/jsonstore/gifts';

const loadPresentsButton = document.getElementById('load-presents');

const addPresentButton = document.getElementById('add-present');
const editPresentButton = document.getElementById('edit-present');

const presentInput = document.getElementById('gift');
const forInput = document.getElementById('for');
const priceInput = document.getElementById('price');

let currentPresentId = null;

const loadPresents = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    
    const giftList = document.getElementById('gift-list');
    giftList.innerHTML = '';
    
    for (const present of Object.values(data)) {
        const giftSock = createGiftSock(present);
        
        giftList.appendChild(giftSock);
        editPresentButton.disabled = true;
        
        const changeButton = giftSock.querySelector('.change-btn');
        const deleteButton = giftSock.querySelector('.delete-btn');
        
        changeButton.addEventListener('click', () => {
            currentPresentId = present._id;
            
            presentInput.value = present.gift;
            forInput.value = present.for;
            priceInput.value = present.price;
            
            editPresentButton.disabled = false;
            addPresentButton.disabled = true;
            
            giftSock.remove();
        });
        
        deleteButton.addEventListener('click', async () => {
            const response = await fetch(`${baseUrl}/${present._id}`, {
                method: 'DELETE'
            });
            
            giftSock.remove();
        });
    }
};

loadPresentsButton.addEventListener('click', loadPresents);

addPresentButton.addEventListener('click', async () => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application-js',
        },
        body: JSON.stringify({
            "gift": presentInput.value,
            "for": forInput.value,
            "price": priceInput.value,
        })
    });
    
    if (!response.ok) {
        return;
    }
    
    clearInputData();
    
    await loadPresents();
    
});

editPresentButton.addEventListener('click', async () => {
    const response = await fetch(`${baseUrl}/${currentPresentId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: currentPresentId,
            "gift": presentInput.value,
            "for": forInput.value,
            "price": priceInput.value,
        })
    });
    
    if(!response.ok) {
        return;
    }
    
    loadPresents();
    
    editPresentButton.disabled = true;
    addPresentButton.disabled = false;
    
    currentPresentId = null;
    
    clearInputData();
});

function createGiftSock(present) {
    const giftSock = document.createElement('div');
    giftSock.classList.add('gift-sock');
    
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content');
    
    const giftParagraph = document.createElement('p');
    giftParagraph.textContent = present.gift;
    
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = present.for;
    
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = present.price;
    
    contentContainer.appendChild(giftParagraph);
    contentContainer.appendChild(nameParagraph);
    contentContainer.appendChild(priceParagraph);
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons=container');
    
    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    
    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);
    
    contentContainer.appendChild(buttonsContainer);
    
    giftSock.appendChild(contentContainer);
    
    return giftSock;
}

function clearInputData() {
    presentInput.value = '';
    forInput.value = '';
    priceInput.value = '';
}