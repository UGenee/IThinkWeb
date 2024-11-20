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

      // Initialize search functionality (if defined)
      // initializeSearch();

      // Toggle the navigation menu when the dropdown button is clicked
      const dropdownButton = document.querySelector(".dropdown-button");
      if (dropdownButton) {
        dropdownButton.addEventListener("click", function () {
          const nav = document.querySelector(".nav");
          nav?.classList.toggle("show");
        });
      }
    })
    .catch((error) => console.error("Error loading navigation:", error));
}

function setupCarousel() {
  const slides = document.querySelectorAll(".carousel-item");
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    const offset = -currentSlide * 100;
    const carouselInner = document.querySelector(".carousel-inner");
    if (carouselInner) {
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  }

  document
    .querySelector(".carousel-control.next")
    ?.addEventListener("click", () => showSlide(currentSlide + 1));
  document
    .querySelector(".carousel-control.prev")
    ?.addEventListener("click", () => showSlide(currentSlide - 1));
}

// Load the navigation bar and initialize the carousel
window.onload = () => {
  loadNav();
  setupCarousel();
};

// HOME PAGE
function start() {
  // Container Button very start of the home page
  window.open("course-list.html");
}

function Home() {
  window.open("index.html");
}
