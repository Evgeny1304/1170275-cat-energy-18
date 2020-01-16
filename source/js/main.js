var nav = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');
var map = document.querySelector('.contact__map');

nav.classList.remove('navigation--nojs');
map.classList.remove('contact__map--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--closed')){
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--open');
  } else {
    nav.classList.remove('navigation--open');
    nav.classList.add('navigation--closed');
  }
});
