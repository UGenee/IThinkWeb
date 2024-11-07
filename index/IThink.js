// NAVIGATION BAR
function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        });
}
    window.onload = loadNav;

document.querySelector('.dropdown-button').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
});

// HOME PAGE
function start() { // Container Button very start of the home page
    window.open("/index/test.html");
}

function Home() {
    window.open("/index/home.html")
}


