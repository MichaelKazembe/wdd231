// Function to display plant cards
export function displayPlants(plants, plantContainer) {
  plantContainer.innerHTML = "";
  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="card-image" width="300" height="200">
      <div class="card-content">
        <h3>${plant.name}</h3>
        <p>${plant.description}</p>
        <div class="card-details">
          <span><i class="fas fa-sun" aria-hidden="true"></i> ${plant.light}</span>
          <span><i class="fas fa-tint" aria-hidden="true"></i> ${plant.watering}</span>
        </div>
        <button class="btn card-btn">Learn More</button>
      </div>
    `;
    const learnMoreBtn = card.querySelector(".card-btn");
    learnMoreBtn.addEventListener("click", () => showModal(plant));
    plantContainer.appendChild(card);
  });
}
