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

// PORTFOLIO
        let tasteSlideIndex = 1;
        let budgetSlideIndex = 1;

        // Initialize slideshows
        showSlides('taste', tasteSlideIndex);
        showSlides('budget', budgetSlideIndex);

        function showSlides(project, n) {
            let i;
            let slides = document.getElementById(`${project}Slideshow`).getElementsByClassName("mySlides");
            let dots = document.getElementById(`${project}Slideshow`).getElementsByClassName("dot");
            if (n > slides.length) {
                if (project === 'taste') tasteSlideIndex = 1;
                if (project === 'budget') budgetSlideIndex = 1;
            }
            if (n < 1) {
                if (project === 'taste') tasteSlideIndex = slides.length;
                if (project === 'budget') budgetSlideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[project === 'taste' ? tasteSlideIndex - 1 : budgetSlideIndex - 1].style.display = "block";
            dots[project === 'taste' ? tasteSlideIndex - 1 : budgetSlideIndex - 1].className += " active";
        }

        function plusSlides(project, n) {
            if (project === 'taste') {
                showSlides('taste', tasteSlideIndex += n);
            } else if (project === 'budget') {
                showSlides('budget', budgetSlideIndex += n);
            }
        }

        function currentSlide(project, n) {
            if (project === 'taste') {
                showSlides('taste', tasteSlideIndex = n);
            } else if (project === 'budget') {
                showSlides('budget', budgetSlideIndex = n);
            }
        }
