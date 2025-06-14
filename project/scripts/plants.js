const plantContainer = document.querySelector("#plant-cards");
const showMoreBtn = document.querySelector("#show-more");

let allPlants = [];
let displayedPlants = 3;

// Function to fetch plant data from JSON file
async function loadPlants() {
  try {
    const response = await fetch("data/plants.json");
    if (!response.ok) throw new Error("Failed to Fetch Plants");
    allPlants = await response.json();
    displayPlants(allPlants.slice(0, displayedPlants));

  } catch (error) {
    console.error("Error loading plants:", error);  
  }
}

// Function to display  plants
function displayPlants(plants) {
  plantContainer.innerHTML = "";

  plants.forEach(plant => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="card-image">
      <div class="card-content">
        <h3>${plant.name}</h3>
        <p>${plant.description}</p>
        <div class="card-details">
          <span><i class="fas fa-sun" aria-hidden="true"></i> ${plant.light}</span>
          <span><i class="fas fa-tint" aria-hidden="true"></i> ${plant.watering}</span>
        </div>
      </div>
    `;

    plantContainer.appendChild(card);
  });
}

// Handle "Show More" button click event
showMoreBtn.addEventListener("click", () => {
  displayPlants(allPlants);
  showMoreBtn.style.display = "none";
});

loadPlants();
