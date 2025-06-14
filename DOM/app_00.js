// DOM - Document Object Model
// Document = HTML
// The DOM is a tree-like structure created by the browser when an HTML document is loaded.
// It represents the page so that programs (like JS) can manipulate the document structure, style, and content.

// =======================================
// SELECTING ELEMENTS
// =======================================

// 1. Selecting an element by ID (returns a single element)
const heading = document.getElementById("heading"); // <h1 id="heading">DOM Manipulation</h1>
heading.style.backgroundColor = 'yellow';
heading.style.border = '2px solid black';
//  It’s fastest, and IDs are unique, so we know which tag are we targeting

// 2. Selecting by tag name (returns an HTMLCollection)
const sections = document.getElementsByTagName('section'); // HTMLCollection of all <section> elements
sections[0]; // Accessing the first <section>
// HTMLCollection is an array that contains all tags we had in our code 
// (not exactly array, but kinda behaves like one).

// 3. Selecting by class name (returns an HTMLCollection)
const favMovies = document.getElementsByClassName('fav-movie'); // HTMLCollection of <li class="fav-movie">
for (let movie of favMovies) {
    movie.style.color = 'red';
}

// 4. Selecting by name attribute (returns a NodeList)
const inputs = document.getElementsByName('username'); // NodeList of elements with name="username"
// NodeList is similar to HTMLCollection
inputs[0]; // First input element

// 5. querySelector (returns the first match from any selector)
const head = document.querySelector('#heading');         // ID selector
const firstFavMovie = document.querySelector('.fav-movie'); // Class selector
const firstDiv = document.querySelector('div');           // Tag selector

// 6. querySelectorAll (returns a NodeList of all matches)
const allMovies = document.querySelectorAll('.fav-movie'); // NodeList of all <li class="fav-movie">
const allH2s = document.querySelectorAll('h2');            // NodeList of all <h2> tags

// 7. Selecting descendants (like 'ul a' = <a> inside <ul>)
const googleLink = document.querySelector('ul a'); // First <a> inside <ul>



// TRAVERSAL
// In DOM tree, html tag is the root element and head & body are its children
// Ex - when we add elements inside body tag they all become children and descendants of body
// elements at same level are siblings

// You can move from parent -> child, child -> parent, and between siblings.

// Moving UP: child -> parent
const strongTag = document.querySelector('strong');
const strongParent = strongTag.parentElement; //<p>...</p>
strongParent.parentElement // <body>...</body>

strongParent.parentElement.parentElement // <html></html>
strongParent.parentElement.parentElement.parentElement // null

// Moving DOWN: parent -> children
const paragraph = document.querySelector('p');
paragraph.children // HTMLCollection(3) [span, strong, a]
paragraph.children[0] // <span>...</span>
paragraph.childElementCount // 3

// Moving SIDEWAYS: siblings
const movieHeading = document.querySelector('h3'); // <h3>Movies</h3>
movieHeading.previousElementSibling // <img>
movieHeading.nextElementSibling // <ul>...</ul>
movieHeading.nextElementSibling.nextElementSibling //<br>
