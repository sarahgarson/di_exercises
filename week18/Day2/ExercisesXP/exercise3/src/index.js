"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "Some generic animal sound";
    }
}
class Dog extends Animal {
    makeSound() {
        return "bark";
    }
}
const myDog = new Dog("Buddy");
//in this one we are calling the makeSound method from the Animal class
console.log(`${myDog.name} says: ${myDog.makeSound()}`);
