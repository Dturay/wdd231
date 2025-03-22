document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navigation = document.getElementById("navigation");

  const initSmallScreenNav = () => {
    if (window.innerWidth < 768) {
      if (!document.getElementById("menu-toggle")) {
        // Create menu toggle button
        const menuToggle = document.createElement("button");
        menuToggle.id = "menu-toggle";
        menuToggle.setAttribute("aria-label", "Open Navigation");
        menuToggle.textContent = "☰";
        header.appendChild(menuToggle);

        // Show navigation on click
        menuToggle.addEventListener("click", () => {
          navigation.classList.add("active");

          // Add close button dynamically
          if (!document.getElementById("close-menu")) {
            const closeMenu = document.createElement("button");
            closeMenu.id = "close-menu";
            closeMenu.setAttribute("aria-label", "Close Navigation");
            closeMenu.textContent = "X";
            navigation.insertBefore(closeMenu, navigation.firstChild);

            // Hide navigation on click
            closeMenu.addEventListener("click", () => {
              navigation.classList.remove("active");
            });
          }
        });
      }
    }
  };

  // Initialize for small screens
  initSmallScreenNav();

  // Remove toggle functionality on large screens
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navigation.classList.remove("active"); // Hide navigation
      const menuToggle = document.getElementById("menu-toggle");
      const closeMenu = document.getElementById("close-menu");

      if (menuToggle) menuToggle.remove(); // Remove toggle button
      if (closeMenu) closeMenu.remove(); // Remove close button
    } else {
      initSmallScreenNav(); // Re-initialize for small screens
    }
  });
});
