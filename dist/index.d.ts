/**
 * Adds two numbers together.
 *
 * @param x - The first number to add.
 * @param y - The second number to add.
 * @returns The sum of `x` and `y`.
 */
export declare function add(x: number, y: number): number;
/**
 * Subtracts the second number from the first number.
 *
 * @param x - The first number.
 * @param y - The second number.
 * @returns The result of subtracting `y` from `x`.
 */
export declare function subtract(x: number, y: number): number;
/**
 * Multiplies two numbers and returns the result.
 *
 * @param x - The first number to multiply.
 * @param y - The second number to multiply.
 * @returns The product of `x` and `y`.
 */
export declare function multiply(x: number, y: number): number;
/**
 * Divides two numbers and returns the result.
 *
 * @param x - The numerator.
 * @param y - The denominator. Must not be zero.
 * @returns The result of the division.
 * @throws Will throw an error if the denominator is zero.
 */
export declare function divide(x: number, y: number): number;
/**
 * Computes the power of a number.
 *
 * @param x - The base number.
 * @param y - The exponent to raise the base to.
 * @returns The result of raising `x` to the power of `y`.
 */
export declare function power(x: number, y: number): number;
/**
 * Computes the square root of a given number.
 *
 * @param x - The number to compute the square root of.
 * @returns The square root of the given number if it is a perfect square, otherwise returns the input number.
 */
export declare function sqrt(x: number): number;
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
export declare function factorial(x: number): number;
/**
 * Returns the absolute value of a number.
 *
 * @param x - The number for which to get the absolute value.
 * @returns The absolute value of the given number.
 */
export declare function abs(x: number): number;
/**
 * Calculates the number of combinations (n choose r) for given values of n and r.
 *
 * @param n - The total number of items.
 * @param r - The number of items to choose.
 * @returns The number of possible combinations.
 */
export declare function combination(n: number, r: number): number;
/**
 * Checks if a given number is a prime number.
 *
 * @param x - The number to check for primality.
 * @returns `true` if the number is prime, otherwise `false`.
 */
export declare function isPrime(x: number): boolean;
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
export declare function isEven(x: number): boolean;
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
export declare function isOdd(x: number): boolean;
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
export declare function isPositive(x: number): boolean;
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
export declare function isNegative(x: number): boolean;
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
export declare function isZero(x: number): boolean;
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
export declare function isInteger(x: number): boolean;
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
export declare function isFloat(x: number): boolean;
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
export declare function isWhole(x: number): boolean;
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
export declare function isDecimal(x: number): boolean;
/**
 * Checks if one number is divisible by another.
 *
 * @param x - The dividend.
 * @param y - The divisor.
 * @returns `true` if `x` is divisible by `y`, otherwise `false`.
 */
export declare function isDivisible(x: number, y: number): boolean;
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
export declare function isPerfectSquare(x: number): boolean;
/**
 * Checks if a given number is a Fibonacci number.
 *
 * A number is a Fibonacci number if and only if one or both of
 * (5 * x^2 + 4) or (5 * x^2 - 4) is a perfect square.
 *
 * @param x - The number to check.
 * @returns `true` if the number is a Fibonacci number, otherwise `false`.
 */
export declare function isFibonacci(x: number): boolean;
