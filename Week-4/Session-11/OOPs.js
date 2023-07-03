//Inheritance
class Vehicle {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive() {
      console.log(`Driving ${this.make} ${this.model}.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
      super(make, model, year, color);
      this.numSeats = numSeats;
    }
  }
  
  class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
      super(make, model, year, color, numSeats);
      this.isAvailable = isAvailable;
    }
  }

  // Polymorphism:
  class Shape {
    calculateArea() {
      // Empty method to be overridden by subclasses
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const rectangle = new Rectangle(4, 5);
  const triangle = new Triangle(3, 6);
  const circle = new Circle(2);
  
  console.log(rectangle.calculateArea()); 
  console.log(triangle.calculateArea()); 
  console.log(circle.calculateArea());


  //section 3

  class BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      this.#balance -= amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    withdraw(amount) {
      if (this.getBalance() - amount >= 0) {
        super.withdraw(amount);
      } else {
        console.log("Withdrawal failed. Insufficient balance.");
      }
    }
  }
  
  const checking = new CheckingAccount("123456", 1000, "John Doe");
  const savings = new SavingsAccount("987654", 5000, "Jane Smith");
  
  console.log(checking.getBalance()); 
  console.log(savings.getBalance()); 
  
  checking.deposit(500);
  savings.withdraw(2000);
  
  console.log(checking.getBalance()); 
  console.log(savings.getBalance()); 
  
  savings.withdraw(4000); 
  
  console.log(savings.getBalance()); 