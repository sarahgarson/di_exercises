
type Person = {
  name: string;
  age: number;
};


type Address = {
  street: string;
  city: string;
};


type PersonWithAddress = Person & Address;


const personWithAddress: PersonWithAddress = {
  name: "John Doe",
  age: 30,
  street: "123 Main St",
  city: "New York"
};

// consoling (is that a word?)the personWithAddress object
console.log(personWithAddress);


console.log("Name:", personWithAddress.name);
console.log("Age:", personWithAddress.age);
console.log("Street:", personWithAddress.street);
console.log("City:", personWithAddress.city);
