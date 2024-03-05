function extract(content) {
    const para = document.getElementById(content).textContent;
    const pattern = /\(([^)]+)\)/g;
    const matches = para.matchAll(pattern);

    return [...matches].map(match => match[1]).join('; ');
}