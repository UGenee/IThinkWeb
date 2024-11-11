// HTML elements
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Sample search suggestions with associated URLs
const suggestions = {
    "Home": "/index/index.html",
    "Portfolio": "/index/portfolio.html",
    "Contacts": "/index/contact.html",
    "About": "/index/about.html"
};

// Display suggestions based on input
searchInput.addEventListener("input", function () {
    const input = searchInput.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear previous results

    if (input) {
        // Filter suggestions based on input
        const filteredSuggestions = Object.keys(suggestions).filter(suggestion =>
            suggestion.toLowerCase().includes(input)
        );

        // Show filtered suggestions as clickable links
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement("a");
            suggestionElement.href = suggestions[suggestion]; // Set URL for redirection
            suggestionElement.textContent = suggestion;
            suggestionElement.addEventListener("click", () => {
                searchInput.value = suggestion; // Set input value to selected suggestion
                searchResults.innerHTML = ""; // Clear results on selection
            });
            searchResults.appendChild(suggestionElement);
        });

        // If no suggestions, show a "No results found" message
        if (filteredSuggestions.length === 0) {
            const noResult = document.createElement("p");
            noResult.textContent = "No results found";
            searchResults.appendChild(noResult);
        }
    }
});
