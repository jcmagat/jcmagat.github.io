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

/* ========== Contact Input Validation ========== */

const contactInputs = document.querySelectorAll(".contact-input");

contactInputs.forEach((input) => {
  input.addEventListener("invalid", (event) => {
    event.preventDefault();

    input.parentElement.classList.add("contact-input-invalid");
  });
});

contactInputs.forEach((input) => {
  ["focus", "input"].forEach((event) => {
    input.addEventListener(event, () => {
      input.parentElement.classList.remove("contact-input-invalid");
    });
  });
});

/* ========== Contact Confirmation Modal ========== */

const closeButtons = document.querySelectorAll(".modal-close");

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.remove("modal-open");
  });
});
