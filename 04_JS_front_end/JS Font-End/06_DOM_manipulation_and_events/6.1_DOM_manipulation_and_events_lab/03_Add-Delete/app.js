function addItem() {
    const inputItemElement = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');
    
    const newInputItemElement = document.createElement('li');
    newInputItemElement.textContent = inputItemElement.value;
    
    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';
    newInputItemElement.appendChild(deleteLinkElement);
    
    deleteLinkElement.addEventListener('click', () => {
        newInputItemElement.remove();
    });
    
    itemsListElement.appendChild(newInputItemElement);
    
    inputItemElement.value = '';
}
