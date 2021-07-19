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
    apartmentPrice() {
        const apartment = this.data.adress;
        console.log(`${this.data.firstname} has an apartment for ${apartment.price} ${apartment.currency}.`);
    }
    children() {
        const fullName = `${this.data.firstname} ${this.data.lastname}`;
        console.log(`This is a children of ${fullName}:`);
        let count = 0;
        for (let i = 0; i < this.data.children.length; i++) {
            const child = this.data.children[i];
            count++;
            console.log(`${count}. ${child.firstname} ${child.lastname} (${child.age})`);
        }
    }
    aliveChildren() {
        const fullName = `${this.data.firstname} ${this.data.lastname}`;
        let count = 0;
        for (let i = 0; i < this.data.children.length; i++) {
            const child = this.data.children[i];
            if (child.alive === true) {
                count++;
            }
        }
        console.log(`${fullName} has only ${count} children alive`);
    }
    autopark() {
        console.log(`This is ${this.data.firstname} cars:`);
        let count = 0;
        for (let i = 0; i < this.data.cars.length; i++) {
            const car = this.data.cars[i];
            count++;
            console.log(`${count}. ${car.brand} ${car.model} (${car.color})`);
        }
    }
    wherePersonLive() {
        const adresas = this.data.adress;
        console.log(`${this.data.firstname} is living at ${adresas.city} ${adresas.street} ${adresas.houseNumber}`);
    }
}

module.exports = Person;