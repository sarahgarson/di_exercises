function processInput(input: number | string | boolean): number | string | boolean {
  if (typeof input === "number") {
      return input * input;
  } else if (typeof input === "string") {
      return input.toUpperCase();
  } else if (typeof input === "boolean") {
      return !input;
  } else {
      // This else is technically not needed due to the type guard
      // but it's good to include it for runtime safety.
      throw new Error("Invalid input type");
  }
}

// Test the function with different input types
console.log(processInput(5));
console.log(processInput("hello")); 
console.log(processInput(true));
console.log(processInput(false));




