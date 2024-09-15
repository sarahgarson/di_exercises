"use strict";
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
    getSalary() {
        return this.salary;
    }
    getDepartment() {
        return this.department;
    }
    updateSalary(newSalary) {
        this.salary = newSalary;
    }
}
const employee1 = new Employee("John Doe", 50000, "Developer", "IT");
console.log(employee1.getEmployeeInfo());
console.log(`Salary: $${employee1.getSalary()}`);
employee1.updateSalary(55000);
console.log(`Updated Salary: $${employee1.getSalary()}`);
