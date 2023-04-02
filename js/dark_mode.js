const toggleSwitch = document.querySelector('#dark-mode-toggle');
const html = document.documentElement;

function switchTheme(e) {
  if (e.target.checked) {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Set default theme to light
if (!localStorage.getItem('theme')) {
  html.setAttribute('data-theme', 'light');
} else if (localStorage.getItem('theme') === 'dark') {
  html.setAttribute('data-theme', 'dark');
  toggleSwitch.checked = true;
}
