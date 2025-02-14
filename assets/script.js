document.addEventListener("DOMContentLoaded", () => {
  // Define image galleries for each planet
  const galleryImages = {
    planet1: ["assets/images/08_Dalma.jpg", "assets/images/07_Dalma.jpg", "assets/images/02_Dalma.jpg", "assets/images/09_Dalma.jpg", "assets/images/01_Dalma.jpg", "assets/images/04_Dalma_Info.png"],
    planet2: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet3: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
    planet4: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet5: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
    planet6: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet7: ["assets/images/02_Anna.JPG", "assets/images/01_Anna.JPG", "assets/images/08_Anna.JPG", "assets/images/06_Anna.png", "assets/images/10_Anna.JPG", "assets/images/05_Anna_Info.png"],
    planet8: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet9: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
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

  // Setup the gallery structure
  popupGallery.classList.add("popup-gallery");
  galleryImage.classList.add("popup-image"); 
  popupTitle.classList.add("popup-title");
  popupText.classList.add("popup-text"); 
  prevButton.textContent = "<";
  nextButton.textContent = ">";
  prevButton.classList.add("gallery-button", "prev");
  nextButton.classList.add("gallery-button", "next");
  closeButton.textContent = "X";
  closeButton.classList.add("close-popup");

  // Append elements to the popup
  popupGallery.appendChild(prevButton);
  popupGallery.appendChild(galleryImage);
  popupGallery.appendChild(nextButton);
  popupContent.appendChild(closeButton);
  popupContent.appendChild(popupGallery);

  let currentIndex = 0;
  let images = [];

  // Hide popup
  const hidePopup = () => {
    popup.classList.remove("visible");
    popupText.classList.remove("visible");
  };

  // Add event listeners to planets
  document.querySelectorAll(".planet").forEach((planet) => {
    planet.addEventListener("click", () => {
      const planetId = planet.dataset.popup; // Get planet's specific ID

      // Ensure there are images for the selected planet
      if (!galleryImages[planetId]) {
        alert(`No images found for ${planetId}`);
        return;
      }

      // Set images for the selected planet
      images = galleryImages[planetId];
      currentIndex = 0;

      // Update popup content
      popupTitle.textContent = `Gallery for ${planetId}`;
      popupText.textContent = `Details about ${planetId}.`;
      galleryImage.src = images[currentIndex];

      // Show popup
      popup.classList.add("visible");
    });
  });

  // Show selected image
  const showImage = (index) => {
    if (index < 0) {
      currentIndex = images.length - 1; // Loop to last image
    } else if (index >= images.length) {
      currentIndex = 0; // Loop back to first image
    } else {
      currentIndex = index;
    }
    galleryImage.src = images[currentIndex];
  };


  // Button event listeners for image navigation
  prevButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));

  // Close popup on clicking close button or outside popup content
  closeButton.addEventListener("click", hidePopup);
  popup.addEventListener("click", (e) => {
    if (!popupContent.contains(e.target)) {
      hidePopup();
    }
  });
});

