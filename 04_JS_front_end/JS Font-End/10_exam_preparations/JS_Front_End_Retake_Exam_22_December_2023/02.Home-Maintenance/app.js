window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    const placeInput = document.getElementById('place');
    const actionInput = document.getElementById('action');
    const personInput = document.getElementById('person');

    addButton.addEventListener('click', () => {
        const place = placeInput.value;
        const action = actionInput.value;
        const person = personInput.value;

        if (!place || !action || !person) {
            return;
        }
        
        const taskListUl = document.getElementById('task-list');
        const liElement = createLiElement(place, action, person);

        const buttonsDiv = createButtonsContainer();
        
        liElement.appendChild(buttonsDiv);
        taskListUl.appendChild(liElement);
        
        clearInputData();
        
        const editButton = buttonsDiv.querySelector('.edit');
        const doneButton = buttonsDiv.querySelector('.done');
        
        editButton.addEventListener('click', () => {
            placeInput.value = place
            actionInput.value = action
            personInput.value = person

            liElement.remove();
        });

        doneButton.addEventListener('click', () => {
            const doneTasksList = document.getElementById('done-list');
            doneTasksList.appendChild(liElement);

            buttonsDiv.remove();

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'Delete';

            liElement.appendChild(deleteButton);

            deleteButton.addEventListener('click', () => {
                liElement.remove();
            });
        });
    })

    function createLiElement(place, action, person) {
        const newLiElement = document.createElement('li');
        newLiElement.classList.add('clean-task');
        
        const taskArticle = document.createElement('article');
        
        const placeParagraph = createParagraph(`Place: ${place}`);
        const actionParagraph = createParagraph(`Action: ${action}`);
        const personParagraph = createParagraph(`Person: ${person}`);
        
        taskArticle.appendChild(placeParagraph);
        taskArticle.appendChild(actionParagraph);
        taskArticle.appendChild(personParagraph);
        newLiElement.appendChild(taskArticle);
        
        return newLiElement;
    }
    
    function createParagraph(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
    }
    
    function createButtonsContainer() {
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';

        const doneButton = document.createElement('button');
        doneButton.classList.add('done');
        doneButton.textContent = 'Done'

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(doneButton);
        
        return buttonsDiv;
    }

    function clearInputData() {
        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';
    }
}
