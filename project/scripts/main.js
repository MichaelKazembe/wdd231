
// main.js
import { fetchPlantData } from './plant-data.js';
import { renderPlants, showModal } from './plant-ui.js';

const showMoreBtn = document.querySelector("#show-more");
let allPlants = [];
const initialDisplayCount = 3;

async function init() {
  allPlants = await fetchPlantData();
  renderPlants(allPlants.slice(0, initialDisplayCount), showModal);

  showMoreBtn.addEventListener("click", () => {
    renderPlants(allPlants, showModal);
    showMoreBtn.style.display = "none";
  });
}

init();
