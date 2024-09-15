class Calculator {
  static add(a: number, b: number): number {
      return a + b;
  }

  static subtract(a: number, b: number): number {
      return a - b;
  }
}


console.log("Addition:", Calculator.add(5, 3));
console.log("Subtraction:", Calculator.subtract(10, 4));
