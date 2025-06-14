// DOM Events
// An action like click, keypress, etc., that happens in the browser
// We can add events in two ways - inline and external

const btn = document.getElementById('btn');
// btn.onclick = () => alert('Button clicked!')

const heading = document.querySelector('h1');
const btnStyle = document.getElementById('btn-style-change')
const btnContent = document.getElementById('btn-content-change')

btnStyle.onclick = () => {
    heading.style.color='red'
    heading.style.backgroundColor='lightgray'
    heading.style.border='2px solid black'
}

btnContent.onclick = () => heading.innerText='Heading changed'

// Drawback of onclick

function shout(){
    console.log('SHOUTTTTT!!!!!')
}

function scream(){
    console.log('SCREAMMMM!!!!')
}

// if we want to run shout and scream function for a button, 
// we can assign it but only one.

const btn1 = document.getElementById('btn-1');
// btn1.onclick=shout; // either this or other one
// btn1.onclick=scream; // it will override previous function



// EVENT LISTENERS
// A function that waits for the event and responds when it occurs

btn1.addEventListener('click', shout);
btn1.addEventListener('click', scream);
// Event listeners allow us to use multiple functions for one event


// Different events

// mouse events
heading.addEventListener('mouseenter', ()=>{
    heading.style.color='blue'
})

heading.addEventListener('mouseleave', ()=>{
    heading.style.color='black'
})

//keyboard events
const inp = document.querySelector('input')
inp.addEventListener('keypress', ()=>{
    inp.style.backgroundColor='lightblue'
})
// there are various things we can do with keypress

// form events
const form = document.querySelector('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault(); // to prevent page from reloading after submitting
    const username = form.elements[1].value;
    const password = form.elements[2].value;

    console.log(username)
    console.log(password)
})
