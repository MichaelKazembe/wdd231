const plantContainer = document.querySelector("#plant-cards");
const showMoreBtn = document.querySelector("#show-more");
const cardModal = document.getElementById("card-modal");

let allPlants = [];
const initialDisplayCount = 3;

// Load plant data
async function loadPlants() {
  try {
    const response = await fetch("data/plants.json");
    if (!response.ok) throw new Error("Failed to Fetch Plants");
    allPlants = await response.json();
    displayPlants(allPlants.slice(0, initialDisplayCount));
  } catch (error) {
    console.error("Error loading plants:", error);  
  }
}

// Render cards and set up modal triggers
function displayPlants(plants) {
  plantContainer.innerHTML = "";

  plants.forEach((plant, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${plant.image || 'https://via.placeholder.com/200'}" alt="${plant.name}" class="card-image">
      <div class="card-content">
        <h3>${plant.name}</h3>
        <p>${plant.description}</p>
        <div class="card-details">
          <span><i class="fas fa-sun"></i> ${plant.light}</span>
          <span><i class="fas fa-tint"></i> ${plant.watering}</span>
        </div>
        <button id="card-btn"class="btn-primary" data-index="${index}">Learn More</button>
      </div>
    `;

    plantContainer.appendChild(card);
  });

  // Add modal event listeners
  document.querySelectorAll('#card-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      // Use the plants array passed to displayPlants, not allPlants
      const plant = plants[parseInt(this.dataset.index, 10)];
      showModal(plant);
    });
  });
}

// Show modal with more plant info
function showModal(plant) {
  cardModal.innerHTML = `
    <div class="modal-content modal-flex">
      <span class="modal-close" id="modal-close" tabindex="0" role="button" aria-label="Close">&times;</span>
      <div class="modal-img-col">
        <img src="${plant.image || 'https://via.placeholder.com/300'}" alt="${plant.name}">
      </div>
      <div class="modal-info-col">
        <h2>${plant.name}</h2>
        <p class="modal-desc">${plant.description}</p>
        <div class="modal-details-row">
          <div class="modal-detail"><i class="fas fa-sun"></i><span>${plant.light}</span></div>
          <div class="modal-detail"><i class="fas fa-tint"></i><span>${plant.watering}</span></div>
          ${plant.origin ? `<div class="modal-detail"><i class="fas fa-globe"></i><span>${plant.origin}</span></div>` : ""}
        </div>
        <div class="modal-details-row">
          ${plant.soil ? `<div class="modal-detail"><i class="fas fa-seedling"></i><span>${plant.soil}</span></div>` : ""}
          ${plant.temperature ? `<div class="modal-detail"><i class="fas fa-thermometer-half"></i><span>${plant.temperature}</span></div>` : ""}
          ${plant.humidity ? `<div class="modal-detail"><i class="fas fa-water"></i><span>${plant.humidity}</span></div>` : ""}
        </div>
      </div>
    </div>
  `;
  cardModal.style.display = "block";

  // Close modal logic
  const closeBtn = document.getElementById("modal-close");
  closeBtn.onclick = () => {
    cardModal.style.display = "none";
  };
  closeBtn.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
      cardModal.style.display = "none";
    }
  };
  cardModal.onclick = (e) => {
    if (e.target === cardModal) cardModal.style.display = "none";
  };
  document.onkeydown = (e) => {
    if (e.key === "Escape") cardModal.style.display = "none";
  };
}

// Show more button
showMoreBtn.addEventListener("click", () => {
  displayPlants(allPlants);
  showMoreBtn.style.display = "none";
});

loadPlants();