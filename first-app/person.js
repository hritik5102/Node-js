//example - 1
// const person = {
//     name: "harry",
//     age: 12
// }

// when we want to use that module some where else 

// module.exports = person;
// -------------------------------------------------------
// example -2 

class Client {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`hii ${this.name} and i'm ${this.age}`);
    }
}

module.exports = Client;