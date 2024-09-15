class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
  }

  getProductInfo(): string {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  // Method to update price
  updatePrice(newPrice: number): void {
      this.price = newPrice;
  }
}

// Creating a new product
const product1 = new Product(1, "Laptop", 999.99);