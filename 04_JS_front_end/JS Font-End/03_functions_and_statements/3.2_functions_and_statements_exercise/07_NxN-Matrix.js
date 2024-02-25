function printMatrix(n) {
    for (i = 0; i < n; i++) {
        let currentRow = [];
        
        for (j = 0; j < n; j++) {
            currentRow.push(n);
        }
        
        console.log(currentRow.join(" "));
    }
}

printMatrix(3);
printMatrix(7);
printMatrix(2);