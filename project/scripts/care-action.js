document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const goal = params.get("goal");
  const favorite = params.get("favorite");
  const container = document.getElementById("submitted-data");

  if (name && goal) {
    container.innerHTML = `
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Goal:</strong> ${goal}</li>
        <li><strong>Favorite Plant:</strong> ${favorite || "Not specified"}</li>
      </ul>
      <p style="margin-top:1.5rem;">Your entry has been received and saved. 🌱</p>
    `;
  } else {
    container.innerHTML = `<p>Invalid submission. Please go back and fill out the form.</p>`;
  }
});