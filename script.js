// Cursor Animation
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Toggle Menu
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Dark / Light Mode
const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Age Gate
function enterSite() {
  document.getElementById('ageGate').style.display = "none";
}
