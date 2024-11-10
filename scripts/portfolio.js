    // NAVIGATION BAR
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


let slideIndices = {
        taste: 1,
        budget: 1
    };
    
    showSlides('taste', slideIndices.taste);
    showSlides('budget', slideIndices.budget);

    function showSlides(project, n) {
        let slides = document.getElementById(`${project}Slideshow`).getElementsByClassName("mySlides");
        if (n > slides.length) slideIndices[project] = 1;
        if (n < 1) slideIndices[project] = slides.length;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndices[project] - 1].style.display = "block";
    }

    function plusSlides(project, n) {
        slideIndices[project] += n;
        showSlides(project, slideIndices[project]);
    }
