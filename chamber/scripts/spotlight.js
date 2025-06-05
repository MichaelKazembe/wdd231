// Display 2 or 3 random gold/silver members as spotlight cards, keeping the h2 in HTML and cards in a row below

async function loadSpotlights() {
  const response = await fetch('data/members.json');
  if (!response.ok) {
    console.error('Failed to fetch members.json');
    return;
  }
  const members = await response.json();

  // Filter for gold or silver members
  const candidates = members.filter(
    m => m.membership && ['gold', 'silver'].includes(m.membership.toLowerCase())
  );

  // Shuffle array
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  // Pick 2 or 3 randomly
  const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
  const spotlights = candidates.slice(0, count);

  // Render spotlights after the h2 (do not remove h2)
  const spotlightSection = document.querySelector('.spotlight');
  if (!spotlightSection) return;

  // Remove any old .spotlight-cards container
  const oldCards = spotlightSection.querySelector('.spotlight-cards');
  if (oldCards) oldCards.remove();

  // Find the h2 and insert cards after it, wrapped in .spotlight-cards
  const h2 = spotlightSection.querySelector('h2');
  if (h2) {
    const cardsHTML = `
      <div class="spotlight-cards">
        ${spotlights.map(member => `
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
        `).join('')}
      </div>
    `;
    h2.insertAdjacentHTML('afterend', cardsHTML);
  }
}

document.addEventListener('DOMContentLoaded', loadSpotlights);