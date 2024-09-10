// this is the Person object type
type Person = {
  name: string;
  age: number;
};

// the function that returns a Person object
function createPerson(name: string, age: number): Person {
  return { name, age };
}

const person1 = createPerson("Alice", 30);
console.log(person1);

