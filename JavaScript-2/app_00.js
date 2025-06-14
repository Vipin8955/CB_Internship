// FUNCTIONS

function greet(){
    console.log("Hello, World!");
}
greet(); // Calling the function to execute it



function add(a, b){ // a and b are parameters
    let c = a + b;
    console.log(c);
}
add(5, 10); // Calling the function with arguments 5 and 10



function sum(a, b, c){
    return a + b + c; 
}
console.log(sum(1, 2, 3)); // Calling the function and logging the result


// But if we gave wrong number of arguments, it will give NaN (Not a Number)
function sum(a, b, c){
    return a + b + c; 
}
console.log(sum(1, 2)); // This will log NaN because c is undefined

// To avoid this, we can set default values for parameters
function sum(a, b, c = 0){
    return a + b + c; 
}
console.log(sum(1, 2)); // Now this will log 3 instead of NaN

// if we gave c a value, it will override the default value
console.log(sum(1, 2, 3)); // This will log 6


// FUNCTION EXPRESSIONS are functions that are defined and assigned to a variable
// They can be anonymous or named

// Anonymous Function Expression
const square = function(n){ 
    return n * n;
}
console.log(square(5)); // This will log 25

// Named Function Expression
const cube = function cube(n){ 
    return n * n * n;
}
console.log(cube(3)); // This will log 27


// ARROW FUNCTIONS are a more concise way to write function expressions
// Arrow function with one parameter - no need for parentheses or curly braces
const squareArrow = n =>  n * n; 

// Arrow function with multiple parameters - parentheses are required
const addArrow = (a, b) => a + b;

// Arrow function with no parameters - empty parentheses are required
const greetArrow = () => console.log("Hello, World!");

// Arrow function with a multiple lines of code - curly braces are required
const sumArrow = (a, b) => {
    let c = a + b;
    return c;
};



// DEEP DIVE TO FUNCTIONS
// How is function executed? - Execution Context
// When a function is called, a new execution context is created



// HOISTING 
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase
// Variable declarations are hoisted, but not their initializations
// Function declarations are hoisted completely, including their body
// In simple terms, you can use a variable or function before it is declared in the code

console.log(a); // This will log undefined because a is hoisted but not initialized yet
var a = 100;

//let and const declarations are not hoisted in the same way as var
// console.log(b); // This will throw a ReferenceError because b is not hoisted
let b = 200; // This will not be hoisted, so you cannot use b before this line
// This is Dead temporal Zone (TDZ) - a time when the variable is in scope but not yet declared


// Function declarations are hoisted completely including their body, so you can call them before they are defined
greetHoisted(); // This will work because greetHoisted is hoisted
function greetHoisted(){
    console.log("Hello, Hoisted World!");
}

// Function expressions are not hoisted, so you cannot call them before they are defined
// fun(5); // This will throw a TypeError because fun is not hoisted 
const fun = function(n){
    console.log(n*n);
}

// Arrow functions are also not hoisted, so you cannot call them before they are defined



// HIGHER-ORDER FUNCTIONS
// Higher-order functions are functions that can take other functions as arguments or return a function as a result

// Example of a higher-order function that returns a function
function fun(){

    function innerFun(){
        console.log("Inner function called");
    }

    return innerFun; 
}

const f = fun(); // This will call fun and return innerFun
f(); // This will call innerFun and log "Inner function called" 

// Example of a higher-order function that takes a function as an argument
function multiplyByTwo(n){
    return n * 2;
}

function f(multiplyByTwo){
    const res = multiplyByTwo(5); 
    console.log(res); // This will log 10
}

f(multiplyByTwo); 



// SCOPE and LEXICAL ENVIRONMENT
// Scope is the visibility of variables and functions in different parts of the code
// There are two types of scope: global scope and local scope
// Global scope is the outermost scope, where variables and functions are accessible from anywhere in the code
// Local scope is the inner scope, where variables and functions are accessible only within that scope like inside a function or a block
// Variables declared with var are function-scoped, meaning they are accessible within the function they are declared in
// Variables declared with let and const are block-scoped, meaning they are accessible only within the block they are declared in
// Lexical environment is the context in which a function is defined, which determines the scope of variables and functions


function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); //  10 (because function scope)
}

function testLet() {
  if (true) {
    let y = 20;
  }
  // console.log(y); //  ReferenceError (block scope)
}
