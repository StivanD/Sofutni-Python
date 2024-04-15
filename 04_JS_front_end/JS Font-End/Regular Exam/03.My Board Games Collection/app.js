const baseUrl = 'http://localhost:3030/jsonstore/games';

const gameNameInput = document.getElementById('g-name');
const gameTypeInput = document.getElementById('type');
const playersCountInput = document.getElementById('players');

const gamesList = document.getElementById('games-list');

const loadGamesButton = document.getElementById('load-games');
const addGameButton = document.getElementById('add-game');
const editGameButton = document.getElementById('edit-game');

let currentGameId = null;

loadGamesButton.addEventListener('click', loadGames);

addGameButton.addEventListener('click', async (e) => {
    e.preventDefault();

    if (!validateInput()) {
        return;
    }

    const { name, type, players } = getInputData();

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name,
            type,
            players,
        }),
    });

    clearInputData();

    await loadGames(e);
})

editGameButton.addEventListener('click', async (e) => {
    if (!validateInput()) {
        return;
    }

    const { name, type, players } = getInputData();

    const response = await fetch(`${baseUrl}/${currentGameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name,
            type,
            players,
            _id: currentGameId
        }),
    });

    clearInputData();

    addGameButton.disabled = false;
    editGameButton.disabled = true;

    await loadGames(e);
})

async function loadGames(e) {
    if (e) {
        e.preventDefault();
    }

    const response = await fetch(baseUrl);
    const data = await response.json();

    renderGames(data);
}

function renderGames(games) {
    gamesList.innerHTML = '';

    Object.values(games).forEach(game => {
        const gameElement = createGameElement(game);
        gamesList.appendChild(gameElement);
    })
}

function createGameElement(game) {
    const boardGameContainer = document.createElement('div');
    boardGameContainer.classList.add('board-game');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content');

    const gameNameParagraph = createParagraph(game.name);
    const playersCountParagraph = createParagraph(game.players);
    const gameTypeParagraph = createParagraph(game.type);

    contentContainer.appendChild(gameNameParagraph);
    contentContainer.appendChild(playersCountParagraph);
    contentContainer.appendChild(gameTypeParagraph);

    boardGameContainer.appendChild(contentContainer);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', (e) => populateInputData(game, boardGameContainer));

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', (e) => deleteGame(game._id, boardGameContainer));

    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    boardGameContainer.appendChild(buttonsContainer);

    return boardGameContainer;
}

function populateInputData(game, boardGameContainer) {
    currentGameId = game._id;

    gameNameInput.value = game.name;
    gameTypeInput.value = game.type;
    playersCountInput.value = game.players;

    addGameButton.disabled = true;
    editGameButton.disabled = false;

    boardGameContainer.remove();
}

async function deleteGame(gameId, boardGameContainer) {
    const response = await fetch(`${baseUrl}/${gameId}`, {
        method: 'DELETE',
    });
    boardGameContainer.remove();
}

function createParagraph(text) {
    const pElement = document.createElement('p');
    pElement.textContent = text;

    return pElement;
}

function getInputData() {
    const name = gameNameInput.value;
    const type = gameTypeInput.value;
    const players = playersCountInput.value;

    return { name, type, players };
}

function clearInputData() {
    gameNameInput.value = '';
    gameTypeInput.value = '';
    playersCountInput.value = '';
}

function validateInput() {
    if (!gameNameInput.value || !gameTypeInput.value || !playersCountInput.value) {
        return false;
    }
    return true;
}

