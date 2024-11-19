function initializeSearch() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  const suggestions = {
    Home: "home.html",
    Portfolio: "portfolio.html",
    Contacts: "contact.html",
    About: "about.html",
    Review: "review.html",
  };

  searchInput.addEventListener("input", function () {
    const input = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (input) {
      const filteredSuggestions = Object.keys(suggestions).filter(
        (suggestion) => suggestion.toLowerCase().includes(input)
      );

      filteredSuggestions.forEach((suggestion) => {
        const suggestionElement = document.createElement("a");
        suggestionElement.href = suggestions[suggestion];
        suggestionElement.textContent = suggestion;
        suggestionElement.addEventListener("click", () => {
          searchInput.value = suggestion;
          searchResults.innerHTML = "";
        });
        searchResults.appendChild(suggestionElement);
      });

      if (filteredSuggestions.length === 0) {
        const noResult = document.createElement("p");
        noResult.textContent = "No results found";
        searchResults.appendChild(noResult);
      }
    }
  });
}


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
