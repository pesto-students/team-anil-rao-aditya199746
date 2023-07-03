//obj
const person = {
    _name: "John",
    _age: undefined,
    _email: "john@example.com",
    
    // Getter for name property
    get name() {
      return this._name;
    },
    
    // Getter for email property
    get email() {
      return this._email;
    },
    
    // Setter for age property
    set age(value) {
      this._age = value;
    },
    
    // Getter for age property
    getAge() {
      return this._age;
    },
    
    // Setter for age property
    setAge(age) {
      this._age = age;
    }
  };
  
  person.name = "Jane";
  console.log(person.name); 
  
  person.age = 25; 
  console.log(person.getAge()); 
  
  person.setAge(30); 
  console.log(person.getAge());

//Proto
  function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
  
  function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.getDetails = function() {
    const vehicleDetails = Vehicle.prototype.getDetails.call(this);
    return `${vehicleDetails}, Doors: ${this.numDoors}`;
  }
  
  const vehicle = new Vehicle("Toyota", "Camry", 2021);
  const car = new Car("Honda", "Accord", 2022, 4);
  
  console.log(vehicle.getDetails());
  console.log(car.getDetails());