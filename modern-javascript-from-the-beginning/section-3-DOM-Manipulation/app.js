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
// const items = document.getElementsByClassName("collection-item");

// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listItems);

// Document.getElementByTagName
// let lis = document.getElementsByClassName("collection-item");

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[1].textContent = "Hello";
// // Convert HTML Collection into an array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}Hello`;
// });

// console.log(lis);
// Query Selector All
// Returns a node list

// document.querySelectorAll()

// const items = document.querySelectorAll("ul.collection li.collection-item");

// items.forEach((item, index) => {
//   item.textContent = `${index}: task`;
// });

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");
// liOdd.forEach((li) => {
//   li.style.background = "#ccc";
// });
// liEven.forEach((li) => {
//   li.style.background = "#f4f4f4";
// });

// console.log(items);

/***
 *
 * TRAVERSING THE DOM
 *
 */

// let val;

// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// // val = list;

// // Get Child Nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // Node Types
// // 1 Element
// // 2 Attribute (deprecated)
// // 3 Text Node
// // 8 Comment
// // 9 Document itself
// // 10 Doctype

// // Get children element nodes HTML collection
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = "Hello";
// // Children of children
// val = list.children[3].children[0];

// // First Child
// val = list.firstChild; // Will include text nodes
// val = list.firstElementChild; // Will not include text nodes
// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count Child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// // Get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

/*****
 *
 *
 * CREATING ELEMENTS
 */

// const li = document.createElement("li");

// // Add class
// li.className = "collection-item";

// // Add ID
// li.id = "new-item";

// // Add attribute
// li.setAttribute("title", "New Item");

// // Create text node and append
// li.appendChild(document.createTextNode("Hello World"));

// // Create new link element
// const link = document.createElement("a");
// // Add classes
// link.className = "delete-item secondary-content";
// // Add icon html
// link.innerHTML = "<i class='fa fa-remove'></i>";

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

/***
 *
 * REMOVING AND REPLACING ELEMENTS
 */

// // Create and element
// const newHeading = document.createElement("h2");
// // Add id
// newHeading.id = "task-title";
// // New Text node
// newHeading.appendChild(document.createTextNode("Task List"));

// // Get the old heading
// const oldHeading = document.getElementById("task-title");
// // Parent
// const cardAction = document.querySelector(".card-action");

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul");

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES AND ATTRIBUTES
// const firstLi = document.querySelector("li:first-child");
// const link = firstLi.children[0];

// let val;
// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add("test");
// link.classList.remove("test");
// val = link;

// // Attributes
// val = link.getAttribute("href");
// val = link.setAttribute("href", "http://google.com");
// val = link.hasAttribute("href");
// link.setAttribute("title", "google");
// link.removeAttribute("title");
// val = link;

// console.log(val);

/***
 * Event Listeners and the event object
 */

// document.querySelector(".clear-tasks").addEventListener("click", (e) => {
//   console.log("Hello World");
//   e.preventDefault();
// });

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
//   console.log("Clicked");
//   e.preventDefault();
//   val = e;

//   // Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;
//   // e.target.innerText = "Hello";

//   // Event type
//   val = e.type;

//   // Time stamp
//   val = e.timeStamp;

//   // Coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // Coord event relative to the element
//   val = e.offsetY;
//   console.log(val);
// }
/***
 *
 *
 * MOUSE EVENTS
//  */
// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// // click
// // clearBtn.addEventListener("click", runEvent);
// // Double click
// // clearBtn.addEventListener("dblclick", runEvent);
// // Mousedown
// // clearBtn.addEventListener("mousedown", runEvent);
// // clearBtn.addEventListener("mouseup", runEvent);
// // mouseenter
// // card.addEventListener("mouseenter", runEvent);
// // // Mouseleave
// // card.addEventListener("mouseleave", runEvent);
// // // MouseOver
// // card.addEventListener("mouseover", runEvent);
// // // MouseOut
// // card.addEventListener("mouseout", runEvent);

// // Mousemove
// card.addEventListener("mousemove", runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
//   e.preventDefault();
// }

// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");

// // Clear Input
// taskInput.value = "";

// form.addEventListener("submit", runEvent);

// Keydown
// taskInput.addEventListener("keydown", runEvent);
// Keyup
// taskInput.addEventListener("keyup", runEvent);
// Keypress
// taskInput.addEventListener("keypress", runEvent);
// Focus
// taskInput.addEventListener("focus", runEvent);
// Blur
// taskInput.addEventListener("blur", runEvent);
// Cut
// taskInput.addEventListener("cut", runEvent);
// Paste
// taskInput.addEventListener("paste", runEvent);
// Input will fire off on any input event
// taskInput.addEventListener("input", runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   console.log(e.target.value);
// heading.innerText = e.target.value;
// console.log(taskInput.value);
// e.preventDefault();
//}

/***
 *
 * EVENT BUBBLING
 */

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("Card Title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("Card content");
// });

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("Card");
// });

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("Col");
// });

// Event Delegation

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

// document.body.addEventListener("click", deleteItem);

// function deleteItem(e) {
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     e.target.parentElement.parentElement.remove();
//   }
// }

// Set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

// // set session storage item
// sessionStorage.setItem("name", "Beth");

// get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItems("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  // alert("Task saved");
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItems("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
