class Animal {
  constructor(public name: string) {}

  makeSound(): string {
      return "Some generic animal sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
      return "bark";
  }
}

const myDog = new Dog("Buddy");

//in this one we are calling the makeSound method from the Animal class
console.log(`${myDog.name} says: ${myDog.makeSound()}`);
