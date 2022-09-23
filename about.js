/* eslint-disable no-unused-vars */
const showMenu = document.querySelector('#burger');
const hideMenu = document.querySelector('#hideMenu');
const popup = document.querySelector('.mobileMenu');
const hamburgerListenItem = document.querySelectorAll('.linker');
const body = document.getElementsByTagName('body')[0];

function openMenu() {
  popup.style.visibility = 'visible';
  body.style.overflow = 'hidden';
}

function closeMenu() {
  popup.style.top = '-100%';
  popup.style.width = '50%';
  window.setTimeout(() => {
    window.location.reload();
  }, 10);
}

showMenu.addEventListener('click', openMenu);
hideMenu.addEventListener('click', closeMenu);
hamburgerListenItem.forEach((element) => {
  element.addEventListener('click', closeMenu);
});