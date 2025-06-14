// JSON - JavaScript Object Notation
// It is a format through which we can transfer data over the web
// It looks like a JavaScript object, but it's actually just a string when in JSON format

let obj = {
    a: 'hello',
    b: 20,
    c: true,
    d: [1,2,3,4,5],
    e: {
        'dance' : 'salsa'
    }
}

// Converting JavaScript object to JSON string (serialization)
// This is useful when sending data to a server (e.g., via HTTP requests)
let jsonObj = JSON.stringify(obj);
console.log(jsonObj);

// Converting JSON string back to JavaScript object (deserialization)
// This is useful when receiving data from a server (like from an API)
let backToObj = JSON.parse(jsonObj);
console.log(backToObj);


//❌ Invalid JSON Example:
let badJSON = {
    name: "Ayush",          //  comments not allowed in actual JSON data
    age: undefined,         //  undefined not allowed
    greet: function() {}    //  functions not allowed
};

//✅ Valid JSON Example (as a string):
let validJSON = `{
    "name": "Ayush",
    "age": 21,
    "isStudent": true,
    "languages": ["JavaScript", "Java"],
    "address": { "city": "Delhi", "zip": "110001" }
}`;

let parsedValidJSON = JSON.parse(validJSON);
console.log(parsedValidJSON.name); // Ayush




// CURRY FUNCTION - aka function currying
// Currying is the technique of transforming a function with multiple arguments into a series of functions
// Each of those functions takes one argument and returns another function, until all arguments are provided
// Super useful in functional programming, closures, and creating reusable/chainable logic

// Normal function (classic way, takes 3 arguments at once)
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(5, 6, 2)); // 13


// PROBLEM:
// What if we want to make this more flexible?
// Like chaining: sum(5)(6)(2)()
// Or dynamically adding numbers one by one?
// Normal functions don’t support that out of the box.

// SOLUTION: Use a curried version of the function
// This version supports chaining and can stop with an empty call ()

function currySum(a){
    if(!a) return 0;

    let ans = a;
    function smallerSum(b){
        if(!b) return ans;
        ans += b;
        return smallerSum;
    }

    return smallerSum;
}

console.log(currySum()) // 0
console.log(currySum(10)()) // 10
console.log(currySum(10)(20)()) // 30
console.log(currySum(10)(20)(30)()) // 60
console.log(currySum(10)(20)(30)(40)()) // 100
