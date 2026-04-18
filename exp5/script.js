const clockDisplay = document.getElementById('clock');
const dateDisplay = document.getElementById('date');
const body = document.getElementById('body');

// Theme Object
const themes = {
    light: {
        bg: '#ffffff',
        text: '#333333',
        btnBg: '#eeeeee',
        btnText: '#333333'
    },
    dark: {
        bg: '#1a1a1a',
        text: '#00ff00',
        btnBg: '#333333',
        btnText: '#ffffff'
    }
};

function applyTheme(themeName) {
    const theme = themes[themeName];
    body.style.backgroundColor = theme.bg;
    body.style.color = theme.text;
    document.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = theme.btnBg;
        btn.style.color = theme.btnText;
    });
}

function updateTime() {
    const now = new Date();
    
    // Time format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Date format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString(undefined, options);
}

// Event Listeners
document.getElementById('light-btn').addEventListener('click', () => applyTheme('light'));
document.getElementById('dark-btn').addEventListener('click', () => applyTheme('dark'));

// Initialize
setInterval(updateTime, 1000);
updateTime();
applyTheme('dark'); // Start with dark mode
