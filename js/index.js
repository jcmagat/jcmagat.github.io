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
let zoomedImage = images[0];

images.forEach((image) => {
  image.addEventListener("click", () => {
    zoomedImage = image;

    document.body.classList.add("project-img-zoom-modal-open");
    image.classList.add("project-img-zoomed");
  });
});

// Close
const projectImgZoomModal = document.querySelector(".project-img-zoom-modal");

projectImgZoomModal.addEventListener("click", () => {
  zoomedImage.classList.remove("project-img-zoomed");
  document.body.classList.remove("project-img-zoom-modal-open");
});
