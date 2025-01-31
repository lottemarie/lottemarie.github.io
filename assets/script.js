document.addEventListener("DOMContentLoaded", () => {
  // Define image galleries for each planet
  const galleryImages = {
    planet1: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
    planet2: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet3: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
    planet4: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet5: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
    planet6: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet7: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
    planet8: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
    planet9: ["assets/images/IMG_7365.jpg", "assets/images/IMG_7366.jpg", "assets/images/IMG_7367.jpg"],
    planet10: ["assets/images/IMG_7368.jpg", "assets/images/IMG_7369.PNG", "assets/images/IMG_7370.PNG"],
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
function Randomiser(el, count, delay) {
  this.element = el;
  this.originalText = el.textContent || el.innerText || '';
  this.places = [];
  this.currentText = [];
  this.count = count || 1;   // iterations before fixing a character
  this.delay = delay || 100; // milliseconds between updates
  this.iteration = 0;
  this.startTime = new Date();

  var i = this.originalText.length;

  while (i--) {
    this.places[i] = [i];
  }
}

Randomiser.prototype.randomise = function() {
  var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var i = this.places.length;

  while (i--) {
    this.currentText[this.places[i]] = charSet.charAt((Math.random() * charSet.length) | 0);
  }
  this.iteration += 1;
}

Randomiser.prototype.setContent = function() {
  var t = this.currentText.join('');

  if (typeof this.element.textContent == 'string') {
    this.element.textContent = t;
  } else {
    this.element.innerText = t;
  }
}

Randomiser.prototype.run = function() {
  var n;
  var temp = [];

  // If first run, randomise to initiate
  if (!this.iteration) {
    this.randomise();
  }

  // If there are places left
  if (this.places.length) {

    // If reached count, randomly remove one place and set its character
    // to the original value
    if (!(this.iteration % this.count)) {
      n = this.places.splice((Math.random() * this.places.length|0), 1)[0];
      this.currentText[n] = this.originalText.charAt(n);
    }

    // Randomise the string and call itself
    this.randomise(); 
    this.setContent();
    var randomiser = this;
    setTimeout(function(){randomiser.run();}, this.delay); 
  }
  // If no places left, end
}

// Kick it off
var lineOne = new Randomiser(document.getElementById('line_01'));
lineOne.run();