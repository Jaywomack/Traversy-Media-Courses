/**
 * THE DOM
 */

// let val;

// val = document;
// val = document.all[1];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[5];
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute("src");

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach((script) => {
//   console.log(script);
// });

// console.log(val);

/***
 *
 *
 * DOM Selectors for single elements
 */

// // document.getElementById()

// console.log(document.getElementById("task-title"));

// // Get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title".className));

// const taskTitle = document.getElementById("task-title");

// // Change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

// // Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// document.getElementById(
//   "task-title"
// ).innerHTML = `<span style="color:red">Task List</span>`;

// document.querySelector

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";

// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(3)").style.color = "yellow";
// document.querySelector("li:nth-child(4)").textContent = "Change text";

/***
 *
 * DOM selectors for multiple elements
 *
 */

// document.getElementsByClassName
const items = document.getElementsByClassName("collection-item");

console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Hello";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");
