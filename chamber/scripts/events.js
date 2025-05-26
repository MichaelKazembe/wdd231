// Loads and displays current events from events.json into the .events-container
async function loadEvents() {
  // Fetch the events JSON file (update path if needed)
  const response = await fetch('data/events.json');
  const events = await response.json();
  const container = document.querySelector('.events-container');

  // Exit if the container is not found
  if (!container) return;

  // Remove any existing event cards before rendering new ones
  container.querySelectorAll('.event-card').forEach(card => card.remove());

  // Loop through each event and create its card
  events.forEach(event => {
    const article = document.createElement('article');
    article.className = 'event-card';

    // Build the event card HTML
    article.innerHTML = `
      <h3>${event.title}</h3>
      <p class="event-date">
        <i class="fa-regular fa-calendar"></i>
        ${formatEventDate(event.date)} &mdash; ${formatEventTime(event.time)}
      </p>
      <p class="event-location">
        <i class="fa-solid fa-location-dot"></i>
        ${event.location}
      </p>
      <p class="event-description">
        ${event.description}
      </p>
      <a href="${event.link}" class="secondary-button">Learn More</a>
    `;

    // Add the event card to the container
    container.appendChild(article);
  });
}

// Formats a date string as "Month Day, Year"
function formatEventDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// Formats a time string ("HH:mm") as "h:mm AM/PM"
function formatEventTime(timeStr) {
  const [hour, minute] = timeStr.split(':');
  const date = new Date();
  date.setHours(hour, minute);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

// Run loadEvents when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadEvents);