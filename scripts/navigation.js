// Get references to the menu list and icons
let menuList = document.getElementById("menu-list");
let menuIcon = document.getElementById("menu-icon"); 
let closeIcon = document.getElementById("close-icon");

// Initialize: hide the menu list and close icon
menuList.style.maxHeight = "0px";
if (closeIcon) closeIcon.style.display = "none";

// Function to toggle the menu open/close
function toggleMenu() {
  // If menu is closed, open it and show the close icon
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px";
    if (menuIcon) menuIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "inline";
  } else {
    // If menu is open, close it and show the menu icon
    menuList.style.maxHeight = "0px";
    if (menuIcon) menuIcon.style.display = "inline";
    if (closeIcon) closeIcon.style.display = "none";
  }
}

