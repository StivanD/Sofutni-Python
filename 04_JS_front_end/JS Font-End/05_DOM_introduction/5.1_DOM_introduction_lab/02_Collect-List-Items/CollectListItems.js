function extractText() {
    let textarea = document.querySelector('#result');
    textarea.value = [...document.querySelectorAll('ul#items li')].map(node => node.textContent).join('\n');
}
