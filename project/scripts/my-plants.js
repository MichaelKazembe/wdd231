document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("care-form");
  const lastInputDiv = document.getElementById("last-input");
  const myPlansList = document.getElementById("my-plans-list");

  // Load last input from localStorage
  const lastInput = JSON.parse(localStorage.getItem("careFormInput"));
  if (lastInput) {
    lastInputDiv.innerHTML = `
      <h3>Your Last Submission:</h3>
      <ul>
        <li><strong>Name:</strong> ${lastInput.name}</li>
        <li><strong>Goal:</strong> ${lastInput.goal}</li>
        <li><strong>Favorite Plant:</strong> ${lastInput.favorite}</li>
      </ul>
    `;


  }

  // Store all submissions in localStorage array
  function saveSubmission(data) {
    let all = JSON.parse(localStorage.getItem("allCarePlans")) || [];
    all.push(data);
    localStorage.setItem("allCarePlans", JSON.stringify(all));
  }

  // Render all previous submissions
  function renderPlans() {
    const all = JSON.parse(localStorage.getItem("allCarePlans")) || [];
    if (all.length === 0) {
      myPlansList.innerHTML = "<p>No plans or care tips submitted yet.</p>";
      return;
    }
    myPlansList.innerHTML = all.map(plan => `
      <div class="plan-card">
        <ul>
          <li><strong>Name:</strong> ${plan.name}</li>
          <li><strong>Goal:</strong> ${plan.goal}</li>
          <li><strong>Favorite Plant:</strong> ${plan.favorite}</li>
        </ul>
      </div>
    `).join("");
  }

  renderPlans();

  // Save input to localStorage on submit
  form.addEventListener("submit", () => {
    const inputData = {
      name: form.name.value,
      goal: form.goal.value,
      favorite: form.favorite.value
    };
    localStorage.setItem("careFormInput", JSON.stringify(inputData));
    saveSubmission(inputData);

  });
});