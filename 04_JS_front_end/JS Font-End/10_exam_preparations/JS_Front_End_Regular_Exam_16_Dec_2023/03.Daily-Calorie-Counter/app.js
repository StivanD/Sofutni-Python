const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadMealsButton = document.getElementById('load-meals');
const addMealButton = document.getElementById('add-meal');
const editMealButton = document.getElementById('edit-meal');

const mealsList = document.getElementById('list');
const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');

let currentMealId = null;

const loadMeals = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    mealsList.innerHTML = '';

    for (const meal of Object.values(data)) {
        const changeButton = document.createElement('button');
        changeButton.classList.add('change-meal');
        changeButton.textContent = 'Change';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-meal');
        deleteButton.textContent = 'Delete';

        const mealButtonsDiv = document.createElement('div');
        mealButtonsDiv.id = 'meal-buttons';

        mealButtonsDiv.appendChild(changeButton);
        mealButtonsDiv.appendChild(deleteButton);

        const foodH2Element = document.createElement('h2');
        foodH2Element.textContent = meal.food;

        const timeH3Element = document.createElement('h3');
        timeH3Element.textContent = meal.time;

        const caloriesH3Element = document.createElement('h3');
        caloriesH3Element.textContent = meal.calories;

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('meal');
        mealDiv.appendChild(foodH2Element);
        mealDiv.appendChild(timeH3Element);
        mealDiv.appendChild(caloriesH3Element);
        mealDiv.appendChild(mealButtonsDiv);

        mealsList.appendChild(mealDiv);

        changeButton.addEventListener('click', () => {
            currentMealId = meal._id;

            foodInput.value = meal.food;
            timeInput.value = meal.time;
            caloriesInput.value = meal.calories;

            editMealButton.removeAttribute('disabled');
            addMealButton.setAttribute('disabled', 'disabled');

            mealDiv.remove();
        });

        deleteButton.addEventListener('click', async () => {
            const response = await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE'
            });
            
            mealDiv.remove();
        });
    }
};

loadMealsButton.addEventListener('click', loadMeals);

editMealButton.addEventListener('click', async () => {
    const { food, calories, time } = getInputData();

    const response = await fetch(`${baseUrl}/${currentMealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: currentMealId,
            food,
            calories,
            time,
        })
    });

    if (!response.ok) {
        return;
    }

    loadMeals();

    editMealButton.setAttribute('disabled', 'disabled');
    addMealButton.removeAttribute('disabled');

    currentMealId = null;

    clearInputData();
});

addMealButton.addEventListener('click', async () => {
    const newMeal = getInputData();

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newMeal),
    });

    if (!response.ok) {
        return;
    }
    
    clearInputData();
    
    await loadMeals();

})

function getInputData() {
    const food = foodInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    return { food, time, calories };
}

function clearInputData() {
    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';
}