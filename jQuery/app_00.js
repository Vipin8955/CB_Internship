// jQuery - It is a JS library that simplifies JS for DOM manipulation, events, and AJAX.
// $() is the jQuery function

// Selecting an element - can be selected using id, class or tag name
const heading = $('#head') 

// selects all elements with that class
$('.fav-movie');

// Selects all those tags
$('p');

// Styling - using .css('propertyName', 'propertyValue')
heading.css('background-color','lightgray')
heading.css('border','2px solid black')

// styling all movies with class fav-movie
$('.fav-movie').css('color','purple') // done in one line

// But with DOM, we need to traverse them then style
// const favMovies = document.getElementsByClassName('fav-movie')
// for(let movie of favMovies){
//     movie.style.color='red'
// }

$('ul a[href="http://google.com"]').css('border','2px solid red')

// we can also style the element using a object
// and then passing that object in .css()

const styleObj = {
    backgroundColor:'lightblue',
    color:'green',
    border:'2px solid black'
}

$('h3').css(styleObj)


// other jQuery methods
//.text() - returns whole text similar to DOM textContent 
$('p').text() // returns content inside p tag

// but we can also use to set content inside it
$('p').text('This is now updated paragraph')

// .html() - similar to innerHTML
$('p').html() // returns content with html tags inside it

// .html() can also be used to set values

// .attr() - get value of the attribute of any element
$('#input').attr('type') // text

// we can also use it set value of the attribute
$('#input').attr('type','password')

// .first() and .last()  
$('h3+ul li').first() // returns the first li
$('h3+ul li').last() // returns the last li

// .val() similar to value
$('#input').val() // get the value from input

// we can also set value
$('#input').val('Ayush')



// class methods - similar to classList property of DOM
$('h2').addClass('style-one')
$('h2').addClass('style-two')

$('h2').removeClass('style-one')

$('h2').toggleClass('style-one')



// jQuery Events

//click - similar to onClick
$('#btn-1').click(function(){
    alert('Button clicked')
    $(this).css('border', '2px solid red')
})

// keypress
$('#input').keypress(function(){
    // console.log('keyboard pressed')
    console.log($(this).val())
})

// using any event object
$('#user').keypress(function(e){
    if(e.which===13){ // which is a special property
        console.log('You pressed enter')
    }
})



// jQuery - Effects
$('#btn2').click(function(){
    $('div').fadeOut(800,()=> console.log('Faded out'))
})

// better way 
$('#btn3').click(()=>{
    $('div').fadeToggle(800, ()=> console.log('Toggled fade'))
})

// slide up
$('#btn4').click(()=>{
    $('div').slideToggle()
})

//hide
$('#btn5').click(()=>{
    $('div').hide()
})

$('#btn6').click(()=>{
    $('div').show()
})
