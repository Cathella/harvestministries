const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  console.log('Menu toggle button clicked.');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});
