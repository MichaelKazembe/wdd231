// Select the view toggle buttons and the directory section
const gridButton = document.querySelector("#grid-view-btn"); // Grid view button
const listButton = document.querySelector("#list-view-btn"); // List view button
const directorySection = document.querySelector("#directory-list"); // Section to display companies

let companies = []; // Will hold the fetched data

// Set default view
let currentView = "grid";

// Fetch member data from JSON file
async function fetchCompanies() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Network response was not ok");
    companies = await response.json();
    displayCompanies(currentView);
    setActiveButton(currentView);
  } catch (error) {
    directorySection.innerHTML = "<p>Failed to load members.</p>";
    console.error("Fetch error:", error);
  }
}

// Display companies in grid or list view
function displayCompanies(view = "grid") {
  directorySection.innerHTML = "";
  directorySection.className = "directory-list " + view;

  companies.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.className = "member-card";

    const img = document.createElement("img");
    img.src = member.imageURL;
    img.alt = `${member.name} logo`;
    img.loading = "lazy";

    const name = document.createElement("h3");
    name.textContent = member.name;

    const desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = member.description;

    const address = document.createElement("p");
    address.className = "address";
    address.innerHTML = `<i class="fa-solid fa-location-dot"></i>${member.address}`;

    const phone = document.createElement("p");
    phone.className = "phone";
    phone.innerHTML = `<i class="fa-solid fa-phone"></i>${member.phone}`;

    const website = document.createElement("p");
    website.className = "website";
    if (member.website && member.website.trim() !== "") {
      website.innerHTML = `<i class="fa-solid fa-globe"></i> ${member.website}`;
    } else {
      website.innerHTML = `<i class="fa-solid fa-globe"></i> No website`;
    }

    if (view === "list") {
      // 3-column layout: img | main-info | info-row
      const mainInfo = document.createElement("div");
      mainInfo.className = "main-info";
      mainInfo.appendChild(name);
      mainInfo.appendChild(desc);

      const infoRow = document.createElement("div");
      infoRow.className = "info-row";
      infoRow.appendChild(address);
      infoRow.appendChild(phone);
      infoRow.appendChild(website);

      memberCard.appendChild(img);
      memberCard.appendChild(mainInfo);
      memberCard.appendChild(infoRow);
    } else {
      // Grid view: stack everything in member-info
      const infoDiv = document.createElement("div");
      infoDiv.className = "member-info";
      infoDiv.appendChild(name);
      infoDiv.appendChild(desc);
      infoDiv.appendChild(address);
      infoDiv.appendChild(phone);
      infoDiv.appendChild(website);

      memberCard.appendChild(img);
      memberCard.appendChild(infoDiv);
    }

    directorySection.appendChild(memberCard);
  });
}

// Set active button styling
function setActiveButton(view) {
  if (view === "grid") {
    gridButton.classList.add("active");
    listButton.classList.remove("active");
  } else {
    listButton.classList.add("active");
    gridButton.classList.remove("active");
  }
}

// Event listeners for view toggle buttons
gridButton.addEventListener("click", () => {
  currentView = "grid";
  displayCompanies(currentView);
  setActiveButton(currentView);
});

listButton.addEventListener("click", () => {
  currentView = "list";
  displayCompanies(currentView);
  setActiveButton(currentView);
});

// Initialize on page load
fetchCompanies();