"use strict";

// navbar

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



// header

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


//slideshow

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('backgroundVideo');
  const imageSlider = document.getElementById('imageSlider');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // When the video ends, hide it and show the image slider
  video.onended = function () {
    video.style.display = 'none'; // Hide the video
    imageSlider.classList.remove('hidden'); // Show the slider
    imageSlider.classList.add('show'); // Ensure smooth fade-in

    startImageSlider(); // Start the slider
  };

  // Function to start the image slider
  function startImageSlider() {
    slides[currentSlide].classList.add('active');

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 3000); // Change slide every 3 seconds
  }
});
