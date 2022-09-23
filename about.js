const mobileNav = document.querySelectorSelector('.mobileMenu');
const body = document.getElementsByTagName('body')[0];
const hamburgerClose = document.getElementById('hideMenu');
const hamburgerOpen = document.getElementById('mmm');
const hamburgerListenItem = document.querySelectorAll('link1');

function openMenu() {
  mobileNav.style.visibility = 'visible';
  body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileNav.style.visibility = 'hidden';
  body.style.overflow = 'auto';
}

hamburgerClose.addEventListener('click', closeMenu);
hamburgerOpen.addEventListener('click', openMenu);
hamburgerListenItem.forEach((element) => {
  element.addEventListener('click', closeMenu);
});