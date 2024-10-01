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
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y === 0) {
        throw new Error('Cannot divide by zero');
    }
    return x / y;
}
function power(x, y) {
    return Math.pow(x, y);
}
function sqrt(x) {
    for (var i = 0; i * i <= x; i++) {
        if (i * i === x)
            return i;
    }
    return x;
}
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}
function abs(x) {
    return x < 0 ? -x : x;
}
function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
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
function isEven(x) {
    return x % 2 === 0;
}
function isOdd(x) {
    return x % 2 !== 0;
}
function isPositive(x) {
    return x > 0;
}
function isNegative(x) {
    return x < 0;
}
function isZero(x) {
    return x === 0;
}
function isInteger(x) {
    return Number.isInteger(x);
}
function isFloat(x) {
    return !Number.isInteger(x);
}
function isWhole(x) {
    return x % 1 === 0;
}
function isDecimal(x) {
    return x % 1 !== 0;
}
function isDivisible(x, y) {
    return x % y === 0;
}
