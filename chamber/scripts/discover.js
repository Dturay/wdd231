// Function to fetch the attractions data from discover.json and populate cards in the grid
document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.querySelector(".grid-container"); // Select the grid container

  // Fetch the JSON data from discover.json
  fetch("data/discover.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Error handling for a bad response
      }
      return response.json(); // Parse the JSON data
    })
    .then((attractionsData) => {
      // Loop through each attraction and create HTML elements
      attractionsData.forEach((attraction) => {
        const cardContent = `
                    <div class="attraction-card">
                        <h2>${attraction.name}</h2>
                        <figure>
                            <img src="${attraction.image}" alt="${attraction.name}">
                        </figure>
                        <address>${attraction.address}</address>
                        <p>${attraction.description}</p>
                        <button onclick="alert('More information coming soon!')">Learn More</button>
                    </div>
                `;
        gridContainer.innerHTML += cardContent; // Append the card to the grid container
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      ); // Log any fetch errors
    });
});

// Handle localStorage for visitor messages
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
const messageElement = document.querySelector(".sidebar");

if (!lastVisit) {
  messageElement.innerHTML = "Welcome! Let us know if you have any questions.";
} else {
  const daysVisited = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysVisited < 1) {
    messageElement.innerHTML = "Back so soon! Awesome!";
  } else {
    messageElement.innerHTML = `You last visited ${daysVisited} day${
      daysVisited > 1 ? "s" : ""
    } ago.`;
  }
}

localStorage.setItem("lastVisit", now); // Update the last visit date
