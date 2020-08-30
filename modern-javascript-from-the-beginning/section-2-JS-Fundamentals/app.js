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

// const firstName = "William";
// const lastName = "Johnson";
// const age = 35;
// const str = "Hello there my name is Brad";
// const tags = "web design,web devlopment,design";

// let val;

// val = firstName + lastName;

// // Concatenation

// val = firstName + " " + lastName;

// // Append on to the end of a variable +=
// val = "Brad ";
// val += "Traversy";

// val = "Hello, my name is " + firstName + " and I am " + age;

// // Escaping characters
// val = "That/'s  awesome I can/'t wait";
// val = "That's awesomse I can't wait.";

// // Length
// val = firstName.length; // () are only needed for methods not properties

// // concat
// val = firstName.concat(" ", lastName);

// // Change Case
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();

// val = firstName[0];

// // indexOf()
// val = firstName.indexOf("l");
// val = firstName.lastIndexOf("l");

// // charAt()
// val = firstName.charAt("2");

// // get last character
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(" ");
// val = tags.split(",");

// // replace()
// val = str.replace("Brad", "Jack");

// // includes()
// val = str.includes("Hello");
// val = str.includes("Foo");

// console.log(val);

/***
 * Template Literals
 *
 *
 */

// const name = "John";
// const age = 31;
// const job = "Web Developer";
// const city = "Miami";
// let html;
// // Without template strings (es5)
// // html =
// //   "<ul><li>Name: " +
// //   name +
// //   "</li><li>Age: " +
// //   age +
// //   "</li><li>Job: " +
// //   job +
// //   "</li><li>City: " +
// //   city +
// //   "</li></ul>";

// // With template strings

// html = `
// <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>${2 + 2}</li>
//   <li>${age > 30 ? "Over 30" : "Under 30"}</li>
// </ul>`;

// document.body.innerHTML = html;

/***
 * Arrays and Array Methods
 *
 *
 *
//  */

// // Create Some Arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ["Apple", "Banana", "Orange", "Pear"];
// const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get a single value
// val = numbers[3]; // Arrays are 0 based
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // find index of a value
// val = numbers.indexOf(36);

// // Mutating Arrays

// // // Add onto the end
// // numbers.push(250);
// // // Add onto the front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from the front
// // numbers.shift();
// // // Splice values
// // numbers.splice(1, 3);
// // // Reverse the array
// // numbers.reverse();

// // concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // Use the "compare" function
// // val = numbers.sort(function (x, y) {
// //   return x - y;
// // });

// // // reverse sort
// // val = numbers.sort(function (x, y) {
// //   return y - x;
// // });

// // Find
// function under50(num) {
//   return num < 50;
// }

// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(under50);
// val = numbers.find(over50);
// console.log(numbers);
// console.log(val);

/****
 *
 * Object Literals
 */

// const person = {
//   firstName: "Steve",
//   lastName: "Smith",
//   age: 35,
//   email: "steve@aol.com",
//   hobbies: ["music", "sports"],
//   address: {
//     city: "Miami",
//     state: "FL",
//   },
//   getBirthYear: function () {
//     return 2020 - this.age;
//   },
// };

// let val;

// val = person;

// // Get specific value
// val = person.firstName;
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address;
// val = person.address.state;
// val = person.address["city"];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Mike", age: 23 },
//   { name: "Whitney", age: 29 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

/*****
 *
 *
 * DATES AND TIME
 */

// let val;

// const today = new Date();
// let birthday = new Date("9-10-1981 11:25:00");
// birthday = new Date("september 10 1981 11:25:00");
// birthday = new Date("9/10/1981 11:25:00");

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(6);
// birthday.setDate(19);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

// console.log(val);
/***
 * If statements and comparison operators
 *
 *
 */

//  if(something) {
//   do something
//  } else {
//    do somethings else
// //  }

// const id = "100"; // Single = sign means assignment

// // Equal to
// if (id == 100) {
//   // == means that it is a comparison operator tests value but not type
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// // Not equal to
// if (id != 100) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// if (id === 100) {
//   // === Compares type and value for strict equality
//   console.log("Matches");
// } else {
//   console.log("No matches");
// }

// if (id !== 100) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

let id = 100;

// if (typeof id !== "undefined") {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log("NO ID");
// }

// if (id > 200) {
//   console.log("OVer 200");
// } else {
//   console.log("Less than 200");
// }

// // IF ELSE

// const color = "red";

// if (color === "red") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color is not red or blue ");
// }

// LOGICAL OPERATORS

// const name = "Steve";
// const age = 16;

// if (age > 0 && age < 13) {
//   console.log(`${name} is a child.`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in the race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// // Ternary Operator

// console.log(id === 100 ? "Correct" : "Incorrect");

/***
 * SWITCHES
 *
 *
 *
 */

// const color = "red";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   default:
//     console.log("Color is not red or blue");
//     break;
// }

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// switch (new Date().getDay()) {
//   case 0:
//     dayInPortuguese = "Domingo";
//     break;
//   case 1:
//     dayInPortuguese = "Segundo Feira";
//     break;
//   case 2:
//     dayInPortuguese = "Terca Feira";
//     break;
//   case 3:
//     dayInPortuguese = "Quarta Feira";
//     break;
//   case 4:
//     dayInPortuguese = "Quinta Feira";
//     break;
//   case 5:
//     dayInPortuguese = "Sexta Feira";
//     break;
//   case 6:
//     dayInPortuguese = "Sabado";
//     break;
// }

// console.log(`Today is ${day}. Hoje é ${dayInPortuguese}`);
