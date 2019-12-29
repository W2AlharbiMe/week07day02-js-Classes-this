
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

// classes 103
class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    swim(speed) {
        this.speed += speed;
        return `${this.name} swims with a speed of ${this.speed}.`
    }

    stop() {
        this.speed = 0;
        return `${this.name} is standing still`
    }
}

// classes 104

class Fish extends Animal {
    jump() {
        return `${this.name} jumped.`
    }
}


const nemo = new Fish('nemo')
// console.log(nemo.jump());



// LAB



class ATM {
    constructor(type) {
        this.type = type;
        this.money = 0;
        this.transactions = [];
        this.backupAccount = 100;
    }

    withdraw(amount) {
        this.money -= amount;
        this.transactions.push({
            transaction: 'withdraw',
            amount: -amount
        })

        if (this.money <= 0) {
            const dues = Math.abs(this.money);
            this.backupAccount -= dues;
            this.money += dues;
        }

    }

    deposit(amount) {
        this.money += amount;
        this.transactions.push({
            transaction: 'deposit',
            amount
        })
    }

    showBalance() {
        return `Your Balance is: ${this.money}`
    }

    showTransactions() {
        return `-----\nYour transactions history: \n${this.transactions.map(t => `${t.transaction} => ${t.amount}`).join('\n')}`
    }
}

const atm = new ATM('checking');

atm.deposit(3000)
console.log(atm.showBalance())

atm.withdraw(200)
console.log(atm.showBalance())

atm.withdraw(50)
console.log(atm.showBalance())

console.log(atm.showTransactions());

