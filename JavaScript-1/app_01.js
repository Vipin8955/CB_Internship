// OPERATORS

// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus (remainder of division)
let exponent = a ** b; // Exponentiation (a raised to the power of b)

// Comparison Operators
let isEqual = (a == b); // Equality (value only)
let isStrictEqual = (a === b); // Strict equality (value and datatype)
let isNotEqual = (a != b); // Inequality (value only)
let isStrictNotEqual = (a !== b); // Strict inequality (value and datatype)
let isGreaterThan = (a > b); // Greater than
let isLessThan = (a < b); // Less than
let isGreaterThanOrEqual = (a >= b); // Greater than or equal to
let isLessThanOrEqual = (a <= b); // Less than or equal to

// Logical Operators
let x = true;
let y = false;
let andOperation = (x && y); // Logical AND - returns true if both x and y are true
let orOperation = (x || y); // Logical OR - returns true if either x or y is true
let notOperation = !x; // Logical NOT - returns the opposite of x

// Assignment Operators
let c = 20;
c += 5; // c = c + 5 (Addition assignment)
c -= 5; // c = c - 5 (Subtraction assignment)
c *= 2; // c = c * 2 (Multiplication assignment)
c /= 2; // c = c / 2 (Division assignment)
c %= 3; // c = c % 3 (Modulus assignment)
c **= 2; // c = c ** 2 (Exponentiation assignment)

// unary operator
let d = 5;
let e = 10;
console.log(d++); // 5 - because it is post increment (first it will output the value then increment)
console.log(d); // 6 - because increment has done in previous line

console.log(++e); // 11 - because it is pre increment (first it will increment then output value)


// DECISION MAKING

// if statement
let n = 10;
let m = 5;
if(n > m){
    console.log("n is greater than m");
}

// if - esle statement
let age = 19;
if(age >= 18){
    console.log("Eligible to vote.")
}
else{
    console.log("Not eligible to vote.");
}

// if else-if statement
if(age <18){
    console.log("junior");
}
else if(age >60){
    console.log("senior");
}
else{
    console.log("middle");
}

// ternary operator
let result = age > 18 ? "adult":"not adult";
console.log(result);



// LOOPS

// for loop
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// break and continue statements in loops
// The break statement exits the loop immediately
// The continue statement skips the current iteration and moves to the next one
for(let num = 1; num <= 10; num++){

    if(num === 7) break; // Breaks the loop when num is 7
    if(num % 2 === 0) continue; // Skips the even numbers

    console.log(num);
}

// while loop
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// for...of loop
// Used to iterate over iterable objects like arrays, strings, etc.
let str = "Hello";
for(let char of str){
    console.log(char); // Outputs each character in the string
}

// for...in loop
// Used to iterate over the properties of an object
let obj = {
    name: "Alice", 
    age: 25, 
    city: "New York"
};

for(let key in obj){
    console.log(`${key}: ${obj[key]}`); // Outputs each key-value pair in the object
}

// do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while(j <= 5); // Executes at least once, even if the condition is false initially
