document.addEventListener("DOMContentLoaded", () => {
  // Define image galleries for each planet
  const galleryImages = {
    planet1: ["assets/images/08_Dalma.jpg", "assets/images/07_Dalma.jpg", "assets/images/02_Dalma.jpg", "assets/images/09_Dalma.jpg", "assets/images/01_Dalma.jpg", "assets/images/04_Dalma_Info.png"],
    planet2: ["assets/images/Call_Me_4.JPG", "assets/images/Call_Me_1.JPG", "assets/images/Call_Me_3.JPG", "assets/images/Call_Me_2.JPG"],
    planet3: ["assets/images/Soma_6.jpg","assets/images/Soma_8.png", "assets/images/Soma_1.jpg", "assets/images/Soma_2.jpg", "assets/images/Soma_3.jpg", "assets/images/Soma_4.jpg", "assets/images/Soma_5.jpg"],
    planet4: ["assets/images/hawehrtsich_6.png", "assets/images/hawehrtsich_8.png", "assets/images/IMG_7370.PNG"],
    planet5: ["assets/images/LivePS_9.jpg", "assets/images/LivePS_1.jpg", "assets/images/LivePS_7.jpg", "assets/images/LivePS_4.jpg", "assets/images/LivePS_3.jpg"],
    planet6: ["assets/images/hawburgerfonts_8.jpeg","assets/images/hawburgerfonts_1.jpeg", "assets/images/hawburgerfonts_6.jpeg", "assets/images/hawburgerfonts_7.jpeg"],
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
  const galleryInfoText = document.getElementById("gallery-info-text");
  const planetGalleryInfo = {
    planet1: "+++ »Leute machen Kleider« +++ Dalma Neldner (@dalma.nel) +++ »Freie Themen« SoSe24 +++ KoDe&Mode +++ Die Fotoreihe zeigt Mode-Studierende aus Hamburg zusammen mit ihren Werken. Die Aufnahmen wurden anschließend mit einem Beamer auf durchsichtige Vorhänge projiziert, wodurch Bild und Material ineinanderfließen. +++",
    planet2: "+++ »Call Me« +++ Jährlich wechselndes Team von 4-8 KoDe Studierenden (@call.me.ausstellung) +++ Fotos: Call Me #8 WiSe24/25 +++ Gleichnamiger Kurs im vorherigen WiSe +++ Bachelorstudierende&Absolvent*innen KoDe +++ Die Call Me ist eine Ausstellungsreihe bei der Absolvent*innen des Studiengangs Kommunikationsdesign jährlich zu Beginn des Sommersemesters ihre Abschlussarbeit präsentieren. Die Ausstellung entwickelte sich in den letzten Jahren immer mehr zu einer Plattform für den Austausch zwischen Student:innen, Dozent:innen und Designer:innen aus der Praxis. +++",
    planet3: "+++ »Sóma« +++ Ein Film von: Elina Baumann(@pitchingdaisies), Salya Fink(@sayla_f), Lea Grabosch(@leastrying), Luca Punke(@punkeluca), Leonie Renner(@leonierenner_) und Giacomo Wiesenberg(@giacomo.alleine) +++ «restisting bodies - bodies in resistance» WiSe22/23 +++ KoDe&Kostüm&Medientechnik&Media Systems +++ Im Rahmen des interdisziplinären und studiengangsübergreifenden Seminars «restisting bodies - bodies in resistance» im Wintersemester 22/23 ist unser Kurzfilm «sóma» entstanden. Zu sechst haben wir uns inhaltlichen Themen wie Körperbewusstsein, physischer Kommunikation sowie Selbst- und Fremdwahrnehmung angenommen und diese in Zusammenarbeit mit unseren PerformerInnen filmisch umgesetzt. Mit unterschiedlichen Expertisen und der Kombination aus Fachbereichen der Studiengänge Medientechnik, Media Systems, Kostüm- und Kommunikationsdesign, haben wir uns den vielseitigen Anforderungen des Filmemachens angenommen und erste eigene Erfahrungen sammeln können. Wir durften dabei lernen, was es bedeutet, ein filmisches Projekt von Anfang bis Ende zu planen und zu realisieren und wie wichtig die Zusammenarbeit und der Austausch zwischen den kreativen, technischen, administrativen und logistischen Gewerken ist. +++",
    planet4: "»hawehrtsich«",
    planet5: "+++ »Live-Photoshoot« +++ Charly Krüger (@ckrueger.png), Luca Engels (@lucamarieengels) +++ WiSe24/25 +++ KoDe&Mode +++ Im Rahmen des Rundgangs an der Armgartstraße am 14. Februar 2025 haben Luca Engels und Charly Krüger im Eingangsbereich eine Live-Fotosession zur Modeperformance manualMODE inszeniert. Die Modestudierenden konnten ihre Looks und Models in Szene setzen, während wir sie in Look- und Detailaufnahmen fotografisch festhielten. Besuchende des Rundgangs konnten uns dabei live über die Schulter schauen. ",
    planet6: "+++ »Hamburger Fonts« +++ Alexander Delaporte (@alexdeladose) +++ Let's Platform« WiSe24/25 +++ Editorial&Type +++ »Hamburger Fonts« ist eine digitale Schriftenbibliothek von und für Studierende der HAW Hamburg. Die Plattform sammelt und archiviert Schriftarten, die im Rahmen von Kursen entstanden sind, und macht sie allgemein zugänglich. Ziel ist es, typografische Arbeiten sichtbar zu machen, den Austausch unter Gestaltenden zu fördern und Schriftarten für die freie Nutzung in hochschulinternen Projekten bereitzustellen. +++",
    planet7: "+++ »Samt-Magazin« +++ Wechselndes Team von KoDe Studierenden (@samt_magazin) +++ Fotos: Samt #4 2024 +++ Editorial&Department Design +++ Das Samt-Magazin ist ein von Studierenden initiiertes Magazin. Es zeigt Semester- und Abschlussarbeiten aus den Bereichen Illustration, Modedesign, Textildesign, Kostümdesign und Kommunikationsdesign des Department Design an der HAW Hamburg. Der Name „Samt“ leitet sich ab von dem Wort „gesamt“ ab und versucht, einen ganzheitlichen Überblick über die Projekte des Department Design zu schaffen. +++",
   

  };  
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

      galleryInfoText.textContent = planetGalleryInfo[planetId] || "No description available.";
    

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

