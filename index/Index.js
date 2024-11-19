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

/* Carousel */
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// HOME PAGE
function start() {
  // Container Button very start of the home page
  window.open("home.html");
}

function Home() {
  window.open("home.html");
}
