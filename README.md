# nicemath

A simple math library for your daily math problems

## Installation

To install the module, use npm:

```sh
npm install nicemath
```
## Usage

```typescript
import { add, subtract, multiply, divide, power, sqrt, factorial, abs, combination, isPrime, isEven, isOdd, isPositive, isNegative, isZero, isInteger, isFloat, isWhole, isDecimal, isDivisible } from 'nicemath';

// Examples
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(3, 4)); // 12
console.log(divide(10, 2)); // 5
console.log(power(2, 3)); // 8
console.log(sqrt(9)); // 3
console.log(factorial(5)); // 120
console.log(abs(-5)); // 5
console.log(combination(5, 2)); // 10
console.log(isPrime(7)); // true
console.log(isEven(4)); // true
console.log(isOdd(3)); // true
console.log(isPositive(5)); // true
console.log(isNegative(-3)); // true
console.log(isZero(0)); // true
console.log(isInteger(4)); // true
console.log(isFloat(4.5)); // true
console.log(isWhole(4)); // true
console.log(isDecimal(4.5)); // true
console.log(isDivisible(10, 2)); // true
````

## Contributing

Please refer to [CONTRIBUTING](CONTRIBUTING).

## License

This project is licensed under the [MIT License](LICENSE).