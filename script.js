// Toggle Hamburger Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", isOpen);
}

// Toggle Dark Mode (with Persistence)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  updateDarkModeButtonText();
}

function updateDarkModeButtonText() {
  const toggles = document.querySelectorAll(
    "#dark-mode-toggle, #dark-mode-toggle-mobile"
  );
  toggles.forEach((btn) => {
    btn.innerText = document.body.classList.contains("dark-mode")
      ? "Light Mode"
      : "Dark Mode";
  });
}

function toggleDarkModeAndSave() {
  toggleDarkMode();
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", toggleDarkModeAndSave);
if (document.getElementById("dark-mode-toggle-mobile")) {
  document
    .getElementById("dark-mode-toggle-mobile")
    .addEventListener("click", toggleDarkModeAndSave);
}

window.onload = function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  updateDarkModeButtonText();
};

// Scroll-Triggered Animations
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll(".animate, .slide-in-left, .slide-in-right, .slide-in-up")
    .forEach((elem) => {
      observer.observe(elem);
    });
});

// Contact Form Validation
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorDiv = document.getElementById("form-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    errorDiv.innerText = "All fields are required.";
    return false;
  }

  if (!emailRegex.test(email)) {
    errorDiv.innerText = "Please enter a valid email address.";
    return false;
  }

  errorDiv.innerText = "";
  alert("Thank you for your message!");
  document.getElementById("contact-form").reset();
  return true;
}
