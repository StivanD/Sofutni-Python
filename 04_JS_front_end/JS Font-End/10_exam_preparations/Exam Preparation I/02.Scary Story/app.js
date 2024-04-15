window.addEventListener("load", solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const ageInput = document.getElementById('age');
    const storyTitleInput = document.getElementById('story-title');
    const genreInput = document.getElementById('genre');
    const storyInput = document.getElementById('story');
    
    const mainContainer = document.getElementById('main');
    
    const publishButton = document.getElementById('form-btn');

    publishButton.addEventListener('click', () => {
        const { firstName, lastName, age, storyTitle, genre, story } = getInputData();

        if (!firstName || !lastName ||
            !age || !storyTitle || !story) {
            return;
        }

        const previewList = document.getElementById('preview-list');

        const newLiElement = createLiElement(firstName, lastName, age, storyTitle, genre, story);
        previewList.appendChild(newLiElement);

        clearInputData();
        publishButton.disabled = true;

        const editStoryButton = newLiElement.querySelector('.edit-btn');
        const saveStoryButton = newLiElement.querySelector('.save-btn');
        const deleteStoryButton = newLiElement.querySelector('.delete-btn');

        editStoryButton.addEventListener('click', () => {
            populateInputFields(firstName, lastName, age, storyTitle, genre, story);
            newLiElement.remove();
            publishButton.disabled = false;
        });
        
        saveStoryButton.addEventListener('click', () => {
            mainContainer.innerHTML = '';
            
            const newH1Element = document.createElement('h1');
            newH1Element.textContent = 'Your scary story is saved';
            
            mainContainer.appendChild(newH1Element);
        });
        
        deleteStoryButton.addEventListener('click', () => {
            newLiElement.remove();
            publishButton.disabled = false;
        });
    })

    function createLiElement(firstName, lastName, age, storyTitle, genre, story) {
        const liElement = document.createElement('li');
        liElement.classList.add('story-info');

        const listArticle = document.createElement('article');

        const nameH4Element = document.createElement('h4');
        nameH4Element.textContent = `Name: ${firstName} ${lastName}`;
        listArticle.appendChild(nameH4Element);

        const ageParagraph = createParagraph(`Age: ${age}`)
        listArticle.appendChild(ageParagraph);

        const titleParagraph = createParagraph(`Title: ${storyTitle}`);
        listArticle.appendChild(titleParagraph);

        const genreParagraph = createParagraph(`Genre: ${genre}`);
        listArticle.appendChild(genreParagraph)

        const storyParagraph = createParagraph(story);
        listArticle.appendChild(storyParagraph);

        liElement.appendChild(listArticle);

        const saveStoryButton = createButton('save-btn', 'Save Story');
        const editStoryButton = createButton('edit-btn', 'Edit Story');
        const deleteStoryButton = createButton('delete-btn', 'Delete Story');

        liElement.appendChild(saveStoryButton);
        liElement.appendChild(editStoryButton);
        liElement.appendChild(deleteStoryButton);

        return liElement;
    }

    function createParagraph(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;

        return paragraph;
    }

    function createButton(className, text) {
        const button = document.createElement('button');
        button.classList.add(className);
        button.textContent = text;

        return button;
    }

    function getInputData() {
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let age = ageInput.value;
        let storyTitle = storyTitleInput.value;
        let genre = genreInput.value;
        let story = storyInput.value;

        return { firstName, lastName, age, storyTitle, genre, story };
    }

    function clearInputData() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';
        storyTitleInput.value = '';
        genreInput.value = '';
        storyInput.value = '';
    }

    function populateInputFields(firstName, lastName, age, storyTitle, genre, story) {
        firstNameInput.value = firstName;
        lastNameInput.value = lastName
        ageInput.value = age;
        storyTitleInput.value = storyTitle;
        genreInput.value = genre
        storyInput.value = story;
    }
}
