// Spotlight feature: always selects 3 gold or silver members to spotlight

async function loadSpotlights() {
  // Fetch chamber members JSON (adjust path if needed)
  const response = await fetch('data/members.json');
  if (!response.ok) {
    console.error('Failed to fetch members.json');
    return;
  }
  const members = await response.json();

  // Filter for gold or silver members
  const spotlightCandidates = members.filter(
    m => m.membership && (m.membership.toLowerCase() === 'gold' || m.membership.toLowerCase() === 'silver')
  );

  // Shuffle array
  for (let i = spotlightCandidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [spotlightCandidates[i], spotlightCandidates[j]] = [spotlightCandidates[j], spotlightCandidates[i]];
  }

  // Always pick 3
  const spotlights = spotlightCandidates.slice(0, 3);

  // Render spotlights without removing the h2
  const spotlightSection = document.querySelector('.spotlight');
  if (!spotlightSection) return;

  // Remove any old cards (but not the h2)
  spotlightSection.querySelectorAll('.spotlight-card').forEach(card => card.remove());

  // Insert cards after the h2
  const h2 = spotlightSection.querySelector('h2');
  const cardsHTML = spotlights.map(member => `
    <article class="spotlight-card ${member.membership.toLowerCase()}">
      <img src="${member.logo}" alt="${member.name} logo" class="spotlight-logo" loading="lazy" />
      <h3 class="spotlight-name">${member.name}</h3>
      <p class="spotlight-level">${member.membership} Member</p>
      <p class="spotlight-phone"><i class="fa fa-phone"></i> ${member.phone}</p>
      <p class="spotlight-address"><i class="fa fa-location-dot"></i> ${member.address}</p>
      <a href="${member.website}" class="spotlight-website" target="_blank" rel="noopener">
        <i class="fa fa-globe"></i>${member.website}
      </a>
    </article>
  `).join('');

  if (h2) {
    h2.insertAdjacentHTML('afterend', cardsHTML);
  } else {
    spotlightSection.innerHTML = cardsHTML;
  }
}

document.addEventListener('DOMContentLoaded', loadSpotlights);