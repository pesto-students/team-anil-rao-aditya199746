class Calculator {
    // add method
    add(a, b) {
      return a + b;
    }
  
    // subtract method
    subtract(a, b) {
      return a - b;
    }
  
    // multiply method
    multiply(a, b) {
      return a * b;
    }
  
    // divide method
    divide(a, b) {
      return a / b;
    }
  }
  
  // ScientificCalculator class extending Calculator
  class ScientificCalculator extends Calculator {
    // square method
    square(num) {
      return num * num;
    }
  
    // cube method
    cube(num) {
      return num * num * num;
    }
  
    // power method
    power(base, exponent) {
      return Math.pow(base, exponent);
    }
  }
  
  // Create an instance of ScientificCalculator
  const scientificCalculator = new ScientificCalculator();
  
  // Using call method to invoke the add method of Calculator class
  const sum = Calculator.prototype.add.call(scientificCalculator, 10, 5);
  console.log("Sum:", sum);
  
  // Using apply method to invoke the subtract method of Calculator class
  const difference = Calculator.prototype.subtract.apply(scientificCalculator, [10, 5]);
  console.log("Difference:", difference);
  
  // Using bind method to create a multiplyByTwo method and bind it to the scientificCalculator instance
  const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalculator, 2);
  console.log("Multiply by Two:", multiplyByTwo(5)); // Optional: Calling multiplyByTwo method with argument 5
  
  // Using bind method to create a powerOfThree method and bind it to the scientificCalculator instance
  const powerOfThree = Calculator.prototype.power.bind(scientificCalculator, 3);
  console.log("Power of Three:", powerOfThree(2));