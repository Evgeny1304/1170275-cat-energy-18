var nav = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--closed')){
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--open');
  } else {
    nav.classList.remove('navigation--open');
    nav.classList.add('navigation--closed');
  }
});
