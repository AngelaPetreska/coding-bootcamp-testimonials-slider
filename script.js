const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

/* 1. Selecting DOM elements
const next = document.querySelector('.next');: 
Selects the first element in the document with 
the class next and assigns it to the next constant.

const prev = document.querySelector('.prev');: 
Selects the first element in the document with 
the class prev and assigns it to the prev constant.

const slides = document.querySelectorAll('.slide');: 
Selects all elements in the document with the class 
slide and assigns the NodeList of these elements to 
the slides constant. */

let index = 0;
display(index);
/* 2. Initializing the index and displaying the first slide 
let index = 0;: 
Initializes a variable index to 0, which will 
be used to keep track of the currently displayed slide.

display(index);: Calls the display function with the 
current index to show the first slide. */

/* 3. Function to display a specific slide

function display(index) {: Declares a function 
named display that takes an index as an argument.

slides.forEach((slide) => { slide.style.display = 'none'; });: 
Loops through each slide in the slides NodeList and sets 
its display style to none, effectively hiding all slides.

slides[index].style.display = 'flex';: Sets the display style 
of the slide at the given index to flex, making it visible.*/

function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

/* 4. Function to move to the next slide 
function nextSlide() {: 
Declares a function named nextSlide.

index++;: Increments the index by 1.

if (index > slides.length - 1) { index = 0; }: 
If index exceeds the last slide's index (i.e., 
index is greater than slides.length - 1), 
it sets index back to 0, effectively wrapping 
around to the first slide.

display(index);: Calls the display function with 
the new index to show the next slide.*/
function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}

/* 5. Function to move to the previous slide
function prevSlide() {: 
Declares a function named prevSlide.

index--;: Decrements the index by 1.

if (index < 0) { index = slides.length - 1; }: 
If index is less than 0, it sets index to the 
last slide's index (i.e., slides.length - 1), 
effectively wrapping around to the last slide.

display(index);: Calls the display function with 
the new index to show the previous slide.*/

function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

/* 6. Adding event listeners to the buttons 
next.addEventListener('click', nextSlide);: 
Adds a click event listener to the next button. 
When the button is clicked, the nextSlide function 
is called to show the next slide.

prev.addEventListener('click', prevSlide);: 
Adds a click event listener to the prev button. 
When the button is clicked, the prevSlide function 
is called to show the previous slide.*/

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

/* Summary
The code selects the next and previous buttons 
and all slide elements.
It initializes an index variable to keep track 
of the currently displayed slide and shows 
the first slide.
It defines functions to display a specific 
slide, move to the next slide, and move to 
the previous slide.
Event listeners are added to the next and previous 
buttons to enable navigation through the slides. */