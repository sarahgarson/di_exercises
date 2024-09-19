
interface Lengthwise {
  length: number;
}


function logLength<T extends Lengthwise>(arg: T): void {
  console.log(`Length: ${arg.length}`);
}


logLength("Hello, TypeScript!"); 
logLength([1, 2, 3, 4, 5]);
logLength({ length: 10 }); 


// Custom types
class CustomList<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get length(): number {
    return this.items.length;
  }
}

const numberList = new CustomList<number>();
numberList.add(1);
numberList.add(2);
numberList.add(3);
logLength(numberList); 


function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age")); 
