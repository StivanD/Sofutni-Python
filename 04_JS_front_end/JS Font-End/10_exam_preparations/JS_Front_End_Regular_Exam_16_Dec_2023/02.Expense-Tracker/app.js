window.addEventListener("load", solve);

function solve() {
    const expenseTypeInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');

    const addButton = document.getElementById('add-btn');
    const deleteButton = document.querySelector('.btn.delete');

    addButton.addEventListener('click', () => {
        const expenseTypeInputValue = expenseTypeInput.value;
        const amountInputValue = amountInput.value;
        const dateInputValue = dateInput.value;

        if (!expenseTypeInputValue || !amountInputValue || !dateInputValue) {
            return;
        }

        const previewList = document.getElementById('preview-list');
        const expenseLiElement = createExpenseItem(expenseTypeInputValue, amountInputValue, dateInputValue);
        previewList.appendChild(expenseLiElement);

        addButton.disabled = true;
        expenseTypeInput.value = '';
        amountInput.value = '';
        dateInput.value = '';

        const editButton = expenseLiElement.querySelector('.btn.edit');
        const okButton = expenseLiElement.querySelector('.btn.ok');

        editButton.addEventListener('click', () => {
            expenseTypeInput.value = expenseTypeInputValue;
            amountInput.value = amountInputValue;
            dateInput.value = dateInputValue;

            expenseLiElement.remove();
            addButton.disabled = false;
        });

        okButton.addEventListener('click', () => {
            const expensesList = document.getElementById('expenses-list');
            expensesList.appendChild(expenseLiElement);
            expenseLiElement.querySelector('.buttons').remove();
            addButton.disabled = false;
        });
    });

    deleteButton.addEventListener('click', () => {
        window.location.reload();
    });

    function createExpenseItem(expenseType, amount, date) {
        const expenseLiElement = document.createElement('li');
        expenseLiElement.classList.add('expense-item');

        const previewArticle = document.createElement('article');
        expenseLiElement.appendChild(previewArticle);

        const expenseTypeParagraph = document.createElement('p');
        expenseTypeParagraph.textContent = `Type: ${expenseType}`;

        const amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amount}$`;

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${date}`;

        previewArticle.appendChild(expenseTypeParagraph);
        previewArticle.appendChild(amountParagraph);
        previewArticle.appendChild(dateParagraph);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');
        expenseLiElement.appendChild(buttonsDiv);

        const editButton = document.createElement('button');
        editButton.textContent = 'edit';
        editButton.classList.add('btn', 'edit');

        const okButton = document.createElement('button');
        okButton.textContent = 'ok';
        okButton.classList.add('btn', 'ok');

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(okButton);

        return expenseLiElement;
    }

}