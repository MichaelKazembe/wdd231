let menuList = document.getElementById("menu-list");
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");

// Hide menu and close icon by default on small screens
function closeMenu() {
  menuList.classList.remove("open");
  menuList.style.maxHeight = "0px";
  if (menuIcon) menuIcon.style.display = "block";
  if (closeIcon) closeIcon.style.display = "none";
}

// Show menu and close icon
function openMenu() {
  menuList.classList.add("open");
  menuList.style.maxHeight = "500px";
  if (menuIcon) menuIcon.style.display = "none";
  if (closeIcon) closeIcon.style.display = "block";
}

// Toggle menu
function toggleMenu() {
  if (menuList.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Accessibility: close menu on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Optional: close menu when a link is clicked (mobile UX)
menuList.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) closeMenu();
  });
});

// On load, ensure correct state
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuList.classList.remove("open");
    menuList.style.maxHeight = "";
    if (menuIcon) menuIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "none";
  } else {
    closeMenu();
  }
});
window.dispatchEvent(new Event("resize"));