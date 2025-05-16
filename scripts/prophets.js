const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let potrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let place = document.createElement('p');

        // Populate elements
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        potrait.setAttribute('src', prophet.imageurl);
        potrait.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}th prophet`);
        potrait.setAttribute('loading', 'lazy');
        potrait.setAttribute('width', '340');
        potrait.setAttribute('height', '440');

        // Populate birthdate and birthplace
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(place);
        card.appendChild(potrait);

        // Append the card to the cards div
        cards.appendChild(card);

        // Add classes to the card
        card.classList.add('card');
        fullName.classList.add('card-title');
        potrait.classList.add('card-image');
    });
}

getProphetData();
