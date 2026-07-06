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


EventBubbling()
Event bubbling is a concept in JavaScript where an event that occurs on a child element automatically propagates (or "bubbles up") to its parent elements in the DOM hierarchy.

Difference between Local Storage, Session Storage and Cookies
The main difference is how long the data lasts and whether it is sent to the server. 
Local Storage stores data permanently until it's manually removed and is commonly used for themes or shopping carts.
Local Storage: ~5–10 MB, permanent.

Session Storage stores data only for the current browser tab and is cleared when the tab is closed, making it suitable for temporary data like multi-step forms.
Session Storage: ~5–10 MB, lasts until the tab closes.

Cookies are much smaller in size, around 4 KB, and are automatically sent with every HTTP request, so they are commonly used for authentication and maintaining user sessions.
Cookies: ~4 KB, automatically sent with every HTTP request.


Extension Storage is a storage API provided by browsers for extensions to save data such as user settings, preferences, or cached information. Unlike Local Storage, it is designed specifically for browser extensions and can synchronize data across devices if needed.

Local Storage Functions:
1. setItem()
Stores data as a key-value pair.
localStorage.setItem("name", "Ronak");

2. getItem()
Retrieves data using its key.
let name = localStorage.getItem("name");
console.log(name);

3. removeItem()
Removes a single item.
localStorage.removeItem("name");

4. clear()
Removes all data from Local Storage.
localStorage.clear();

5. length (Property)
Returns the number of stored items.
console.log(localStorage.length);

Since Local Storage stores only strings, use JSON.stringify() and JSON.parse().
Local Storage can store only strings. If we want to store an object or an array, we first convert it into a JSON string using JSON.stringify(). When retrieving it, we convert the JSON string back into the original object or array using JSON.parse().


DOMContentLoaded()
DOMContentLoaded is an event that fires when the HTML document has been completely loaded and parsed, before images, videos, and other external resources finish loading.

TODO-
INVOICE BUTTON
BILL RECEPT GENERATION
REMOVE DUPLICATION OF ROW
TRANSACTION HISTORY