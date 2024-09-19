
interface Stringable {
  toString(): string;
}


function formatInput<T extends Stringable>(input: T): string {
//making sure thi s is set a string
  const stringValue = input as unknown as string;
  return `Formatted: ${stringValue.toUpperCase()}`;
}

// Test cases
console.log(formatInput("hello"))


// Custom class exampless 
class Person {
  constructor(public name: string, public age: number) {}

  toString(): string {
    return `${this.name} (${this.age} years old)`;
  }
}

const person = new Person("Alice", 30);
console.log(formatInput(person));



