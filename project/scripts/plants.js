import { loadPlants } from './plant-data.js';
import { displayPlants } from './plant-display.js';
// import { showModal } from './modal.js';

const plantContainer = document.querySelector("#plant-cards");
const showMoreBtn = document.querySelector("#show-more");
const cardModal = document.getElementById("card-modal");

let allPlants = [];
const initialDisplayCount = 3;

// Load and display initial plants
async function init() {
  allPlants = await loadPlants();
  displayPlants(allPlants.slice(0, initialDisplayCount), plantContainer);
}

// Show all plants
showMoreBtn.addEventListener("click", () => {
  displayPlants(allPlants, plantContainer);
  showMoreBtn.style.display = "none";
});

// Initialize the application
init();
