// Function to load plant data
export async function loadPlants() {
  try {
    const response = await fetch("data/plants.json");
    if (!response.ok) throw new Error("Failed to fetch plant data.");
    return await response.json();
  } catch (err) {
    console.error("Error loading plants:", err);
    return [];
  }
}
