// /***
//  * Using the console
//  */

// // Log to the console
// console.log("Hello World");
// console.log(123);
// console.log(true);
// // let greeting = "Hello ";
// console.log(greeting);
// console.log([1, 2, 3, 4, 5]);
// console.log({ a: 1, b: 2 });
// console.table({ a: 1, b: 2 });
// console.error("This is some error");
// console.clear();
// console.warn("this is a warning");
// console.time("Hello");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.timeEnd("Hello");
// /*
// Multi line comments
// */
// console.clear();
// /*****
//  * Variables Var, Let and Const
//  */

// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// // Init Variable
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // Variables can include letters, numbers, _, and $
// // Cannot start with a number
// var _name = "John"; // Private Variables
// var $name = "John"; // SElecting stuff with jquery out of the DOM

// // Multi word variables
// var firstName = "John"; // Camel case
// var first_name = "Sata"; // Underscore
// var FirstName = "Tom"; // Pascal Case
// var firstname; // NONONON0

// LET AND CONST

// // LET
// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// CONST

const name = "John";
console.log(name);
// Cannot reassign
// name = 'sata' will not work
// Have to assign a value
// const greeting <== has to have a value assigned to it

const person = {
  name: "John",
  age: 30,
};

// With const things inside the object can be changed but the variable itself cannot be reassigned

person.name = "Sara";

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.table(numbers);
