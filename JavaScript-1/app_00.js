// There are 7 types of primitive datatypes in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Example of number
let x = 99;
let y = 100;
let z = x + y;

// Example of string
let firstName = "John";
let lastName = "Doe";

// Example of boolean
let isActive = true;

// Example of undefined
let myVar; // Declared but not initialized
// Example of null
let myNullVar = null; // Explicitly set to null

// Example of symbol
let mySymbol = Symbol("description"); // Unique and immutable value
// Example of BigInt    
let bigIntValue = BigInt(123456789012345678901234567890); // Large integer value

// Check datatype of variables
typeof x; // Output: "number"
typeof firstName; // Output: "string"


// OBJECTS
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any datatype.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe
// Adding a new property to an object
person.city = "New York"; // Adding a new property
// Deleting a property from an object  
delete person.age; // Deletes the 'age' property
// Iterating over object properties


// Scope of variables - var, let, and const

// example of var
var globalVar = 10; // Can be accessed anywhere
var globalVar = 15; // Re-declaring var in the same scope is allowed
{
    var globalVar = 20; // Re-declaring var in a block scope is allowed, but it affects the global variable
    console.log(globalVar); // Output: 20
}
console.log(globalVar); // Output: 20


// example of let
let blockScopedVar = 30; // Block scoped variable
//let blockScopedVar = 35;  // Re-declaring let in the same scope is not allowed, this will throw an error
{
    let blockScopedVar = 40; // This is a different variable, scoped to this block
    console.log(blockScopedVar); // Output: 40
}
console.log(blockScopedVar); // Output: 30


// example of const
const constantVar = 50; // Constant variable
{
    // const constantVar = 60; // This would throw an error because constantVar is already declared
    console.log(constantVar); // Output: 50
}



// Examples of string

let name = "John";
let greeting = "Hello, " + name + "!"; // Concatenation

console.log(greeting); // Output: Hello, John!

// STRING TEMPLATE LITERALS

// template literals are used by enclosing the string in backticks (`) instead of quotes ('' or "").
// They allow for multi-line strings

let product = "Laptop";
let price = 900;
let message = `The price of the ${product} is ${price}.`; // Using template literals for string interpolation
console.log(message); // Output: The price of the Laptop is $999.99.

let multiLineString = `This is a string
                                that spans multiple lines.`


// STRING METHODS

// 1. Non destructive methods
// These methods do not change the original string, they return a new string instead.
let str = "Hello, World!";
console.log(str.toUpperCase()); // Converts to uppercase, Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Converts to lowercase, Output: hello, world!

let str1 = "   Hello, World!   ";
str1 = str1.trim(); // Removes whitespace from both ends
console.log(str1); // Output: Hello, World!

str1.indexOf("World"); // Returns the index of 'World' in the string, Output: 7
str1.indexOf("l"); // Returns the index of the first occurrence of 'l', Output: 2
str1.lastIndexOf("l"); // Returns the index of the last occurrence of 'l', Output: 10
str1.indexOf("JavaScript"); // Returns -1 if 'JavaScript' is not found, Output: -1
str1.includes("World"); // Checks if 'World' is present in the string, Output: true

str1.replace('d','k'); // Replaces the first occurrence of 'd' with 'k', Output: Hello, Worlk!
str1.replaceAll('l','k'); // Replaces all occurrences of 'l' with 'k', Output: Hekko, Worlk!

// 2. Destructive methods
// These methods change the original string.
let str2 = "Hello, World!";
// str2 = str2.replace("World", "JavaScript"); // Replaces 'World' with 'JavaScript'

str2.substring(4); // Extracts a substring from index 4 to the end, Output: o, World!
str2.substring(0, 5); // Extracts a substring from index 0 to index 5 (exclusive), Output: Hello


// Example of number
// number can be integer, float, zero, +ve, -ve, decimal and special numbers like Infinity, NaN, etc.

let num1 = 42; // Integer
let num2 = 3.14; // Float   
let num3 = 0; // Zero
let num4 = -7; // Negative number
let num5 = Infinity; // Positive infinity
let num6 = -Infinity; // Negative infinity
let num7 = NaN; // Not a Number (e.g., result of 0/0 or Math.sqrt(-1)
let num8 = 1e6; // Scientific notation (1 million)

// Number methods
Number.MAX_SAFE_INTEGER // The maximum safe integer in JavaScript, Output: 9007199254740991
Number.MIN_SAFE_INTEGER // The minimum safe integer in JavaScript, Output: -9007199254740991
Number.isInteger(num1); // Checks if num1 is an integer, Output: true
Number.isFinite(num2); // Checks if num2 is a finite number, Output: true
Number.isNaN(num7); // Checks if num7 is NaN, Output: true

// Number conversion    
let strNum = "123.45";
let convertedNum = Number(strNum); // Converts string to number, Output: 123.45
let floatNum = parseFloat(strNum); // Converts string to float, Output: 123.45
let intNum = parseInt(strNum); // Converts string to integer, Output: 123


// Random number generation
Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
Math.floor(Math.random() * 100); // Generates a random integer between 0 and 99
Math.floor(Math.random() * 10+5); // Generates a random integer between 5 and 14


// Undefined and null
// Undefined is a type that indicates a variable has been declared but not assigned a value.
// Null is a type that indicates a variable has been explicitly set to have no value.

let undefinedVar; // This variable is declared but not initialized, so it is undefined
let nullVar = null; // This variable is explicitly set to null
