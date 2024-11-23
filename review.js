function fetchReviews() {
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
    document.querySelector(
      ".carousel-inner"
    ).style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    console.log("Next slide clicked"); // Debugging log
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    console.log("Prev slide clicked"); // Debugging log
    showSlide(currentSlide - 1);
  }

  // Ensure the buttons exist
  const nextButton = document.querySelector(".carousel-control.next");
  const prevButton = document.querySelector(".carousel-control.prev");

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  } else {
    console.log("Buttons not found in the DOM!");
  }

  // Initialize the first slide
  showSlide(currentSlide);
}

// Fetch reviews when the page loads
document.addEventListener("DOMContentLoaded", fetchReviews);
