function loadRepos() {
	const username = document.getElementById("username").value;
	const reposList = document.getElementById("repos");

	reposList.innerHTML = "";

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			data.forEach(repo => {
				const listItem = document.createElement("li");
				const link = document.createElement("a");
				link.href = repo.html_url;
				link.textContent = repo.full_name;
				listItem.appendChild(link);
				reposList.appendChild(listItem);
			});
		})
		.catch(error => {
			const listItem = document.createElement("li");
			listItem.textContent = `${error.message}`;
			reposList.appendChild(listItem);
		});
}
