// Select the elements where the dates will be displayed
const currentYearElement = document.querySelector("#currentdate");
const lastModifiedElement = document.querySelector("#last-modified-date");

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the current year in the footer's first paragraph
currentYearElement.textContent = currentYear;

// Set the last modified date in the footer's second paragraph
lastModifiedElement.textContent = lastModified;