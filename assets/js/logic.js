let theme = localStorage.getItem('theme') || "light";

// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const screenModeButton = document.querySelector('#submit');
    const backButton = document.querySelector('#back-button');

    console.log(theme);

    theme = theme === 'light' ? 'dark' : 'light';

    if (theme === 'dark') {
        // Switch to dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        backButton.style.backgroundColor = "white";
        backButton.style.color = "black";
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        backButton.style.backgroundColor = "black";
        backButton.style.color = "white";
        localStorage.setItem('theme', 'light');
    }
}

// Event listener for mode toggle button
document.querySelector('#screen-mode').addEventListener('click', toggleMode);

// Function to set initial theme on page load
function setInitialTheme() {
    const body = document.body;
    const screenModeButton = document.querySelector('#screen-mode');
    const backButton = document.querySelector('#back-button');

    if (theme === 'dark') {
        // Set initial theme to dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        backButton.style.backgroundColor = "white";
        backButton.style.color = "black";
    } else {
        // Set initial theme to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        backButton.style.backgroundColor = "black";
        backButton.style.color = "white";
    }
}

// Call setInitialTheme() when the page loads
window.addEventListener('load', setInitialTheme);
