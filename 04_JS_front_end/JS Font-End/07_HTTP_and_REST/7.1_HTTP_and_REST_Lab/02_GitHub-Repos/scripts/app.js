function loadRepos() {
    const baseUrl = 'https://api.github.com/users/testnakov/repos';
    
    const resultDiv = document.getElementById('res');
    
    fetch(baseUrl)
        .then(res => res.text())
        .then(data => {
            resultDiv.textContent = '';
            
            resultDiv.textContent = data;
        })
}