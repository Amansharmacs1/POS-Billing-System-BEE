# DOM
Document Object Model (DOM) is a Web API that provides an interface for JavaScript to work with the HTML structure. It is implemented by the browser.

It creates an identical hierarchical tree-like structure in which the document is the root node of the tree.

Tags are known as elements.

Tags (or elements) are connected to the tree according to their hierarchy.

Attributes are added as properties of the nodes.

Text is added through text nodes.

The DOM structure can be seen in the browser by inspecting the page and looking at the Elements tab.

console.log(document);

It can be used to view the DOM structure in the browser console.

DOM Operations

CRUD - Create, Read, Update, and Delete.

getElementById()

It is used to get an element by its ID.

It returns the first element with the specified ID value, or null if no element with the specified ID exists.

getElementsByClassName()

It is used to get elements by their class name.

getElementsByTagName()

It is used to get elements by their tag name.

Event

An event is an action that occurs in the browser, such as a click, mouseover, keypress, etc.

Event Listener

An event listener is a method that attaches an event handler to a specified element.

addEventListener()

It is used to attach an event handler to the specified element.

Array Methods

find()

It is used to find the first element in an array that satisfies the provided testing function.

filter()

It is used to create a new array containing all elements that pass the test implemented by the provided function.

map()

It is used to create a new array with the results of calling a provided function on every element of the array.

reduce()

It is used to apply a function against an accumulator and each element of the array (from left to right) to reduce the array to a single value.

.focus() 
move the cursor to the input field and make it active.

alert()
It is used to display an alert box with a specified message and an OK button.


insertRow()
It is used to insert a new row in a table.

insertCell()
It is used to insert a new cell in a table row.

setAttribute()
It is used to set the value of an attribute on the specified element.

