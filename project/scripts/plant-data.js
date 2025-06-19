// plant-data.js
export async function fetchPlantData() {
  try {
    const response = await fetch("data/plants.json");
    if (!response.ok) throw new Error("Failed to fetch plant data.");
    return await response.json();
  } catch (err) {
    console.error("Error loading plant data:", err);
    return [];
  }
}
