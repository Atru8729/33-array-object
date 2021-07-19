class Person {
    constructor(data) {
        this.data = data;
    }
    fullName() {
        console.log(`${this.data.firstname} ${this.data.lastname}`);
    }
    intro() {
        console.log(`Hi, my name is ${this.data.firstname} and I am ${this.data.age} years old.`);
    }
    firstChild() {
        const child = this.data.children[0];
        console.log(`${child.firstname} ${child.lastname} (${child.age})`);
    }
    lastChild() {
        const child = this.data.children[2];
        console.log(`${child.firstname} ${child.lastname} (${child.age})`);
    }
    firstCar() {
        const car = this.data.cars[0];
        console.log(`${car.brand} ${car.model} (${car.color})`);
    }
    lastCar() {
        const car = this.data.cars[2];
        console.log(`${car.brand} ${car.model} (${car.color})`);
    }
}

module.exports = Person;