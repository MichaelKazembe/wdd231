const params = new URLSearchParams(window.location.search);

const first = params.get("firstName");
const last = params.get("lastName");
const organizationTitle = params.get("organization-title");
const organization = params.get("organization");
const description = params.get("description");
const level = params.get("membership-level");
const email = params.get("email");
const number = params.get("number");

document.querySelector('#thank-you').innerHTML = `
<h1>Thank you, ${first} ${last}!</h1>
<p>We have received your information:</p>
<ul>
  <li><strong>Name:</strong> ${first} ${last} </li>
  <li><strong>Organization Title:</strong> ${organizationTitle}</li>
  <li><strong>Organization:</strong> ${organization}</li>
  <li><strong>Description:</strong> ${description}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Phone Number:</strong> ${number}</li>
  <li><strong>Membership Level:</strong> ${level}</li>
</ul>
<p>We will be in touch with you soon.</p>
`;