document.addEventListener(`DOMContentLoaded`, function() {
    const visit = document.querySelector(`.visit`);
    const MS_PER_DAY = 24 * 60 * 60 * 1000; // Milliseconds in a day

    const lastVisit = localStorage.getItem(`lastVisit`); // Retrieve the last visit date from localStorage
    const todayDate = new Date(); // Current date and time

    // Check if lastVisit exists and calculate the message accordingly
    let message = "";

    if (!lastVisit) {
        message = `Welcome! Let us know if you have any questions.`;
    } else {
        const timeDifference = todayDate - new Date(lastVisit); // Calculate the difference in milliseconds
        const daysDifference = Math.round(timeDifference / MS_PER_DAY); // Calculate the difference in days

        if (daysDifference < 1) {
            message = `Back so soon! Awesome!`;
        } else if (daysDifference === 1) {
            message = `Welcome back to the Chamber! You visited yesterday.`;
        } else {
            message = `You last visited ${daysDifference} days ago.`;
        }

    }

    // Display the message in the visit
    visit.innerHTML += `<p>${message}</p>`;
    // Update the last visit date in localStorage
    localStorage.setItem(`lastVisit`, todayDate.toISOString());
});