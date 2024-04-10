function loadCommits() {
    const username = document.getElementById("username").value;
    const repo = document.getElementById("repo").value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }
        })
        .then(data => {
            const commitsList = document.getElementById("commits");
            commitsList.innerHTML = "";

            data.forEach(commit => {
                const listItem = document.createElement("li");
                listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsList.appendChild(listItem);
            });
        })
        .catch(error => {
            const commitsList = document.getElementById("commits");
            commitsList.innerHTML = "";
            const listItem = document.createElement("li");
            listItem.textContent = `Error: ${error.message}`;
            commitsList.appendChild(listItem);
        });
}
