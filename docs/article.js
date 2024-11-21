function loadNav() {
  // Fetch the HTML content of the navigation bar
  fetch("nav.php")
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
