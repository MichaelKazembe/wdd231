// Spotlight feature: randomly selects 2-3 gold or silver members to spotlight

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

  // Pick 2 or 3 randomly
  const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
  const spotlights = spotlightCandidates.slice(0, count);

  // Render spotlights
  const spotlightSection = document.querySelector('.spotlight');
  if (!spotlightSection) return;

  spotlightSection.innerHTML = spotlights.map(member => `
    <article class="spotlight-card ${member.membership.toLowerCase()}">
      <img src="${member.logo}" alt="${member.name} logo" class="spotlight-logo" loading="lazy" />
      <h3 class="spotlight-name">${member.name}</h3>
      <p class="spotlight-level">${member.membership} Member</p>
      <p class="spotlight-phone"><i class="fa fa-phone"></i> ${member.phone}</p>
      <p class="spotlight-address"><i class="fa fa-location-dot"></i> ${member.address}</p>
      <a href="${member.website}" class="spotlight-website" target="_blank" rel="noopener">
        <i class="fa fa-globe"></i> Website
      </a>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', loadSpotlights);