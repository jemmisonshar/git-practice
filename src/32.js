function multiply(x: number, y: number): number {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error("Both inputs must be integers.");
  }
  
  const result = x * y;
  return result;
}
