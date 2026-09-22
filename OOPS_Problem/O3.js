//3. Employee and Manager Payroll System
//Create a base class Employee containing id, name, and basicSalary. Initialize them using a constructor and create a method calculateSalary() that returns the basic salary. Create a derived class Manager that adds an incentive property. Use super() to initialize inherited properties and override calculateSalary() so that a manager's total salary is calculated as basicSalary + incentive. Create objects of both classes and display their salaries.
//Concepts Covered: Inheritance, extends, super(), Constructor, Method Overriding
class Employee {
  constructor(id, name, basicSalary) {
    this.id = id;
    this.name = name;
    this.basicSalary = basicSalary;
  }

  calculateSalary() {
    return this.basicSalary;
  }
}

class Manager extends Employee {
  constructor(id, name, basicSalary, incentive) {
    super(id, name, basicSalary);
    this.incentive = incentive;
  }

  calculateSalary() {
    return this.basicSalary + this.incentive;
  }
}

// Creating objects
const emp1 = new Employee(1, "Rahul", 30000);
const mgr1 = new Manager(2, "Priya", 50000, 15000);

console.log(`${emp1.name}'s Salary: ₹${emp1.calculateSalary()}`);
console.log(`${mgr1.name}'s Salary: ₹${mgr1.calculateSalary()}`);