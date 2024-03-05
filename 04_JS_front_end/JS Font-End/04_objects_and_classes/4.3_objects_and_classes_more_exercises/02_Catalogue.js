function catalogue(products) {
    let catalogueObj = {};

    products.forEach(product => {
        let [name, price] = product.split(" : ");
        let initial = name[0].toUpperCase();
        if (!catalogueObj[initial]) {
            catalogueObj[initial] = [];
        }
        catalogueObj[initial].push({ name, price: Number(price) });
    });

    let sortedInitials = Object.keys(catalogueObj).sort();

    sortedInitials.forEach(initial => {
        catalogueObj[initial].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    });

    sortedInitials.forEach(initial => {
        console.log(initial);
        catalogueObj[initial].forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    });
}

// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);

// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
// ]);