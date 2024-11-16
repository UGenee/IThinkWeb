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

/* Carousel */
let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');

        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            const offset = -currentSlide * 100;
            document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }


// HOME PAGE
function start() { // Container Button very start of the home page
    window.open("test.html");
}

function Home() {
    window.open("home.html");
}


