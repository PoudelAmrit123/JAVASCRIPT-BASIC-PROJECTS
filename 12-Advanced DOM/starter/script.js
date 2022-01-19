'use strict';




///////////////////////////////////////
// Modal window

 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
      e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);


overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
      
      
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});





       // Scorlling 

  const btnscrollto = document.querySelector('.btn--scroll-to');

  const section = document.querySelector('#section--1');


        btnscrollto.addEventListener('click' , function (){


            const s1coords = section.getBoundingClientRect();
            console.log(s1coords);

            console.log(window.pageXOffset , window.pageYOffset);

             //Scorilling

              // window.scrollTo(s1coords.left +window.pageXOffset , s1coords.top + window.pageYOffset)

             // For Smooth Scrolling 

              // window.scrollTo( {

              //  left : s1coords.left +window.pageXOffset , 
               
              //  top :s1coords.top + window.pageYOffset ,

              //  behavior : 'smooth' ,
              // }) ;

              
               // New MEthod

               section.scrollIntoView({behavior : 'smooth'});
        })

       

 
    
         document.querySelector('.nav__links').addEventListener('click' , function (e){
                     e.preventDefault();

               // Matching Strategy
                   if(e.target.classList.contains('nav__link')){
 
       const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({
    behavior : 'smooth'
  });


  }


        });

           //tabbed components 

           

           const tabs = document.querySelectorAll('.operations__tab');
           const tabsContainer = document.querySelector('.operations__tab-container');
           const tabsContent = document.querySelectorAll('.operations__content');
           
      

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // main things to understand

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
 







    // Lecture *****
    // Selecting elements

     /*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);


// Delete elements
document.querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); // Before ES6
  });


// Styles, Attributes and Classes
  
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use
logo.clasName = 'jonas';


*/



///////////////////////////////////////
// Types of Events and Event Handlers
 /*

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};
  
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);


  */
 
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };




///////////////////////////////////////
// DOM Traversing


  /*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});


 */


