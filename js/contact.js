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
        document.body.classList.add("modal-open");
      } else {
        alert("Something went wrong, please try again");
      }
    },
    error: function () {
      alert("Something went wrong, please try again");
    },
  });
});
