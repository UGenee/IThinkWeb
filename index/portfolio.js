function loadNav() {
  // Fetch the HTML content of the navigation bar
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-container").innerHTML = data;

      // Dynamically load the CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "nav.css"; // Path to your CSS file
      document.head.appendChild(link);

      // Initialize search functionality (assuming it's defined somewhere)
      initializeSearch();

      // Toggle the navigation menu when the dropdown button is clicked
      document
        .querySelector(".dropdown-button")
        .addEventListener("click", function () {
          const nav = document.querySelector(".nav");
          nav.classList.toggle("show");
        });
    })
    .catch((error) => console.error("Error loading navigation:", error));
}

window.onload = loadNav;

let slideIndices = {
  taste: 1,
  budget: 1,
};

showSlides("taste", slideIndices.taste);
showSlides("budget", slideIndices.budget);

function showSlides(project, n) {
  let slides = document
    .getElementById(`${project}Slideshow`)
    .getElementsByClassName("mySlides");
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
