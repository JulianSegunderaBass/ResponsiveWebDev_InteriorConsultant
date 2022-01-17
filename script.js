const openNavBtn = document.querySelector('.mobile-nav-btn');
const navLinks = document.querySelectorAll('.nav-link');
const closeNavBtn = document.querySelector('.close');
const mobileNav = document.querySelector('.nav-links');

openNavBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
});
closeNavBtn.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});