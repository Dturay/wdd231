document.addEventListener("DOMContentLoaded", function () {
  // Form submission handler
  document
    .getElementById("contactForm")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const contactData = { name, email, message };
      localStorage.setItem("contactData", JSON.stringify(contactData));

      const formResponse = document.getElementById("formResponse");
      formResponse.textContent = `Thank you, ${name}. Your message has been received!`;

      // Clear form fields
      document.getElementById("contactForm").reset();
    });

  // Service Data
  const services = [
    {
      title: "Local Transportation",
      description: "Reliable and efficient transport within the city.",
      imgSrc: "assets/images/local-transport.jpg",
    },
    {
      title: "Long-Distance Transport",
      description: "Safe and timely delivery across regions.",
      imgSrc: "assets/images/long-distance.jpg",
    },
    {
      title: "Freight Services",
      description: "Logistics and freight solutions for businesses.",
      imgSrc: "assets/images/freight.jpg",
    },
    {
      title: "Moving Solutions",
      description: "Hassle-free moving services for your relocation needs.",
      imgSrc: "assets/images/moving.jpg",
    },
  ];

  // Populate Services Page
  if (document.getElementById("services-list")) {
    const servicesList = document.getElementById("services-list");
    services.forEach((service) => {
      const serviceItem = document.createElement("div");
      serviceItem.classList.add("service-item");
      serviceItem.innerHTML = `
                <h2>${service.title}</h2>
                <img src="${service.imgSrc}" alt="${service.title}" loading="lazy">
                <p>${service.description}</p>
            `;
      servicesList.appendChild(serviceItem);
    });
  }
});
