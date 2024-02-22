function solve(numbers) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    
    let collectedGold = 0;
    let days = 0;
    let firstDayOfPurchase = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        days++;
        let currentGold = numbers[i];
        
        if (days % 3 === 0) {
            currentGold *= 0.7;
        }
        
        collectedGold += currentGold * goldPrice;
        
        if (collectedGold >= bitcoinPrice && firstDayOfPurchase === 0) {
            firstDayOfPurchase = days;
        }
    }
    
    let boughtBitcoins = Math.floor(collectedGold / bitcoinPrice);
    let moneyLeft = collectedGold - (boughtBitcoins * bitcoinPrice);
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (firstDayOfPurchase) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);