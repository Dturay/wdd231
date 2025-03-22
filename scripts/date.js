const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();

currentyear.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

// Create a new Date object
const date = new Date(lastModified);

const formattedDate = date.toLocaleDateString("en-GB"); // d/m/y format
const formattedTime = date.toLocaleTimeString("en-GB", { hour12: false }); // 24-hour format

// Set the text content of the p element
const dateElement = document.getElementById("datemodified");
dateElement.textContent = `Last Date Modified: ${formattedDate} ${formattedTime}`;
