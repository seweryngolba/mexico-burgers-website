const hamburgerMenu = document.querySelector("#mobile-nav");
const navbar = document.querySelector("#navbar");
const hamMenuIcon = document.querySelector("#ham-menu");
const hamMenuCloseIcon = document.querySelector("#close-menu");

const toggleMenu = () => {
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
    hamMenuIcon.style.display = "block";
    hamMenuCloseIcon.style.display = "none";
  } else {
    navbar.style.display = "flex";
    hamMenuIcon.style.display = "none";
    hamMenuCloseIcon.style.display = "block";
  }
};

hamburgerMenu.addEventListener("click", toggleMenu);
