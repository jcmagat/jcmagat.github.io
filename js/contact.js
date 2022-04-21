/* ========== Send Message and Open Confirmation Modal ========== */

const title = document.querySelector(".contact-confirmation-title");
const body = document.querySelector(".contact-confirmation-body");

$(".contact-form").submit(function (event) {
  event.preventDefault();

  const data = $(".contact-form").serialize();

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby2P8Yi0awdxOJju29n6s4hCCTZ7aagcdvrEumE4KbIBgk0pibixtqDbGXmR9zddoV3/exec",
    method: "POST",
    dataType: "json",
    data: data,
    success: function (response) {
      if (response.result == "success") {
        $(".contact-form")[0].reset();

        title.innerHTML = "Message sent";
        body.innerHTML =
          "Thank you for reaching out, I'll get back to you as soon as possible";

        document.body.classList.add("modal-open");
      } else {
        title.innerHTML = "Something went wrong";
        body.innerHTML =
          "Please try to send the message again or reach out through any of my contacts below";

        document.body.classList.add("modal-open");
      }
    },
    error: function () {
      title.innerHTML = "Something went wrong";
      body.innerHTML =
        "Please try to send the message again or reach out through any of my contacts below";

      document.body.classList.add("modal-open");
    },
  });
});

/* ========== Close Confirmation Modal ========== */

const closeButtons = document.querySelectorAll(".modal-close");

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.remove("modal-open");
  });
});

/* ========== Display Input Validation Error ========== */

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
