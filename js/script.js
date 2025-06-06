const list = document.getElementById('list'),
  navLinks = document.getElementById('nav-links'),
  close = document.getElementById('close'),
  changeIcon = (icon) => icon.classList.toggle('bi-x-lg');
list.onclick = function () {
  navLinks.classList.toggle('active');
};
document.addEventListener('click', function (e) {
  if (!list.contains(e.target) && e.target.id !== 'nav-links') {
    navLinks.classList.remove('active');
    close.classList.remove('bi-x-lg');
  }
});
let darkMode = localStorage.getItem('dark-mode');
const themeSwitch = document.getElementById('theme-switch'),
  enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
  },
  disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
  };
if (darkMode === 'active') enableDarkMode();
themeSwitch.addEventListener('click', () => {
  darkMode = localStorage.getItem('dark-mode');
  darkMode !== 'active' ? enableDarkMode() : disableDarkMode();
});

document.getElementById('year').textContent = new Date().getFullYear();
