"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.power = power;
exports.sqrt = sqrt;
exports.factorial = factorial;
exports.abs = abs;
exports.combination = combination;
exports.isPrime = isPrime;
exports.isEven = isEven;
exports.isOdd = isOdd;
exports.isPositive = isPositive;
exports.isNegative = isNegative;
exports.isZero = isZero;
exports.isInteger = isInteger;
exports.isFloat = isFloat;
exports.isWhole = isWhole;
exports.isDecimal = isDecimal;
exports.isDivisible = isDivisible;
exports.isPerfectSquare = isPerfectSquare;
exports.isFibonacci = isFibonacci;
/**
 * Adds two numbers together.
 *
 * @param x - The first number to add.
 * @param y - The second number to add.
 * @returns The sum of `x` and `y`.
 */
function add(x, y) {
    return x + y;
}
/**
 * Subtracts the second number from the first number.
 *
 * @param x - The first number.
 * @param y - The second number.
 * @returns The result of subtracting `y` from `x`.
 */
function subtract(x, y) {
    return x - y;
}
/**
 * Multiplies two numbers and returns the result.
 *
 * @param x - The first number to multiply.
 * @param y - The second number to multiply.
 * @returns The product of `x` and `y`.
 */
function multiply(x, y) {
    return x * y;
}
/**
 * Divides two numbers and returns the result.
 *
 * @param x - The numerator.
 * @param y - The denominator. Must not be zero.
 * @returns The result of the division.
 * @throws Will throw an error if the denominator is zero.
 */
function divide(x, y) {
    if (y === 0) {
        throw new Error('Cannot divide by zero');
    }
    return x / y;
}
/**
 * Computes the power of a number.
 *
 * @param x - The base number.
 * @param y - The exponent to raise the base to.
 * @returns The result of raising `x` to the power of `y`.
 */
function power(x, y) {
    return Math.pow(x, y);
}
/**
 * Computes the square root of a given number.
 *
 * @param x - The number to compute the square root of.
 * @returns The square root of the given number if it is a perfect square, otherwise returns the input number.
 */
function sqrt(x) {
    for (var i = 0; i * i <= x; i++) {
        if (i * i === x)
            return i;
    }
    return x;
}
/**
 * Computes the factorial of a given number.
 *
 * @param x - The number to compute the factorial of. Must be a non-negative integer.
 * @returns The factorial of the given number.
 *
 * @example
 * ```typescript
 * factorial(5); // returns 120
 * factorial(0); // returns 1
 * ```
 */
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}
/**
 * Returns the absolute value of a number.
 *
 * @param x - The number for which to get the absolute value.
 * @returns The absolute value of the given number.
 */
function abs(x) {
    return x < 0 ? -x : x;
}
/**
 * Calculates the number of combinations (n choose r) for given values of n and r.
 *
 * @param n - The total number of items.
 * @param r - The number of items to choose.
 * @returns The number of possible combinations.
 */
function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
/**
 * Checks if a given number is a prime number.
 *
 * @param x - The number to check for primality.
 * @returns `true` if the number is prime, otherwise `false`.
 */
