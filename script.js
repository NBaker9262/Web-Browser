const API_KEY = "AIzaSyDUZBZ450jIXn8IgVIq9ll9aoGgxnh6PY8"; // Replace with your API key
const SEARCH_ENGINE_ID = "440a21345affa4c4f"; // Replace with your Custom Search Engine ID

function searchGoogle() {
    const query = document.getElementById("searchInput").value;
    if (!query) return;
    
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${SEARCH_ENGINE_ID}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (!results) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result");

        resultItem.innerHTML = `
            <a href="${result.link}" target="_blank">${result.title}</a>
            <p>${result.snippet}</p>
        `;

        resultsDiv.appendChild(resultItem);
    });
}
