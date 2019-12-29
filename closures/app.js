
// first way
function addNum() {
    let x = 0;

    return function() {
        ++x;
        return x;
    }
}

const plus = addNum();

// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());


// second way
let add = (function() {
    let x = 0;
    return () => {
        x += 1;
        return x;
    }
})();

// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())





// classes 101

// const celica = {
//     model: 'toyota',
//     color: 'black',
//     fuel: 100,
//     drive() {
//         this.fuel--;
//         return 'Driving';
//     },
//     refuel() {
//         this.fuel = 100;
//         return 'fueled up' 
//     }
// };

// console.log(celica.model)
// console.log(celica.drive() + "  " + celica.fuel);
// console.log(celica.refuel());



// classes 102

class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
        this.fuel = 100;
    }

    drive() {
        this.fuel--;
        return `Current fuel is ${this.fuel}. while driving.`
    }

    refuel() {
        this.fuel = 100;
        return `Current fuel is ${this.fuel}. while refueling.`
    }
}

class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed += speed;
        return `${this.name} runs with a speed of ${this.speed}.`
    }

    stop() {
        this.speed = 0;
        return `${this.name} is standing still`
    }
}