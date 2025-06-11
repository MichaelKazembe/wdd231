async function loadDiscover() {
    // Fetch discover.json and render items
    try {
        const response = await fetch("data/discover.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const discoverItems = await response.json();
        renderDiscoverItems(discoverItems);
    } catch (error) {
        console.error("Fetch error:", error);
        document.querySelector(".discover-section").innerHTML = "<p>Failed to load discover items.</p>";
    }
}

function renderDiscoverItems(items) {
    const section = document.querySelector(".discover-section");
    if (!section) return;

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "discover-cards";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "discover-card";
        card.innerHTML = `   
            <figure>
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </figure>
            <h2>${item.name}</h2>
            <address>
                <i class="fa fa-location-dot" aria-hidden="true"></i> ${item.address}
            </address>
            <p>${item.description}</p>
            <button class="discover-btn">Learn More</button>
        `;
        cardsContainer.appendChild(card);
    });

    section.innerHTML = "";
    section.appendChild(cardsContainer);
}

document.addEventListener("DOMContentLoaded", loadDiscover);