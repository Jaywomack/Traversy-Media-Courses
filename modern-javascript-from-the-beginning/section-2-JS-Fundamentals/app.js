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

// const name = "John";
// console.log(name);
// // Cannot reassign
// // name = 'sata' will not work
// // Have to assign a value
// // const greeting <== has to have a value assigned to it

// const person = {
//   name: "John",
//   age: 30,
// };

// // With const things inside the object can be changed but the variable itself cannot be reassigned

// person.name = "Sara";

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// // Const can be mutated but cannot have the variable reassigned
// numbers.push(6);
// console.table(numbers);

/***
 * DATA TYPES
 * Primitive Data Types
 *
 * Reference Data Types
 *
 *
 */

// Primitive Data Types-- Are stored directly in the location the variable accesses. They are stored on the stack
// Primitive Data Types
// String
// Number
// Boolean
// Null
// Undefined
// Symobols (ES6)

// Refrence Data Types-- Are accessed bey reference
// Objects are stored on the heap
// A pointer to a location in memory

// Refrence Data Types/ Objects
// Arrays
// Object literals
// functions
// Dates
// Anything else

// JavaScript is dynamically typed. Meaning that variables can contain many differnt types of data types. With javascript we do nto need to declare types

// Typescript will allow JavaScript to become a statically typed languaged

// Primitive Data Types

// // String
// const name = "John Doe";
// console.log(typeof name);
// // Number
// const age = 45;
// console.log(typeof age);
// // Boolean
// const hasKids = true;
// console.log(typeof hasKids);
// // Null
// const car = null;
// console.log(typeof car); // It is a bug that causes null to be returned as an object it is actually a primitive data type of null

// // Undefined
// let test;
// console.log(typeof test);
// // Symbol
// const sym = Symbol();
// console.log(typeof sym);

// // Refrence data types / Objects

// // Array
// const hobbies = ["movies", "music"];
// console.log(typeof hobbies);
// // Object Literal
// const address = {
//   city: "Boston",
//   state: "MA",
// };
// console.log(typeof address);

// const today = new Date();
// console.log(today);
// console.log(typeof today);

/***
 * TYPE CONVERSION
 *
 *
 */

// let val;

// // Number to String
// val = 5;
// val = String(555);
// val = String(4 + 4);

// // Bool to String
// val = String(true);

// // Date to String
// val = String(new Date());

// // Array to String
// val = String([1, 2, 3, 4]);

// // toString
// val = (5).toString();
// val = true.toString();

// // String to Number
// val = "5";
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("Hello"); // NaN Not a Number When a vlue tries to get parsed as a number but cant
// val = Number([1, 2, 3, 4]);

// // ParseInt

// val = parseInt("100.20"); // Will only show 100
// val = parseFloat("100.30"); // Use ParseFloat to include decimals

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

// // Type Coercsion
// // Where JS actually does the type conversion

// const val1 = "5";
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple Math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(1.5);
// val = Math.ceil(2.4); // Round up
// val = Math.floor(2.8); // Round Down
// val = Math.sqrt(64); // Square Root
// val = Math.abs(-3); // Absolute Number
// val = Math.pow(8, 2); // 8 to the second power
// val = Math.min(2, 33, 44, 333, 234); // Finds the smallest number
// val = Math.max(2, 33, 44, 354);
// val = Math.random(); // Generates random decimal
// val = Math.random() * 20 + 1; // generates a random number between 0-20
// val = Math.floor(Math.random() * 20 + 2); // Random number between 0-20
// console.log(val);

/***
 *
 * String Methods and Concatenation
 */

const firstName = "William";
const lastName = "Johnson";
const age = 35;
const str = "Hello there my name is Brad";
const tags = "web design,web devlopment,design";

let val;

val = firstName + lastName;

// Concatenation

val = firstName + " " + lastName;

// Append on to the end of a variable +=
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping characters
val = "That/'s  awesome I can/'t wait";
val = "That's awesomse I can't wait.";

// Length
val = firstName.length; // () are only needed for methods not properties

// concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("2");

// get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Brad", "Jack");

// includes()
val = str.includes("Hello");
val = str.includes("Foo");

console.log(val);
