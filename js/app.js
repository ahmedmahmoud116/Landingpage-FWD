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
    const li = document.createElement('li'); //create the list DOM object and a
    const a = document.createElement('a');
    a.textContent = section.getAttribute('data-nav');
    a.className = 'menu__link';
    a.dataset.anchor = section.getAttribute('id'); //to help to get the id of the section in scrollInto
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
function addActiveClass(){
    for (section of sections){
        const link = document.querySelector(`a[data-anchor="${section.id}"]`);
        const viewableEl = section.getBoundingClientRect();

        if(viewableEl.top<= 335 && viewableEl.bottom >= 180){
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event){    
    if(event.target.nodeName === 'A'){
        const anchor = event.target.dataset.anchor; //to get the id of the section
        document.getElementById(anchor).scrollIntoView({ behavior: 'smooth'});
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
document.addEventListener('scroll', addActiveClass);
