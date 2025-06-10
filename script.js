// Date and Time Widget Functionality
function updateDateTime() {
    const timeElem = document.getElementById('time');
    const dateElem = document.getElementById('date');
    const now = new Date();
        
    // Format the time to show only hours and minutes
    timeElem.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
    // Format the date as a locale date string
    dateElem.textContent = now.toLocaleDateString();
}

updateDateTime();
setInterval(updateDateTime, 1000);
      
// Set initial theme based on localStorage or system preferences
const defaultTheme = (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light';
          
// Get stored theme if available; otherwise use the default
const storedTheme = localStorage.getItem('theme');
const themeToApply = storedTheme ? storedTheme : defaultTheme;
      
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
      
// Initialize theme
setTheme(themeToApply);
      
// Toggle theme on button click and save the new theme in localStorage
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});