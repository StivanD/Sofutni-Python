window.addEventListener("load", solve);

function solve() {
    const playerNameInput = document.getElementById('player');
    const scoreInput = document.getElementById('score');
    const roundInput = document.getElementById('round');

    const addButton = document.getElementById('add-btn');
    const clearButton = document.querySelector('.clear');

    addButton.addEventListener('click', handleAddClick);

    clearButton.addEventListener('click', clearAll);

    function handleAddClick(e) {
        e.preventDefault();

        const player = playerNameInput.value;
        const score = scoreInput.value;
        const round = roundInput.value;

        if (!player || !score || !round) {
            return;
        }

        const dartData = { player, score, round }; 
        const dartLiElement = createLiElement(dartData);

        const sureList = document.getElementById('sure-list');
        sureList.appendChild(dartLiElement);

        clearInputData();
        addButton.disabled = true;

        const editButton = dartLiElement.querySelector('.edit');
        const okButton = dartLiElement.querySelector('.ok');

        editButton.addEventListener('click', () => editDart(dartLiElement, dartData));

        okButton.addEventListener('click', () => moveToScoreboard(dartLiElement));
    }

    function clearAll() {
        window.location.reload();
    }

    function createLiElement(dartData) {
        const liElement = document.createElement('li');
        liElement.classList.add('dart-item');

        const articleElement = document.createElement('article');

        const nameParagraph = createParagraph(dartData.player);
        const scoreParagraph = createParagraph(`Score: ${dartData.score}`);
        const roundParagraph = createParagraph(`Round: ${dartData.round}`);

        articleElement.appendChild(nameParagraph);
        articleElement.appendChild(scoreParagraph);
        articleElement.appendChild(roundParagraph);

        liElement.appendChild(articleElement);

        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'edit');
        editButton.textContent = 'edit';

        const okButton = document.createElement('button');
        okButton.classList.add('btn', 'ok');
        okButton.textContent = 'ok';

        liElement.appendChild(editButton);
        liElement.appendChild(okButton);

        return liElement;
    }

    function createParagraph(text) {
        const pElement = document.createElement('p');
        pElement.textContent = text;

        return pElement;
    }

    function clearInputData() {
        playerNameInput.value = '';
        scoreInput.value = '';
        roundInput.value = '';
    }

    function populateInputFields(player, score, round) {
        playerNameInput.value = player;
        scoreInput.value = score;
        roundInput.value = round;
    }

    function editDart(dartLiElement, dartData) {
        populateInputFields(dartData.player, dartData.score, dartData.round);
        dartLiElement.remove();
        addButton.disabled = false;
    }

    function moveToScoreboard(dartLiElement) {
        const scoreboardList = document.getElementById('scoreboard-list');
        dartLiElement.querySelector('.edit').remove();
        dartLiElement.querySelector('.ok').remove();
        scoreboardList.appendChild(dartLiElement);
        addButton.disabled = false;
    }
}
