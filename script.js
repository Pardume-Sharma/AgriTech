var darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
var sectionsToToggle = ['features', 'ftr'];

document.getElementById('mode').addEventListener('click', toggleDarkMode);

// Set initial state
updateDarkMode();

function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    updateDarkMode();
}

function updateDarkMode() {
    if (darkModeEnabled) {
        // Dark mode
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';

        sectionsToToggle.forEach(function (sectionId) {
            var section = document.getElementById(sectionId);
            if (section) {
                section.style.backgroundColor = '#000000';
            }
        });
    } else {
        // Default mode
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';

        sectionsToToggle.forEach(function (sectionId) {
            var section = document.getElementById(sectionId);
            if (section) {
                section.style.backgroundColor = '#f0f0f0';
            }
        });
    }

    // Save the current state to local storage
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
}

