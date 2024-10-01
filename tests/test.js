const { 
    add, 
    subtract, 
    multiply, 
    divide, 
    power, 
    sqrt, 
    factorial, 
    abs, 
    combination, 
    isPrime, 
    isEven, 
    isOdd, 
    isPositive, 
    isNegative, 
    isZero, 
    isInteger, 
    isFloat, 
    isWhole, 
    isDecimal, 
    isDivisible 
} = require('../dist/index');

test('Testing add', () => {
  expect(add(1, 2)).toBe(3);
});

test('Testing subtract', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('Testing multiply', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('Testing divide', () => {
    expect(divide(6, 2)).toBe(3);
});

test('Testing power', () => {
    expect(power(2, 3)).toBe(8);
});

test('Testing sqrt', () => {
    expect(sqrt(9)).toBe(3);
});

test('Testing factorial', () => {
    expect(factorial(5)).toBe(120);
});

test('Testing abs', () => {
    expect(abs(-5)).toBe(5);
});

test('Testing combination', () => {
    expect(combination(5, 2)).toBe(10);
});

test('Testing isPrime', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(10)).toBe(false);
});

test('Testing isEven', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
});

test('Testing isOdd', () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(2)).toBe(false);
});

test('Testing isPositive', () => {
    expect(isPositive(3)).toBe(true);
    expect(isPositive(-3)).toBe(false);
});

test('Testing isNegative', () => {
    expect(isNegative(-3)).toBe(true);
    expect(isNegative(3)).toBe(false);
});

test('Testing isZero', () => {
    expect(isZero(0)).toBe(true);
    expect(isZero(3)).toBe(false);
});

test('Testing isInteger', () => {
    expect(isInteger(3)).toBe(true);
    expect(isInteger(3.5)).toBe(false);
});

test('Testing isFloat', () => {
    expect(isFloat(3.5)).toBe(true);
    expect(isFloat(3)).toBe(false);
});

test('Testing isWhole', () => {
    expect(isWhole(3)).toBe(true);
    expect(isWhole(3.5)).toBe(false);
});

test('Testing isDecimal', () => {
    expect(isDecimal(3.5)).toBe(true);
    expect(isDecimal(3)).toBe(false);
});

test('Testing isDivisible', () => {
    expect(isDivisible(6, 2)).toBe(true);
    expect(isDivisible(5, 2)).toBe(false);
});