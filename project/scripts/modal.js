// Function to show modal
export function showModal(plant, cardModal) {
  if (!cardModal) return;

  const oldContent = cardModal.querySelector(".modal-content");
  if (oldContent) oldContent.remove();

  const content = document.createElement("div");
  content.className = "modal-content modal-flex";
  content.innerHTML = `
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
  `;

  cardModal.appendChild(content);
  cardModal.style.display = "block";

  const hiddenTitle = document.getElementById("modal-title");
  if (hiddenTitle) hiddenTitle.textContent = plant.name;

  const closeModal = () => {
    cardModal.style.display = "none";
    document.removeEventListener("keydown", escListener);
  };

  const closeBtn = content.querySelector("#modal-close");
  closeBtn.addEventListener("click", closeModal);
  closeBtn.addEventListener("keydown", (e) => {
    if (["Enter", " ", "Escape"].includes(e.key)) closeModal();
  });

  cardModal.addEventListener("click", (e) => {
    if (e.target === cardModal) closeModal();
  });

  const escListener = (e) => {
    if (e.key === "Escape") closeModal();
  };

  document.addEventListener("keydown", escListener);
}
