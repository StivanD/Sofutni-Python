window.addEventListener('load', solve);

function solve() {
    const addButton = document.getElementById('add-btn');

    const genreInput = document.getElementById('genre');
    const songNameInput = document.getElementById('name');
    const songAuthorInput = document.getElementById('author');
    const creationDateInput = document.getElementById('date');

    const totalLikesElement = document.querySelector('.likes p');
    let totalLikes = Number(totalLikesElement.textContent.split(': ')[1]);

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        const { genre, songName, songAuthor, creationDate } = getInputData();

        if (!genre || !songName || !songAuthor || !creationDate) {
            return;
        }

        const allHitsContainer = document.querySelector('.all-hits-container');

        const newHitContainer = createHitContainer(genre, songName, songAuthor, creationDate);

        allHitsContainer.appendChild(newHitContainer);

        clearInputData();

        const likeButton = newHitContainer.querySelector('.like-btn');
        const saveButton = newHitContainer.querySelector('.save-btn');
        const deleteButton = newHitContainer.querySelector('.delete-btn');

        likeButton.addEventListener('click', () => {
            totalLikes += 1;
            totalLikesElement.textContent = `Total Likes: ${totalLikes}`;
            likeButton.disabled = true;
        });

        saveButton.addEventListener('click', () => {
            const savedSongsContainer = document.querySelector('.saved-container');
            savedSongsContainer.appendChild(newHitContainer);
            likeButton.remove();
            saveButton.remove();
        });

        deleteButton.addEventListener('click', () => {
            newHitContainer.remove();
        });
    });

    function createHitContainer(genre, songName, songAuthor, creationDate) {
        const hitContainer = document.createElement('div');
        hitContainer.classList.add('hits-info');

        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        const h2GenreElement = createHeadingElement('h2', `Genre: ${genre}`);
        const h2SongNameElement = createHeadingElement('h2', `Name: ${songName}`);
        const h2SongAuthorElement = createHeadingElement('h2', `Author: ${songAuthor}`);
        const h3creationDateElement = createHeadingElement('h3', `Date: ${creationDate}`);

        const saveButton = createButton('save-btn', 'Save song');
        const likeButton = createButton('like-btn', 'Like song');
        const deleteButton = createButton('delete-btn', 'Delete');

        hitContainer.appendChild(imgElement);
        hitContainer.appendChild(h2GenreElement);
        hitContainer.appendChild(h2SongNameElement);
        hitContainer.appendChild(h2SongAuthorElement);
        hitContainer.appendChild(h3creationDateElement);
        hitContainer.appendChild(saveButton);
        hitContainer.appendChild(likeButton);
        hitContainer.appendChild(deleteButton);

        return hitContainer;
    }

    function createHeadingElement(headingLevel, text) {
        const headingElement = document.createElement(headingLevel);
        headingElement.textContent = text;

        return headingElement
    }

    function createButton(buttonClass, text) {
        const buttonElement = document.createElement('button');
        buttonElement.classList.add(buttonClass);
        buttonElement.textContent = text;

        return buttonElement;
    }

    function clearInputData() {
        genreInput.value = '';
        songNameInput.value = '';
        songAuthorInput.value = '';
        creationDateInput.value = '';
    }

    function getInputData() {
        const genre = genreInput.value;
        const songName = songNameInput.value;
        const songAuthor = songAuthorInput.value;
        const creationDate = creationDateInput.value;

        return { genre, songName, songAuthor, creationDate };
    }
}