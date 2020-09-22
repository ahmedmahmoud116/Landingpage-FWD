/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section'); //to get all of the sections in the document
const navList = document.getElementById('navbar__list'); //to get the list of navbar by id

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function navElementsHelper(section){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = section.getAttribute('data-nav');
    a.className = 'menu__link';
    a.setAttribute('href', `#${section.getAttribute('id')}`);
    li.appendChild(a);
    navList.appendChild(li);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar(){
	sections.forEach(section => {
        navElementsHelper(section);
    })
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event){
    if(event.target.nodeName === 'a'){
        const dest = event.target.getAttribute('href');
        const section = document.querySelector(dest);
        const x = section.getBoundingClientRect().x; //returns the size of an element and its position relative to the viewport
        const y = section.getBoundingClientRect().y;
        window.scrollTo(x, y);
    } 
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
document.addEventListener('DOMContentLoaded', buildNavBar()); 

// Scroll to section on link click
navList.addEventListener('click', scrollToAnchor);

// Set sections as active


