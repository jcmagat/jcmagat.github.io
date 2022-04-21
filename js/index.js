/* ========== Navigation Toggle ========== */

const navButton = document.querySelector(".nav-button");
const navLinks = document.querySelectorAll(".nav-link");

navButton.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
