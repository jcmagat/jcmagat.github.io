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
const modalImage = document.querySelector(".project-img-zoom-modal-img");
const images = document.querySelectorAll(".project-img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.setAttribute("src", image.getAttribute("src"));
    document.body.classList.add("project-img-zoom-modal-open");
  });
});

// Close
const projectImgZoomModal = document.querySelector(".project-img-zoom-modal");

projectImgZoomModal.addEventListener("click", (event) => {
  if (event.target === modalImage) return;

  document.body.classList.remove("project-img-zoom-modal-open");
});
