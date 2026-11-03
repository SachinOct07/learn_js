//In JavaScript there are six methods to select elements from the DOM (Document Object Model). These methods allow you to access and manipulate HTML elements on a web page. Here are the six methods:
//1. getElementById(): This method selects an element based on its unique ID attribute. It returns a single element object.
//2. getElementsByClassName(): This method selects elements based on their class name. It returns a live HTMLCollection of elements with the specified class name.
//3. getElementsByTagName(): This method selects elements based on their tag name. It returns a live HTMLCollection of elements with the specified tag name.
//4. querySelector(): This method returns the first element that matches a specified CSS selector. It can select elements by ID, class, or any other CSS selector.
//5. querySelectorAll(): This method returns all elements that match a specified CSS selector. It can select elements by ID, class, or any other CSS selector.
//6. getElementsByName(): This method selects elements based on their name attribute. It returns a live HTMLCollection of elements with the specified name attribute.

console.log(document);
//The document object represents the entire HTML document. 
// It is the root node of the DOM tree and provides access to all elements and content within the document. 
// The document object allows you to manipulate the structure, content, and styling of a web page using JavaScript.

let a = document.getElementsByTagName("h1");
//when we get the element from the html page it will store the elements in array format. 
//So we can access the elements using index number.
console.log(a);

let b = document.getElementsByClassName("para");
//when we get the element from the html page it will store the elements in array format. 
//So we can access the elements using index number.
console.log(b);

let c = document.getElementById("heading");
//when we get the element from the html page it will store the elements in array format. 
//So we can access the elements using index number.
console.log(c);

let name = document.getElementsByName("name");
console.log(name);

let d = document.querySelectorAll(".para");
//when we get the element from the html page it will store the elements in array format. 
//So we can access the elements using index number.
console.log(d);

let e = document.querySelector("#heading");
console.log(e.innerHTML);

//By selecting the elements by class name we should use dot(.) before the class name.
//By selecting the elements by id name we should use hash(#) before the id name.