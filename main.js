// JS written with help of ChatGPT

// Tabs system
var tabs = document.getElementsByClassName('tab');
var pages = document.getElementsByClassName('page');
var tabButtons = document.querySelectorAll('.tab__btn');
var navButtons = document.querySelectorAll('.nav__btn');
var bgImg = document.getElementById('bg-img');
let ending = '';

function addHidden(elements) {
   for (let i = 1; i < elements.length; i++) {
      elements[i].classList.add('hidden');
   }
}

function showElement(element) {
   element.classList.remove('hidden');
}

function hideAll(elements) {
   for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('hidden');
   }
}

function NavOrTab(classBtn, button) {
   if (classBtn.startsWith('nav')) bgImgChange(button);
   else if (classBtn.startsWith('tab')) innerImgChange(button);
}

function bgImgChange(button) {
   let index = button.getAttribute('data-index');

   bgImg.classList.remove('bg-img-home');
   bgImg.classList.remove('bg-img-destination');
   bgImg.classList.remove('bg-img-crew');
   bgImg.classList.remove('bg-img-technology');

   // back on page -- 1st child is shown always
   let innerImg = document.getElementById('ship-img');
   let el = document.querySelectorAll('.tab__btn');
   let t = document.querySelectorAll('.tab');

   for (let i = 0; i < el.length; i++) {
      el[i].classList.remove('active');
      t[i].classList.add('hidden');
   }

   switch (index) {
      case '0':
         bgImg.classList.add('bg-img-home');
         break;
      case '1':
         bgImg.classList.add('bg-img-destination');
         t[0].classList.remove('hidden');
         el[0].classList.add('active');
         let planetImg = document.getElementById('planet-img');
         planetImg.setAttribute('src', 'assets/destination/image-moon.png');
         break;
      case '2':
         bgImg.classList.add('bg-img-crew');
         t[4].classList.remove('hidden');
         el[4].classList.add('active');
         let crewImg = document.getElementById('crew-img');
         crewImg.setAttribute('src', 'assets/crew/image-douglas-hurley.png');
         break;
      case '3':
         bgImg.classList.add('bg-img-technology');
         t[8].classList.remove('hidden');
         el[8].classList.add('active');
         let source = document.getElementById('source-ship-img');
         let shipImg = document.getElementById('ship-img');
         source.setAttribute('srcset', 'assets/technology/image-launch-vehicle-portrait.jpg');
         shipImg.setAttribute('src', 'assets/technology/image-launch-vehicle-landscape.jpg');
         break;
   }
}

function innerImgChange(button) {
   let index = button.getAttribute('data-index');
   let planetImg = document.getElementById('planet-img');
   let crewImg = document.getElementById('crew-img');
   let imgName = '';
   let source = document.getElementById('source-ship-img');
   let shipImg = document.getElementById('ship-img');
   switch (index) {
      case '0':
         planetImg.setAttribute('src', './assets/destination/image-moon.png');
         break;
      case '1':
         planetImg.setAttribute('src', './assets/destination/image-mars.png');
         break;
      case '2':
         planetImg.setAttribute('src', './assets/destination/image-europa.png');
         break;
      case '3':
         planetImg.setAttribute('src', './assets/destination/image-titan.png');
         break;
      case '4':
         crewImg.setAttribute('src', './assets/crew/image-douglas-hurley.png');
         break;
      case '5':
         crewImg.setAttribute('src', './assets/crew/image-victor-glover.png');
         break;
      case '6':
         crewImg.setAttribute('src', './assets/crew/image-mark-shuttleworth.png');
         break;
      case '7':
         crewImg.setAttribute('src', './assets/crew/image-anousheh-ansari.png');
         break;
      case '8':
         source.setAttribute('srcset', './assets/technology/image-launch-vehicle-portrait.jpg');
         shipImg.setAttribute('src', './assets/technology/image-launch-vehicle-landscape.jpg');
         break;
      case '9':
         source.setAttribute('srcset', './assets/technology/image-spaceport-portrait.jpg');
         shipImg.setAttribute('src', './assets/technology/image-spaceport-landscape.jpg');
         break;
      case '10':
         source.setAttribute('srcset', './assets/technology/image-space-capsule-portrait.jpg');
         shipImg.setAttribute('src', './assets/technology/image-space-capsule-landscape.jpg');
         break;
   }
}

function handleButtonClick(button, elements, callback) {
   button.addEventListener('click', function () {
      hideAll(elements);
      showElement(elements[button.dataset.index]);

      let classBtn = button.classList.item(0);
      NavOrTab(classBtn, button);

      if (classBtn.startsWith('nav')) {
         navButtons.forEach(function (btn) {
            btn.classList.remove('active');
         });
      } else {
         tabButtons.forEach(function (btn) {
            btn.classList.remove('active');
         });
      }

      button.classList.add('active');
      if (typeof callback === 'function') {
         callback();
      }
      hideNavbar();
   });
}

document.querySelectorAll('.section > .div');
// Initialize by hiding all tabs and pages
// addHidden(tabs);
addHidden(pages);

// Attach click handlers for tab buttons
for (let i = 0; i < tabButtons.length; i++) {
   tabButtons[i].dataset.index = i;
   handleButtonClick(tabButtons[i], tabs);
}

// Attach click handlers for navigation buttons
for (let i = 0; i < navButtons.length; i++) {
   navButtons[i].dataset.index = i;
   handleButtonClick(navButtons[i], pages);
}

document.addEventListener('DOMContentLoaded', function () {
   addHidden(tabs);
   addHidden(pages);

   if (pages[1].classList.contains('hidden')) {
      // Add the "active" class to the first tab button
      tabButtons[0].classList.add('active');
   }
});

const btn = document.getElementById('btn');
const sBtn = document.getElementById('s-btn');
const list = document.getElementById('nav__list');

btn.addEventListener('click', handleClick);
sBtn.addEventListener('click', handleClick);

function handleClick() {
   list.classList.toggle('list-open');
   toggleSBtnClass();
}

function hideNavbar() {
   list.classList.remove('list-open');
   toggleSBtnClass();
}

function toggleSBtnClass() {
   if (sBtn.classList.contains('x-btn')) {
      sBtn.classList.remove('x-btn');
      sBtn.classList.add('ham-btn');
   } else if (sBtn.classList.contains('ham-btn') && list.classList.contains('list-open')) {
      sBtn.classList.remove('ham-btn');
      sBtn.classList.add('x-btn');
   }
}

// Listen for clicks anywhere on the document
document.addEventListener('click', function (event) {
   const target = event.target;

   // Check if the clicked element is not the button and not within the navbar
   if (target !== btn && !list.contains(target)) {
      hideNavbar();
   }
});

// Prevent clicks within the navbar from closing it
list.addEventListener('click', function (event) {
   event.stopPropagation();
});
