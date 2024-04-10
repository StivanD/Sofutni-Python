function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const descriptionsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';

    const selectionElement = document.getElementById('main');

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data)
                .forEach((article) => {
                    const accordionDiv = document.createElement('div');
                    accordionDiv.classList.add('accordion');

                    const headDiv = document.createElement('div');
                    headDiv.classList.add('head');

                    const headSpan = document.createElement('span');
                    headSpan.textContent = article.title;
                    headDiv.appendChild(headSpan);

                    const extraDiv = document.createElement('div');
                    extraDiv.classList.add('extra');

                    const extraDivParagraph = document.createElement('p');
                    extraDiv.appendChild(extraDivParagraph);

                    accordionDiv.appendChild(extraDiv);

                    const headButton = document.createElement('button');
                    headButton.id = article._id;
                    headButton.classList.add('button');
                    headButton.textContent = 'More';

                    headButton.addEventListener('click', () => {
                        extraDiv.style.display = extraDiv.style.display === 'block' ? 'none' : 'block';
                        headButton.textContent = headButton.textContent === 'More' ? 'Less' : 'More';
                    });

                    headDiv.appendChild(headButton);
                    accordionDiv.appendChild(headDiv);
                    accordionDiv.appendChild(extraDiv);
                    selectionElement.appendChild(accordionDiv);

                    fetch(`${descriptionsUrl}/${article._id}`)
                        .then(res => res.json())
                        .then(articlesData => {
                            extraDivParagraph.textContent = articlesData.content;
                        });
                });
        });
}

solution();