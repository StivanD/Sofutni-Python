function cats(catsData) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for (let data of catsData) {
        let [name, age] = data.split(' ');
        currentCat = new Cat(name, age);
        currentCat.meow();
    }
}

// cats(['Mellow 2', 'Tom 5']);
// cats(['Candy 1', 'Poppy 3', 'Nyx 2']);