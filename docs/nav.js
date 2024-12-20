function initializeSearch() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  const suggestions = {
    Home: "index.php",
    Portfolio: "portfolio.php",
    Contacts: "contact.php",
    About: "about.php",
    Review: "review.php",
    "Artificial Intelligence": "AI.php",
    "Computer Engineering": "ComEng.php",
    "Computer Science": "CompSci.php",
    Cybersecurity: "CyberSecurity.php",
    "Data Science": "Data-Science.php",
    "Information Technology": "IT.php",
    Java: "Java-article.php",
    "Software Engineering": "Software-eng.php",
    "Mobile App Development": "Moble-App.php",
    "Web Development": "WEB-DEV.php",
    "Network Engineering": "Network-ENG.php",
    Courses: "course-list.php",
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
  fetch("nav.php")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-container").innerHTML = data;

      // Dynamically load the CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "template.css"; // Path to your CSS file
      document.head.appendChild(link);

      initializeSearch();

      document
        .querySelector(".dropdown-button")
        .addEventListener("click", function () {
          const nav = document.querySelector(".nav");
          nav.classList.toggle("show");

          if (nav.classList.contains("show")) {
            nav.style.height = "450px";
          } else {
            nav.style.height = "60px";
          }
        });
    })
    .catch((error) => console.error("Error loading navigation:", error));
}

window.onload = loadNav;
