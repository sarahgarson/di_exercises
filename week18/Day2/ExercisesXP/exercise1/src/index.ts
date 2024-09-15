class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
      this.name = name;
      this.salary = salary;
      this.position = position;
      this.department = department;
  }

  public getEmployeeInfo(): string {
      return `Name: ${this.name}, Position: ${this.position}`;
  }

  
  public getSalary(): number {
      return this.salary;
  }

  protected getDepartment(): string {
      return this.department;
  }

  
  public updateSalary(newSalary: number): void {
      this.salary = newSalary;
  }
}


const employee1 = new Employee("John Doe", 50000, "Developer", "IT");
console.log(employee1.getEmployeeInfo());
console.log(`Salary: $${employee1.getSalary()}`);

employee1.updateSalary(55000);
console.log(`Updated Salary: $${employee1.getSalary()}`);




