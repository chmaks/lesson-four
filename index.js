/**
 * Here we look at Objects, inheritance, and all that jazz
 */
(function() {
    //arrays

    //forEach, map, reduce

    var a = [1, 2, 3, 4, 5];

    console.warn('forEach');
    a.forEach(function(val, idx) {
        console.log(idx + '=> ' + val);
    });

    console.warn('map');
    var mappedA = a.map(function(val) {
        return val * 2;
    });

    console.log(mappedA);

    console.warn('reduce');
    var reducedA = a.reduce(function(memo, val) {
        return memo + val;
    }, 0);

    console.log(reducedA);

    console.warn('combined');
    var mappedAndReduced = a.map(function(val) {
        return val * 2;
    }).reduce(function(memo, val) {
        return memo + val;
    }, 0);

    console.log(mappedAndReduced);

    console.warn('animals');
    var animals = getAnimals();
    animals.forEach(function(animal) {
        console.log(animal.name);
    });

    function showAnimal(animal) {
        console.log(animal.name + ' is ' + animal.age + ' years old, weight:' + animal.age);
    }

    console.warn('showAnimal');
    animals.forEach(showAnimal);

    console.warn('Old animals');
    var oldAnimals = animals.filter(function(animal) {
        return animal.age > 3;
    });

    oldAnimals.forEach(showAnimal);

    function ageFilter(age) {
        return function(animal) {
            return animal.age > age;
        };
    }

    console.warn('age filter');
    animals.filter(ageFilter(2)).forEach(showAnimal);

    function customFilter(field, min) {
        return function(animal) {
            return animal[field] > min;
        };
    }

    console.warn('custom animals');
    animals.filter(customFilter('height', 50)).forEach(showAnimal);

    console.warn('Cats');
    animals.filter(function(animal) {
        return animal instanceof Cat;
    }).forEach(showAnimal);

    console.warn('Animal names');
    animals.map(function(animal) {
        return animal.name;
    }).forEach(function(name) {
        console.log(name);
    });

    console.warn('Change');
    animals.filter(function(animal) {
        return animal instanceof Cat;
    }).map(function(animal) {
        return new Dog(animal.name, animal.age, animal.weight, animal.height, 100);
    }).forEach(showAnimal);


    function getAnimals() {
        return [
            new Animal('Jim', 15, 100, 90),
            new Cat('Spot', 1, 20, 30, 'grey'),
            new Cat('Fluffy', 2, 20, 30, 'red'),
            new Cat('Tails', 3, 20, 30, 'black'),
            new Dog('Finn', 5, 85, 100, 50),
            new Dog('Cooper', 5, 85, 100, 50),
            new Dog('Toby', 5, 85, 100, 50)
        ];
    }

    function Animal(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    function Cat(name, age, weight, height, color) {
        Animal.apply(this, arguments);
        this.color = color;
        this.meow = function() {
            console.log('meowwww');
        };
    }
    Cat.prototype = Object.create(Animal.prototype);

    function Dog(name, age, weight, height, tailLength) {
        Animal.apply(this, arguments);
        this.tailLength = tailLength;
        this.woof = function() {
            console.log('woof');
        };
    }
    Dog.prototype = Object.create(Animal.prototype);


})();