let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick =  () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['AI/ML Developer', 'Data Scientist', 'Python Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

// === Coming Soon Popup ===

// Get popup and close button
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-popup");

// Show popup on "coming soon" links
document.querySelectorAll(".coming-soon").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // prevent navigation
    popup.style.display = "flex";
  });
});

// Close popup when clicking the X
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup when clicking outside of content
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});




