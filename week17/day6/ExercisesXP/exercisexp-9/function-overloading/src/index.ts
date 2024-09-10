// Function overloading
function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, guest!";
    }
}

console.log(greet()); 
console.log(greet("Alice"));