function isPrime(x) {
    if (x <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
/**
 * Determines whether a given number is even.
 *
 * An even number is an integer that is exactly divisible by 2.
 *
 * @param x - The number to be checked. Must be an integer.
 * @returns true if the number is even, false otherwise.
 *
 * @example
 * ```typescript
 * isEven(4); // returns true
 * isEven(5); // returns false
 * ```
 */
function isEven(x) {
    return x % 2 === 0;
}
/**
 * Determines whether a given number is odd.
 *
 * An odd number is an integer that is not evenly divisible by 2.
 *
 * @param x - The number to be checked. Must be an integer.
 * @returns true if the number is odd, false otherwise.
 *
 * @example
 * ```typescript
 * isOdd(3); // returns true
 * isOdd(4); // returns false
 * ```
 */
function isOdd(x) {
    return x % 2 !== 0;
}
/**
 * Determines whether a given number is positive.
 *
 * A positive number is greater than zero.
 *
 * @param x - The number to be checked.
 * @returns true if the number is positive, false otherwise.
 *
 * @example
 * ```typescript
 * isPositive(5); // returns true
 * isPositive(-3); // returns false
 * isPositive(0); // returns false
 * ```
 */
function isPositive(x) {
    return x > 0;
}
/**
 * Determines whether a given number is negative.
 *
 * A negative number is less than zero.
 *
 * @param x - The number to be checked.
 * @returns true if the number is negative, false otherwise.
 *
 * @example
 * ```typescript
 * isNegative(-5); // returns true
 * isNegative(3); // returns false
 * isNegative(0); // returns false
 * ```
 */
function isNegative(x) {
    return x < 0;
}
/**
 * Determines whether a given number is zero.
 *
 * A number is considered zero if it is equal to 0.
 *
 * @param x - The number to be checked.
 * @returns true if the number is zero, false otherwise.
 *
 * @example
 * ```typescript
 * isZero(0); // returns true
 * isZero(1); // returns false
 * isZero(-1); // returns false
 * ```
 */
function isZero(x) {
    return x === 0;
}
/**
 * Determines whether a given number is an integer.
 *
 * An integer is a whole number that does not have a fractional part.
 *
 * @param x - The number to be checked.
 * @returns true if the number is an integer, false otherwise.
 *
 * @example
 * ```typescript
 * isInteger(4); // returns true
 * isInteger(4.5); // returns false
 * isInteger(-3); // returns true
 * ```
 */
function isInteger(x) {
    return Number.isInteger(x);
}
/**
 * Determines whether a given number is a floating-point number.
 *
 * A floating-point number is any number that is not an integer, meaning it has a fractional part.
 *
 * @param x - The number to be checked.
 * @returns true if the number is a float, false otherwise.
 *
 * @example
 * ```typescript
 * isFloat(4.5); // returns true
 * isFloat(3); // returns false
 * isFloat(-1.2); // returns true
 * ```
 */
function isFloat(x) {
    return !Number.isInteger(x);
}
/**
 * Determines whether a given number is a whole number.
 *
 * A whole number is a non-negative integer, including zero.
 *
 * @param x - The number to be checked.
 * @returns true if the number is a whole number, false otherwise.
 *
 * @example
 * ```typescript
 * isWhole(5); // returns true
 * isWhole(0); // returns true
 * isWhole(3.2); // returns false
 * isWhole(-1); // returns false
 * ```
 */
function isWhole(x) {
    return x % 1 === 0;
}
/**
 * Determines whether a given number is a decimal (floating-point) number.
 *
 * A decimal number is any number that is not a whole number, meaning it has a fractional part.
 *
 * @param x - The number to be checked.
 * @returns true if the number is a decimal, false otherwise.
 *
 * @example
 * ```typescript
 * isDecimal(4.5); // returns true
 * isDecimal(3); // returns false
 * isDecimal(-1.2); // returns true
 * ```
 */
function isDecimal(x) {
    return x % 1 !== 0;
}
/**
 * Checks if one number is divisible by another.
 *
 * @param x - The dividend.
 * @param y - The divisor.
 * @returns `true` if `x` is divisible by `y`, otherwise `false`.
 */
function isDivisible(x, y) {
    return x % y === 0;
}
/**
 * Determines whether a given number is a perfect square.
 *
 * A perfect square is an integer that is the square of another integer.
 *
 * @param x - The number to be checked. Must be a non-negative integer.
 * @returns true if the number is a perfect square, false otherwise.
 *
 * @example
 * ```typescript
 * isPerfectSquare(4); // returns true
 * isPerfectSquare(9); // returns true
 * isPerfectSquare(7); // returns false
 * isPerfectSquare(0); // returns true
 * ```
 */
function isPerfectSquare(x) {
    return Math.sqrt(x) % 1 === 0;
}
/**
 * Checks if a given number is a Fibonacci number.
 *
 * A number is a Fibonacci number if and only if one or both of
 * (5 * x^2 + 4) or (5 * x^2 - 4) is a perfect square.
 *
 * @param x - The number to check.
 * @returns `true` if the number is a Fibonacci number, otherwise `false`.
 */
function isFibonacci(x) {
    return isPerfectSquare(5 * x * x + 4) || isPerfectSquare(5 * x * x - 4);
}
