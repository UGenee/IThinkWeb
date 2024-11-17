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
      document.querySelector(".dropdown-button").addEventListener("click", function () {
        const nav = document.querySelector(".nav");
        nav.classList.toggle("show");
      });
    })
    .catch((error) => console.error("Error loading navigation:", error));
}

window.onload = loadNav;


    // Function to handle form submission
    function submitForm(event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(event.target); // Create a FormData object from the form
      const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

      fetch('/process-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the form data as JSON
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Display success message
          document.getElementById('responseMessage').innerText = data;
          document.getElementById('reviewForm').reset(); // Optionally reset the form
          fetchReviews(); // Refresh the reviews after submission
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          document.getElementById('responseMessage').innerText = 'Error submitting review.';
        });
    }

    // Function to fetch reviews from the server
    function fetchReviews() {
      fetch("/reviews")
        .then((response) => response.json())
        .then((data) => {
          const carouselInner = document.querySelector(".carousel-inner");
          carouselInner.innerHTML = ""; // Clear existing static content

          data.forEach((review, index) => {
            // Create a new carousel item
            const carouselItem = document.createElement("div");
            carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`; // Set the first item as active
            carouselItem.innerHTML = `
                <div class="text">
                  <h2>${review.review_name}</h2>
                  <p>${review.review_message}</p>
                </div>
              `;

            // Add the carousel item to the inner carousel container
            carouselInner.appendChild(carouselItem);
          });

          // Now that the items are loaded, reinitialize the slides array
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
            document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
          }

          function nextSlide() {
            showSlide(currentSlide + 1);
          }

           function prevSlide() {
            showSlide(currentSlide - 1);
          }

          // Assign the functions to the buttons
          document.querySelector(".carousel-control.next").addEventListener("click", nextSlide);
          document.querySelector(".carousel-control.prev").addEventListener("click", prevSlide);
        })
                .catch((err) => console.error("Error fetching reviews:", err));
            }

            // Fetch reviews when the page loads
            document.addEventListener('DOMContentLoaded', fetchReviews);
