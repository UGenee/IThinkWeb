function initializeSearch() {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    const suggestions = {
        "Home": "/index/index.html",
        "Portfolio": "/index/portfolio.html",
        "Contacts": "/index/contact.html",
        "About": "/index/about.html"
    };

    searchInput.addEventListener("input", function () {
        const input = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (input) {
            const filteredSuggestions = Object.keys(suggestions).filter(suggestion =>
                suggestion.toLowerCase().includes(input)
            );

            filteredSuggestions.forEach(suggestion => {
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

function loadNavigation() {
    fetch('/index/nav.html')
        .then(response => response.text())
        .then(template => {
            document.getElementById('nav-container').innerHTML = template;
            initializeSearch();
        })
        .catch(error => console.error('Error loading navigation template:', error));
}
window.onload = function () {
    loadNavigation();
};
