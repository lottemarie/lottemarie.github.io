document.addEventListener("DOMContentLoaded", () => {

  const galleryImages = {
    planet1: [
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
    ],
    planet2: [
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
    ],
    planet3: [
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
    ],
    planet4: [
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
    ],
    five: [
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
    ],
    six: [
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
    ],
    seven: [
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
      "assets/images/IMG_7365.jpg",
    ],
    eight: [
      "assets/images/neptune1.jpg",
      "assets/images/neptune2.jpg",
      "assets/images/neptune3.jpg",
    ],
    nine: [
      "assets/images/pluto1.jpg",
      "assets/images/pluto2.jpg",
      "assets/images/pluto3.jpg",
    ],
  };

  
  // Popup Elements
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  const popupTitle = document.getElementById("popup-title");
  const popupText = document.getElementById("popup-text");
  const popupGallery = document.createElement("div");
  const galleryImage = document.createElement("img");
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");
  const closeButton = document.createElement("button");

  // Gallery Setup
  popupGallery.classList.add("popup-gallery");
  prevButton.textContent = "<";
  nextButton.textContent = ">";
  prevButton.classList.add("gallery-button", "prev");
  nextButton.classList.add("gallery-button", "next");

  popupGallery.appendChild(prevButton);
  popupGallery.appendChild(galleryImage);
  popupGallery.appendChild(nextButton);
  popupContent.appendChild(popupGallery);

  let currentIndex = 0;
  let images = [];

  // Hide Popup
  const hidePopup = () => {
    popup.style.display = "none";
  };

   // Add click listeners to planets
   document.querySelectorAll('.planet').forEach((planet) => {
    planet.addEventListener('click', () => {
      const planetId = planet.dataset.popup; // Identify pluto's specific popup

   // Add click listeners to plutos
   document.querySelectorAll('.pluto').forEach((pluto) => {
    pluto.addEventListener('click', () => {
      const plutoId = pluto.dataset.popup; // Identify pluto's specific popup

      // Customize content dynamically for each planet
      popupTitle.textContent = `Gallery for ${planetId}`;
      popupText.textContent = `Details about ${planetId}.`;

      // Customize content dynamically for each pluto
      popupTitle.textContent = `Gallery for ${plutoId}`;
      popupText.textContent = `Details about ${plutoId}.`;

      // Reset to first image
      currentIndex = 0;
      galleryImage.src = images[currentIndex];

      // Show popup
      popup.classList.add('visible');
    });
  });

  // Carousel functionality
  const showImage = (index) => {
    if (index < 0) {
      currentIndex = images.length - 1; // Wrap around to last image
    } else if (index >= images.length) {
      currentIndex = 0; // Wrap around to first image
    } else {
      currentIndex = index;
    }
    galleryImage.src = images[currentIndex];
  };

  // Button event listeners
  prevButton.addEventListener('click', () => showImage(currentIndex - 1));
  nextButton.addEventListener('click', () => showImage(currentIndex + 1));

  // Close popup on clicking close button or outside popup content
  closeButton.addEventListener('click', () => popup.classList.remove('visible'));
  popup.addEventListener('click', (e) => {
    if (!popupContent.contains(e.target)) {
      popup.classList.remove('visible');
    }
  });
});