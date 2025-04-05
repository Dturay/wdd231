function displayYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyright-year").textContent = currentYear;
}

function displayLastModified() {
  document.getElementById("last-modified").textContent = document.lastModified;
}

// Initialize the page
displayYear();
displayLastModified();