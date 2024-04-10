function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    
    document.getElementById('items').appendChild(newItem);
    document.getElementById('newItemText').value = '';
}