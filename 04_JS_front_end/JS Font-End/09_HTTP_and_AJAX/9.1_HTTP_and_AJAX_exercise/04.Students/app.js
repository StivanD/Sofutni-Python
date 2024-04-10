function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const studentsTBody = document.querySelector('#results tbody');
    const submitButton = document.getElementById('submit');
    
    submitButton.addEventListener('click', () => {
       const firstNameInput = document.querySelector('input[name=firstName]');
       const lastNameInput = document.querySelector('input[name=lastName]');
       const facultyNumberInput = document.querySelector('input[name=facultyNumber]');
       const gradeInput = document.querySelector('input[name=grade]');
       
       const newStudent = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        facultyNumber: facultyNumberInput.value,
        grade: gradeInput.value,
       };
       
       fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newStudent),
       })
            .then(res => res.json())
            .then(data => studentsTBody.appendChild(createStudentElement(data)))
            
            firstNameInput.value = '';
            lastNameInput.value = '';
            facultyNumberInput.value = '';
            gradeInputfirstNameInput.value = '';
    });
    
    fetch(baseUrl)
        .then(res => res.json())
        .then(data =>
            Object.values(data)
                .forEach(student => studentsTBody.appendChild(createStudentElement(student)))
        );

    function createStudentElement(student) {
        const trElement = document.createElement('tr');

        const createRowData = value => {
            const tdElement = document.createElement('td');
            tdElement.textContent = value;

            return tdElement;
        }

        trElement.appendChild(createRowData(student.firstName));
        trElement.appendChild(createRowData(student.lastName));
        trElement.appendChild(createRowData(student.facultyNumber));
        trElement.appendChild(createRowData(student.grade));

        return trElement;
    }
}

attachEvents();