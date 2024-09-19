
let someValue: any = "Hello, TypeScript!";


let strLength: number = (someValue as string).length;

console.log(`The length of the string is: ${strLength}`);


let alternativeStrLength: number = (<string>someValue).length;

console.log(`The length of the string (alternative syntax): ${alternativeStrLength}`);


someValue = 42;
console.log(`someValue can be reassigned to a number: ${someValue}`);

// Type assertion vs type casting here
let definitelyAString: string = "I am definitely a string";
let stringLength: number = definitelyAString.length;

console.log(`Length of definitelyAString: ${stringLength}`);

