function sumEvenNumbers(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    console.log(`The sum of even numbers from ${a} to ${b} is ${sum}`);
  }
  
  // Example usage
  sumEvenNumbers(1, 10); // Output: The sum of even numbers from 1 to 10 is 30
  