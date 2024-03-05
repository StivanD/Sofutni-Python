function sumTable() {
    const cells = Array.from(document.querySelectorAll('td'));
    let sum = 0;
    
    cells.forEach(cell => {
        const cellValue = parseFloat(cell.textContent) || 0;
        sum += cellValue;
    });
    
    document.getElementById('sum').textContent = sum.toFixed(2);
}