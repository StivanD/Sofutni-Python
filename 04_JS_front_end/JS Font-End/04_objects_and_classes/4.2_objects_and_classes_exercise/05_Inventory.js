function heroesRegister(heroesInput) {
    let heroesArr = [];
    
    for (let hero of heroesInput) {
        let [name, level, items] = hero.split(' / ');
        
        heroesArr.push({
            'Hero': name,
            'level': Number(level),
            'Items': items
        });
    }
    
    heroesArr.sort((a, b) => {
        return a.level - b.level
    });
    
    for (let hero of heroesArr) {
        console.log(`Hero: ${hero['Hero']}\nlevel => ${hero['level']}\nitems => ${hero['Items']}`);
    }
}

heroesRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

heroesRegister([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);