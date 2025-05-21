// Select the view toggle buttons and the directory section
const gridButton = document.querySelector("#grid-view-btn"); // Grid view button
const listButton = document.querySelector("#list-view-btn"); // List view button
const directorySection = document.querySelector("#directory-list"); // Section to display companies

let companies = []; // Will hold the fetched data

// Fetch member data from JSON file
async function fetchCompanies() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Network response was not ok");
        companies = await response.json();
        displayCompanies("grid");
        gridButton.classList.add("active");
    } catch (error) {
        directorySection.innerHTML = "<p>Failed to load members.</p>";
        console.error("Fetch error:", error);
    }
}

// Function to create and display companies in grid or list view
function displayCompanies(view = "grid") {
    // Clear previous content
    directorySection.innerHTML = "";

    // Add the appropriate class for styling
    directorySection.className = "directory-list " + view;

    // Loop through each member and create its card/item
    companies.forEach(member => {
        // Create the container for each member
        const memberCard = document.createElement("div");
        memberCard.className = "member-card";

        // member image
        const img = document.createElement("img");
        img.src = member.imageURL;
        img.alt = `${member.name} logo`;
        img.loading = "lazy";

        // member name
        const name = document.createElement("h3");
        name.textContent = member.name;

        // member description
        const desc = document.createElement("p");
        desc.textContent = member.description;
        desc.className = "description";

        // member address with FontAwesome icon
        const address = document.createElement("p");
        address.className = "address";
        address.innerHTML = `<i class="fa-solid fa-location-dot"></i>${member.address}`;

        // member phone with FontAwesome icon
        const phone = document.createElement("p");
        phone.className = "phone";
        phone.innerHTML = `<i class="fa-solid fa-phone"></i>${member.phone}`;

        // member website (as a link)
        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";
        website.rel = "noopener";

        // Append all elements to the card
        memberCard.appendChild(img);
        memberCard.appendChild(name);
        memberCard.appendChild(desc);
        memberCard.appendChild(address);
        memberCard.appendChild(phone);
        memberCard.appendChild(website);

        // Add the card to the directory section
        directorySection.appendChild(memberCard);
    });
}

// Event listener for grid view button
gridButton.addEventListener("click", () => {
    displayCompanies("grid");
    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

// Event listener for list view button
listButton.addEventListener("click", () => {
    displayCompanies("list");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
});

// Initial fetch and display
fetchCompanies();