function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById("naming-convention").value;

  let flag = false;

  if (currentCase === 'Pascal Case') {
    input = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
  else if (currentCase === 'Camel Case') {
    let words = input.split(' ');
    input = words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
  else {
    flag = true;
  }

  if (flag) {
    document.getElementById('result').textContent = 'Error!';
  }
  else {
    document.getElementById('result').textContent = input;
  }
}
