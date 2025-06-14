// Callback Function
// A function that is passed as an argument to another function

function cb(){
    console.log("Inside cb function");   
}

function main(f){
    console.log("Inside main function");
    f(); 
}

main(cb); // Passing cb function as an argument to main function
// Output: 
// Inside main function
// Inside cb function

// Better way to write the above code
main(() => {
    console.log("Inside cb function");
}); 
// we can remove the cb function and use an anonymous function as a callback 

// Explanation:
// Callback functions are often used in asynchronous programming, where a function is executed after a certain task is completed.
// In this case, the cb function is executed after the main function is called.

// Callback functions can also be used to handle events, such as when a user clicks a button or submits a form.
// They allow you to define a function that will be executed at a later time,
// rather than immediately when the code is run.

// Callback functions can also be used to handle errors in asynchronous operations.
// For example, you can pass a callback function to handle success and another to handle errors.
// This allows you to separate the logic for handling different outcomes of an operation.

// Callback functions are a powerful feature of JavaScript and are widely used in web development.
// They allow you to write more flexible and reusable code by decoupling the logic of different functions.

// In summary, callback functions are functions that are passed as arguments to other functions,
// allowing you to define behavior that will be executed at a later time.

// Callback syntax:
// function main(callback) {
//     // some code 
//     callback(); // call the callback function
// }

// Example of using a callback function with setTimeout
setTimeout(() => {
    console.log("This message is displayed after 1 seconds");
}, 1000); 
// The callback function is executed after 1000 milliseconds (1 seconds)
console.log("----------------------------------------------");


// ASYNC PROGRAMMING
// Asynchronous programming allows you to write code that can perform tasks without blocking the main thread.
// This is particularly useful in web development, 
// where you want to keep the user interface responsive while performing tasks like fetching data from a server.

// In JavaScript, asynchronous programming is often achieved using callbacks, promises, and async/await syntax.

function fun(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

console.log("Before calling fun");
fun(); 
console.log("After calling fun");
// In the above code, the main thread is blocked while the fun function is executing.

console.log("----------------------------------------------");

// To make it asynchronous, we can use setTimeout to simulate a delay:
// setTimeout syntax: setTimeout(callback function, delay in milliseconds)

function asyncFun(){
    setTimeout(fun, 2000); 
}

console.log("Before calling fun");
asyncFun(); 
console.log("After calling fun"); 

// setInterval is used to repeatedly call a function at specified intervals.
// setInterval syntax: setInterval(callback function, interval in milliseconds)

const id = setInterval(() => {
    console.log("This message is displayed every 2 seconds");
}, 2000);

// To stop the interval, you can use clearInterval
setTimeout(() => {
    clearInterval(id);
    console.log("Interval cleared");
}, 10000); 


