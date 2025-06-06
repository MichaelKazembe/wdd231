// Get URL parameters from the query string
const params = new URLSearchParams(window.location.search);

// Grab form values from URL parameters
const first = params.get("firstName");
const last = params.get("lastName");
const organizationTitle = params.get("organization-title");
const organization = params.get("organization");
const description = params.get("description");
const level = params.get("membership-level");
const email = params.get("email");
const number = params.get("number");

// Grab the timestamp value
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timestamp').value = new Date().toLocaleString();
  });

const timestamp = params.get("timestamp");

// Render the thank you message and user details
document.querySelector('#thank-you').innerHTML = `
  <h1>Thank you, ${first} ${last}!</h1>
  <p>We have received your information:</p>
  <ul>
    <li><strong>Name:</strong> ${first} ${last}</li>
    <li><strong>Organization Title:</strong> ${organizationTitle}</li>
    <li><strong>Organization:</strong> ${organization}</li>
    <li><strong>Description:</strong> ${description}</li>
    <li><strong>Email:</strong> ${email}</li>
    <li><strong>Phone Number:</strong> ${number}</li>
    <li><strong>Membership Level:</strong> ${level}</li>
  </ul>
  <p class="recorded">Your Information was Recorded on <span class="time">${timestamp}</span></p>
`;