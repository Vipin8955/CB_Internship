// OBJECTS - it is data structure that allows us to store data in key-value pairs
const person = {
    name: "Ayush",
    age: 30,
    isAdult: true,
    hobbies: ["reading", "gaming", "coding"],
}

// Accessing object properties
console.log(person.name); // Ayush
console.log(person["age"]); // 30

// Adding new properties
person.email = "ayush@gmailcom";

// Modifying existing properties    
person.age = 31;

// Deleting properties
delete person.isAdult;

// Iterating over object properties
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Checking if a property exists
console.log("name" in person); // true


// Object methods
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Calling the method
person.greet(); // Hello, my name is Ayush



// Prototype and protoypal inheritance
const student = Object.create(person); // student inherits from person
student.grade = "A";

console.log(student); // {grade: 'A'}
// student is an object that inherits from person, it has access to all properties and methods of person.
// but it does not show inherited properties when we print student directly 

// Accessing inherited properties
console.log(student.name); // Ayush

// __proto__ is a special property that points to the prototype of the object
console.log(student.__proto__); // {name: 'Ayush', age: 31, hobbies: Array(3), email: 'ayush@gmailcom', greet: ƒ}
// It will show the properties of person object - parent object of student

console.log(student.__proto__ === person); // true - because student is inheriting from person

console.log(person.__proto__); // Object.prototype - the prototype of person is Object.prototype
// Object.prototype is the top-level prototype in JavaScript, all objects inherit from it

console.log(Object.prototype.__proto__); // null - because Object.prototype is the top-level prototype, it does not have a prototype



// CONSTRUCTOR FUNCTIONS
// Constructor functions are used to create objects with a specific structure
// They are defined using a function and are called with the `new` keyword

// Example of a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function() {
    //     console.log(`My name is ${this.name}`);
    // };
    // when we use constructor functions, we do not usually define methods inside the constructor function
    // instead, we define methods on the prototype
    // so that all instances of the object can share the same method
}

// Adding methods to the prototype
Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
};

const person1 = new Person("Jim", 25);
const person2 = new Person("Pam", 28);



// this keyword
// The `this` keyword refers to the current object in the context of a method
// In the context of a constructor function, `this` refers to the instance being created


// 1. Implicit Binding
// When a method is called on an object, `this` refers to that object
const obj = {
    name: "Ted",

    fun: function(){
        console.log(this);
    },

    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Calling the method
obj.fun(); // {name: 'Ted', fun: ƒ, greet: ƒ}
// In this case, `this` refers to `obj`

obj.greet(); // Hello, my name is Ted
// In this case, `this` refers to `obj` and we can access its properties  


// 2. Explicit Binding
const anotherObj = {
    name: "Bob"
};
obj.greet.call(anotherObj); // Hello, my name is Bob
// The `call` method allows us to explicitly set the value of `this`

// 3. New keyword Binding
// When a function is called with the `new` keyword, `this` refers to the new object being created
const newPerson = new Person("John", 35);

// 4. Default keyword Binding 
// If a function is called without any context, `this` refers to the global object (or undefined in strict mode)
function showThis() {
    console.log(this);
}

showThis(); // In a browser, this will log the global window object



// CLASS SYNTAX
// ES6 introduced class syntax, which is a more concise way to create constructor functions and prototypes
// Ideally classes do not exists in JavaScript, 
// but we can use class syntax to create constructor functions and prototypes in a more readable way
// Why we use class syntax?
// Because it is more readable and easier to understand, especially for people coming from other programming languages

class Car{

    constructor(name, price, isDiskBrake){
        this.name = name;
        this.price = price;
        this.isDiskBrake = isDiskBrake;
    }

    // Simple method
    // we can write methods inside the class without using function keyword
    startCar() {
        console.log(`${this.name} is starting...`);
    }

    //getter and setter methods
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }

    // Static method
    // Static methods are called by the class itself, not by instances of the class
    static getCarType() {
        return "This is a car";
    }

}

const car1 = new Car("Thar", 1000000, true);
const car2 = new Car("Swift", 500000, false); 

// Accessing properties
car1.name; // Thar

// Calling methods
car1.startCar(); // Thar is starting...

// We access getter and setter methods like properties not like methods
// Accessing getter method
car1.getName; // Thar
// Setting value using setter method
car1.setName = "New Thar";

// Accessing static method
Car.getCarType(); // This is a car



// CLASS INHERITANCE
// Classes can inherit from other classes using the `extends` keyword

class RacingCar extends Car {

    constructor(name, price, isDiskBrake, topSpeed) {
        super(name, price, isDiskBrake); // Call the parent class constructor   
        this.topSpeed = topSpeed;
    }

    // Overriding a method
    startCar() {
        console.log(`${this.name} is starting with a top speed of ${this.topSpeed} km/h`);
    }
    get getTopSpeed() {
        return this.topSpeed;
    }
    set setTopSpeed(speed) {
        this.topSpeed = speed;
    }
}
const racingCar1 = new RacingCar("Ferrari", 2000000, true, 350);


// Calling overridden method
racingCar1.startCar(); // Ferrari is starting with a top speed of 350 km/h

// Accessing properties from parent class
racingCar1.getName; // Ferrari

// Accessing getter and setter methods
racingCar1.getTopSpeed; // 350
racingCar1.setTopSpeed = 400; // 400

// Static method in child class
RacingCar.getCarType(); // This is a car
// Static method in parent class can be accessed from child class
// Static methods are not inherited, so we cannot call them on instances of the child class
// But we can call them on the class itself