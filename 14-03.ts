// 14. Overloaded Calculator
// Create a class Calculator with a single method calculate:
// • the method should take an operation parameter with possible values 'power' | 'log' | 'add' | 'subtract' |
// 'multiply' | 'divide'
// • and up to 4 additional number parameters with which to perform the operation, the number of parameters
// is based on the operation
// o if the operation is power or log – allow exactly 2 number parameters
// o if the operation is add, subtract, multiply or divide allow between 2 and 4 number parameters
// • The operations themselves should function as expected:
// o power a b => a
// b
// o log a b => logba
// o add a b c d => a + b + c + d
// o subtract a b c d => a - b - c - d
// o multiply a b c d => a * b * c * d
// o divide a b c d => a / b / c / d
// • Hint: You should use method overloading

class Calculator {
    public calculate(operation: 'power' | 'log', numA: number, num2: number): number
    public calculate(operation: 'add' | 'subtract' | 'multiply' | 'divide', numA: number, numB: number, numC?: number, numD?: number): number

    public calculate(operation: 'power' | 'log' | 'add' | 'subtract' | 'multiply' | 'divide', numA: number, numB: number, numC?: number, numD?: number): number {
        const validNums = [numA, numB, numC, numD].filter(n => n !== undefined);

        switch (operation) {
            case 'power': return Math.pow(numA, numB);
            case 'log': return Math.log(numA) / Math.log(numB);
            case 'add': return validNums.reduce((acc, curValue) => acc + curValue);
            case 'multiply': return validNums.reduce((acc, curValue) => acc * curValue);
            case 'subtract': return validNums.reduce((acc, curValue) => acc - curValue);
            case 'divide': return validNums.reduce((acc, curValue) => acc / curValue);
        }
    }
}

const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));

// const calc = new Calculator();
// console.log(calc.calculate('power', 2, 3, 2));
// console.log(calc.calculate('add', 2));
// console.log(calc.calculate('log', 2, 3, 4, 5));
// console.log(calc.calculate('multiply', 2, 3, 4, 5, 6));