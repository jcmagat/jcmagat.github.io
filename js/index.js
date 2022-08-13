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

/* ========== Project Image Zoom ========== */

// Open
const images = document.querySelectorAll(".project-img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    document.body.classList.add("project-img-zoom-open");
  });
});

// Close
const projectImgZoomButton = document.querySelector(
  ".project-img-zoom-modal-button"
);

projectImgZoomButton.addEventListener("click", () => {
  document.body.classList.remove("project-img-zoom-open");
});
