// ARRAYS
let num = [5,8,2,4,9,10,14];
console.log(num); // [5, 8, 2, 4, 9, 10, 14]
console.log(num[0]); // 5
console.log(num[1]); // 8

console.log("Length = " + num.length); // 7

console.log(typeof num); // "object"
console.log(num[100]); // undefined because there is no index 100

// In JS, arrays are heterogeneous
// They can contain different types of elements like numbers, strings, booleans, objects, and even other arrays.
let randomArray = [5, "hello", true, null, undefined, 1.75, {name: "John"}, [1, 2, 3]];



// ARRAY METHODS
// 1. push() - Adds one or more elements to the end of an array
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

// 2. pop() - Removes the last element from an array and returns it
let lastFruit = fruits.pop();
console.log(lastFruit); // "orange"
console.log(fruits); // ["apple", "banana"]

// 3. unshift() - Adds one or more elements to the beginning of an array
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana"]

// 4. shift() - Removes the first element from an array and returns it
let firstFruit = fruits.shift();
console.log(firstFruit); // "kiwi"
console.log(fruits); // ["apple", "banana"]


//5. slice() - Returns a shallow copy of a portion of an array into a new array object
let colors = ["red", "green", "blue", "yellow", "purple"];
let slicedColors = colors.slice(1, 3); // Returns elements from index 1 to index 2 (not including index 3)
console.log(slicedColors); // ["green", "blue"]

colors.slice(1); // Returns elements from index 1 to the end of the array

// 6. splice() - Changes the contents of an array by removing or replacing 
// existing elements and/or adding new elements in place
// syntax - array.splice(start, deleteCount, item1, item2, ...)
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6, 7); // Removes 1 element at index 2 and adds 6 and 7 
console.log(numbers); // [1, 2, 6, 7, 4, 5]

// 7. join() - Joins all elements of an array into a string
let arr = [1, 2, 3, 4];
let joinedString = arr.join("-"); // Joins elements with a hyphen
console.log(joinedString); // "1-2-3-4"

let joinedString2 = arr.join(); // Joins elements with a comma (default)
console.log(joinedString2); // "1,2,3,4"

// 8. concat() - Merges two or more arrays and returns a new array
let array1 = [1, 2, 3]; 
let array2 = [4, 5, 6];
let array3 = array1.concat(array2); // Merges array1 and array2
console.log(array3); // [1, 2, 3, 4, 5, 6]

// 9. includes() - Checks if an array includes a certain value among its entries, returning true or false
let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray.includes(3)); // true
console.log(numbersArray.includes(6)); // false 

// 10. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(numbersArray.indexOf(3)); // Returns the index of the first occurrence of 3 

// 11. reverse() - Reverses the elements of an array in place
let reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log(reverseArray); // [5, 4, 3, 2, 1]



// ADVANCED ARRAY METHODS
// 1. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array
// map is a Higher Order Function (HOF) because it takes a function as an argument and returns a new array
// Example: Doubling each element in the array 
let numbersArray2 = [1, 2, 3, 4];
function double(num) {
    return num * 2;
}
let doubledArray = numbersArray2.map(double) // [2, 4, 6, 8]

// 2. filter() - Creates a new array with all elements that pass the test implemented by the provided function
// function should return boolean value (true or false) to determine if the element should be included in the new array

// Example: Filtering even numbers from an array
let numbersArray3 = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;
let evenNumbers = numbersArray3.filter(isEven); // [2, 4, 6]

// 3. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
// The reduce method takes two arguments: a callback function and an initial value
// The callback function takes two arguments: the accumulator and the current value
// The reduce method is also a Higher Order Function (HOF) because it takes a function as an argument and returns a single value    

// Example: Summing all elements in an array
let numbersArray4 = [1, 2, 3, 4];
const sum = (a, b) => a + b;
let totalSum = numbersArray4.reduce(sum, 0); // 10

// 4. sort() - Sorts the elements of an array in place and returns the sorted array
let unsortedArray = [1, 2, 8, 1, 4];
unsortedArray.sort(); // [1, 1, 2, 4, 8]
// Note: The sort method sorts the elements as strings by default, so it may not work as expected for numbers
// To sort numbers correctly, you can provide a compare function
let numericArray = [10, 2, 5, 1, 8];
numericArray.sort((a, b) => a - b); // Sorts in ascending order



// Reference type and Equality
let color1 = ["red", "green", "blue"];
let color2 = color1; // color2 is a reference to the same array as color1

console.log(color1 === color2); // true, because both variables point to the same array in memory

color2.push("yellow"); // Modifying color2 also modifies color1
console.log(color1); // ["red", "green", "blue", "yellow"]

// So arrays in JS are reference types, meaning that when you assign one array to another variable, both variables point to the same array in memory.
// If you want to create a copy of an array, you can use the spread operator or the slice method.   
let color3 = [...color1]; // Using spread operator
let color4 = color1.slice(); // Using slice method
console.log(color3 === color1); // false, because color3 is a new array
console.log(color4 === color1); // false, because color4 is a new array
