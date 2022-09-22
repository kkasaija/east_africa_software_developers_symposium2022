/* eslint-disable no-unused-vars */
const showMenu = document.querySelector('#burger');
const hideMenu = document.querySelector('#hideMenu');
const popup = document.querySelector('.mobile-menu');

function openMenu() {
  popup.style.display = 'flex';
}
function closeMenu() {
  popup.style.top = '-100%';
  popup.style.width = '50%';
  window.setTimeout(() => {
    window.location.reload();
  }, 50);
}
showMenu.addEventListener('click', openMenu);
hideMenu.addEventListener('click', closeMenu);