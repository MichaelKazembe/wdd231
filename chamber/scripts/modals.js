// Open modal when a membership info button is clicked
document.querySelectorAll('.membership-info-link').forEach(btn => {
  btn.onclick = function (e) {
    e.preventDefault(); // Prevent default link/button behavior
    // Get the modal element using the data-modal attribute of the clicked button
    const modal = document.getElementById(this.dataset.modal);
    if (modal) modal.style.display = 'block'; // Show the modal
  };
});

// Close modal when the close button (×) is clicked
document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.onclick = function () {
    // Find the closest parent modal and hide it
    const modal = this.closest('.modal');
    if (modal) modal.style.display = 'none';
  };
});

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  // If the clicked element has the 'modal' class, hide it
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};