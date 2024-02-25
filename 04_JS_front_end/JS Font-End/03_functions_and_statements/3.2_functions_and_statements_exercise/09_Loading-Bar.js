function loadingBar(percentage) {
    if (percentage === 100) {
        console.log('100% Complete!\n[%%%%%%%%%%]')
    }
    else {
        console.log(`${percentage}% [${'%'.repeat(percentage / 10)}${'.'.repeat((100 - percentage) / 10)}]\nStill loading...`)
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);