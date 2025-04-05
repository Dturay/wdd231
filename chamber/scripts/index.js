// home.js

// Set copyright year
const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;

// Set last modified date
const lastModifiedDate = new Date(document.lastModified);
document.getElementById("last-modified").textContent =
  lastModifiedDate.toLocaleString();

// Load Weather Data
function loadWeatherData() {
    const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your actual API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Timbuktu&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherData = `
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-data').innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-data').innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
}

// Call the loadWeatherData function
loadWeatherData();

// Example function to load member spotlights from JSON data
function loadMemberSpotlights(jsonData) {
  const spotlightContainer = document.getElementById("spotlight-container");

  // Clear the container first
  spotlightContainer.innerHTML = "";

  jsonData.forEach((member) => {
    const memberCard = `
            <div class="member-card">
                <img src="${member.image}" alt="${member.name} Logo">
                <h2>${member.name}</h2>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>${member.extra_info}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `;
    spotlightContainer.innerHTML += memberCard;
  });
}

// Fetching the JSON data
async function fetchMemberData() {
  // Assuming this JSON data is in `data/members.json`
  const response = await fetch("data/members.json");
  const jsonData = await response.json();
  loadMemberSpotlights(jsonData);
}

// Call the function to fetch member data
fetchMemberData();
