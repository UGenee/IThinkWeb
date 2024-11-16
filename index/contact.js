// LOAD NAV
function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
            initializeSearch(); // Initialize the search after the nav is loaded
            
            // Add event listener to the dropdown button
            document.querySelector('.dropdown-button').addEventListener('click', function() {
                const nav = document.querySelector('.nav');
                nav.classList.toggle('show');
            });
        });
}
window.onload = loadNav;

