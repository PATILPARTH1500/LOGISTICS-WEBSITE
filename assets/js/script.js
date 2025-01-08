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
  const heroContent = document.querySelector('.hero-content');
  let currentSlide = 0;
  let sliderInterval;

  // Function to hide hero content
  function hideHeroContent() {
    heroContent.style.visibility = 'hidden';
    heroContent.style.opacity = '0';
  }

  // Function to show hero content
  function showHeroContent() {
    heroContent.style.visibility = 'visible';
    heroContent.style.opacity = '1';
  }

  // Hide hero content initially since the video will autoplay
  hideHeroContent();

  // Ensure the video starts playing and transitions smoothly
  video.addEventListener('canplaythrough', function () {
    video.play();
  });

  // When the video ends, hide it and show the image slider
  video.onended = function () {
    video.style.opacity = '0'; // Smooth fade-out effect for video

    // Use a timeout to change visibility after the fade-out is complete
    setTimeout(() => {
      video.style.display = 'none'; // Hide the video after it fades out
      imageSlider.classList.remove('hidden'); // Show the slider
      imageSlider.classList.add('show'); // Ensure smooth fade-in

      showHeroContent(); // Show hero content when the slider starts
      startImageSlider(); // Start the slider
    }, 1000); // Timeout matches the CSS transition duration
  };

  // Function to start the image slider
  function startImageSlider() {
    slides[currentSlide].classList.add('active'); // Show the first slide

    // Start the slider interval
    sliderInterval = setInterval(() => {
      slides[currentSlide].classList.remove('active'); // Hide current slide
      currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
      slides[currentSlide].classList.add('active'); // Show next slide
    }, 3000); // Change slide every 3 seconds after the video gets ends
  }
});



window.addEventListener('scroll', function() {
  var heroSection = document.getElementById('hero-section');
  var chatbotButton = document.getElementById('chatbot-button');

  if (window.scrollY > heroSection.offsetTop + heroSection.offsetHeight) {
      chatbotButton.style.position = 'fixed';
      chatbotButton.style.bottom = '20px';
      chatbotButton.style.right = '20px';
  } else {
      chatbotButton.style.position = 'static';
      chatbotButton.style.bottom = 'initial';
      chatbotButton.style.right = 'initial';
  }
});