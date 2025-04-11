function sum(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error("Parameters must be non-empty");
  }
  
  return a + b;
}

console.log(sum(3, 5)); // Output: 8
