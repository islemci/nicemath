export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

export function multiply(x: number, y: number): number {
    return x * y;
}

export function divide(x: number, y: number): number {
    if (y === 0) {
        throw new Error('Cannot divide by zero');
    }
    return x / y;
}

export function power(x: number, y: number): number {
    return x ** y;
}

export function sqrt(x: number): number {
    for (var i = 0; i * i <= x; i++) {
        if (i * i === x)
            return i;
   }
   return x;
}

export function factorial(x: number): number {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

export function abs(x: number): number {
    return x < 0 ? -x : x;
}

export function combination(n: number, r: number): number {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

export function isPrime(x: number): boolean {
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

export function isEven(x: number): boolean {
    return x % 2 === 0;
}

export function isOdd(x: number): boolean {
    return x % 2 !== 0;
}

export function isPositive(x: number): boolean {
    return x > 0;
}

export function isNegative(x: number): boolean {
    return x < 0;
}

export function isZero(x: number): boolean {
    return x === 0;
}

export function isInteger(x: number): boolean {
    return Number.isInteger(x);
}

export function isFloat(x: number): boolean {
    return !Number.isInteger(x);
}

export function isWhole(x: number): boolean {
    return x % 1 === 0;
}

export function isDecimal(x: number): boolean {
    return x % 1 !== 0;
}

export function isDivisible(x: number, y: number): boolean {
    return x % y === 0;
}