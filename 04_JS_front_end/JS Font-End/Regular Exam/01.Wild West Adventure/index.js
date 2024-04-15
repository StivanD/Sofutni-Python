function solve(input) {
    let charactersCount = Number(input.shift());

    const heroesObj = {};

    const MAX_GUN_CAPACITY = 6;
    const MAX_HP = 100;

    for (let i = 0; i < charactersCount; i++) {
        const [heroName, hp, bullets] = input.shift().split(' ');

        heroesObj[heroName] = {
            hp: Number(hp),
            bullets: Math.min(Number(bullets), MAX_GUN_CAPACITY),
        };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Ride Off Into Sunset') {
        const [operation, characterName, ...args] = commandLine.split(' - ');

        switch (operation) {
            case 'FireShot': {
                const [target] = args;

                if (heroesObj[characterName].bullets <= 0) {
                    console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
                    break;
                }

                heroesObj[characterName].bullets -= 1;
                console.log(`${characterName} has successfully hit ${target} and now has ${heroesObj[characterName].bullets} bullets!`);
                break;
            }
            case 'TakeHit': {
                const [damage, attacker] = args;

                heroesObj[characterName].hp -= damage;

                if (heroesObj[characterName].hp > 0) {
                    console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${heroesObj[characterName].hp} HP!`);
                    break;
                }

                console.log(`${characterName} was gunned down by ${attacker}!`);
                delete heroesObj[characterName];
                break;
            }
            case 'Reload': {
                if (heroesObj[characterName].bullets >= MAX_GUN_CAPACITY) {
                    console.log(`${characterName}'s pistol is fully loaded!`);
                    break;
                }

                const reloadedBullets = MAX_GUN_CAPACITY - heroesObj[characterName].bullets;
                heroesObj[characterName].bullets = MAX_GUN_CAPACITY;

                console.log(`${characterName} reloaded ${reloadedBullets} bullets!`);
                break;
            }
            case 'PatchUp': {
                const [amount] = args;

                if (heroesObj[characterName].hp >= MAX_HP) {
                    console.log(`${characterName} is in full health!`);
                    break;
                }

                const recoveredAmount = Math.min(Number(amount), MAX_HP - heroesObj[characterName].hp);
                heroesObj[characterName].hp += recoveredAmount;

                console.log(`${characterName} patched up and recovered ${recoveredAmount} HP!`);
                break;
            }
        }

        commandLine = input.shift();
    }

    Object.entries(heroesObj).forEach(([name, { hp, bullets }]) => {
        console.log(`${name}\n HP: ${hp}\n Bullets: ${bullets}`);
    });
}

// solve(["2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"
// ]);

// solve(["2",
//     "Jesse 100 4",
//     "Walt 100 5",
//     "FireShot - Jesse - Bandit",
//     "TakeHit - Walt - 30 - Bandit",
//     "PatchUp - Walt - 20",
//     "Reload - Jesse",
//     "Ride Off Into Sunset"
// ]);
