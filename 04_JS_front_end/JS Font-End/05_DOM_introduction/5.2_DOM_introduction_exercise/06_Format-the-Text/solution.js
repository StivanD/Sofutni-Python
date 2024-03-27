function solve() {
  const outputElement = document.getElementById('output');
  const textareaElement = document.getElementById('input');
  
  const text = textareaElement.value.trim();

  const sentences = text.split('.').filter(sentence => sentence.trim() !== '');

  const result = [];

  for (let i = 0; i < sentences.length; i += 3) {
    result.push(sentences.slice(i, i + 3).join('. ') + '.');
  }

  outputElement.innerHTML = result.map(sentence => `<p>${sentence}</p>`).join('\n');
}
