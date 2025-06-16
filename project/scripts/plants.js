// plants.js
const plantContainer = document.querySelector("#plant-cards");
const showMoreBtn = document.querySelector("#show-more");

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

// Render cards and modals
function displayPlants(plants) {
  plantContainer.innerHTML = "";

  plants.forEach((plant, index) => {
    const modalId = `plant-modal-${index}`;
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
        <button class="btn card-btn" data-modal="${modalId}">Learn More</button>
      </div>
    `;

    plantContainer.appendChild(card);
  });
    // Add modals
}

// Show more button
showMoreBtn.addEventListener("click", () => {
  displayPlants(allPlants);
  showMoreBtn.style.display = "none";
});

loadPlants();
