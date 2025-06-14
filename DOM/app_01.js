// DOM Properties: innerText, textContent, innerHTML

const para = document.querySelector('p');

// innerText 
// Returns ONLY visible text (ignores hidden via CSS)
// It respects styles like display:none and visibility:hidden
para.innerText // 'Lorem ipsum.....amet?'

// textContent
// Returns ALL text inside the element — including hidden or invisible ones
// Keeps \n and extra spaces
para.textContent // '\n      Lorem ipsum......error amet?\n    '

// innerHTML 
// it also returns all text with all html tags within it
para.innerHTML // '\n      <span>Lorem ipsum dolor</span> sit...........error amet?\n    '


// Attribute methods: getAttribute, setAttribute

const inp = document.querySelector('input');

// getAttribute - Gets the value of any attribute
inp.getAttribute('type') // 'text'
inp.getAttribute('name') // 'username'
inp.getAttribute('id') // null - because we haven't defined in id in our HTML

// setAttribute - Dynamically changes an attribute
inp.setAttribute('type', 'password') // we have chnaged the type of input from text to password
inp.getAttribute('type') // 'password'

// Example - we have to change an image's source 
const image = document.querySelector('#image');
image.setAttribute('src', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ViJTIwZGV2fGVufDB8fDB8fHww')

// Attribute vs Property
// Attribute = What’s in the HTML (initial state)
// Property = What’s in the DOM (live object)



// classList property
const heading = document.getElementById('head');

// classList gives you access to all the classes on an element
heading.classList // DOMTokenList [value: ''] 
// (empty if no class is there initially)

// Example : we have to do some styling over an element
// We could style directly using .style (BUT it adds inline CSS which gets messy real quick)
// Instead, the better practice is to add classes defined in your external CSS filel

// 1. Adding a class
heading.classList.add('head-class');
// HTML before: <h1 id="head">This is a H1 heading</h1>
// HTML after:  <h1 id="head" class="head-class">This is a H1 heading</h1>

// so now the styling in css file using head-class will be shown in browser

// we can add more classes if we want
heading.classList.add('another-class'); // <h1 id="head" class="head-class another-class">This is a H1 heading</h1>

// removing a class 
heading.classList.remove('another-class'); // <h1 id="head" class="head-class">This is a H1 heading</h1>

// Toggle a class (adds it if missing, removes it if present)
heading.classList.toggle('another-class'); // adds 'another-class'
heading.classList.toggle('another-class'); // removes 'another-class'

// we can use contains to check whether a class is present or not
heading.classList.contains('head-class') // true
heading.classList.contains('another-class') // false



// Creating and Adding elements in HTML
// Example - we have to add a strong tag after the second paragraph

// first create the element that we need to add and put some content inside it
const strongTag = document.createElement('strong');
strongTag.innerText = 'This is a strong tag';

// choose the tag from HTML where we need to add the new element (parent element)
const secondPara = document.querySelector('#second-para');
secondPara.appendChild(strongTag)

// appendChild() is old way
// better method is append() because it not only adds html content but text content also
secondPara.append('This is some random text');

// prepend() - adds content at the start of the element
secondPara.prepend('This is text is before paragraph. ')


// Removing elements from HTML
// Example - we have to remove bold tag from third para

const boldTag = document.querySelector('#third-para b') // element to delete
const thirdPara = document.getElementById('third-para'); // element from where to delete (parent)
thirdPara.removeChild(boldTag);

// removeChild() is an old method, 
// better way is to use remove() - we don't need to specify parent, we can directly remove any element
const italic = document.querySelector('#third-para i')
italic.remove();

// If we wanna insert HTML relative to an existing element and not just inside it
thirdPara.insertAdjacentHTML('beforebegin', '<mark>Marked text</mark>');

// Options:
// 'beforebegin' — before the element itself
// 'afterbegin' — inside, before the first child
// 'beforeend' — inside, after the last child
// 'afterend' — after the element itself
