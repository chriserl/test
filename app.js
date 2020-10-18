const hamButton = document.querySelector(".ham-icon");
const navMenu = document.querySelector("nav");
const closeIcon = document.querySelector(".close");

hamButton.addEventListener("click", () => {
  navMenu.classList.contains("navbar-open")
    ? navMenu.classList.remove("navbar-open")
    : navMenu.classList.add("navbar-open");
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.contains("navbar-open")
    ? navMenu.classList.remove("navbar-open")
    : navMenu.classList.add("navbar-open");
});
