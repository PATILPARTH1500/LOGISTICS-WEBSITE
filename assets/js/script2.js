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

function updatePlaceholder() {
            const dropdown = document.getElementById('dropdown');
            const searchBox = document.getElementById('searchBox');
            const selectedOption = dropdown.value;

            switch (selectedOption) {
                case 'option1':
                    searchBox.placeholder = 'BL or Container Number...';
                    break;
                case 'option2':
                    searchBox.placeholder = 'Airway Bill Number...';
                    break;
                case 'option3':
                    searchBox.placeholder = 'BL or Booking Number...';
                    break;
                case 'option4':
                    searchBox.placeholder = 'Tracking Number...';
                    break;
                default:
                    searchBox.placeholder = 'Type here...';
                    break;
            }
        }

        function track() {
          const searchText = document.getElementById('searchBox').value;
          alert(`Tracking: ${searchText}`);
          // Here you can add more functionality to handle the tracking logic
      }