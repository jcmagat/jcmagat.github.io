(function ($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var subject = $('.validate-input input[name="subject"]');
  var message = $('.validate-input textarea[name="message"]');

  $(".validate-form").on("submit", function (e) {
    var check = true;

    if ($(name).val().trim() == "") {
      showValidate(name);
      check = false;
    }

    if ($(subject).val().trim() == "") {
      showValidate(subject);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }

    if ($(message).val().trim() == "") {
      showValidate(message);
      check = false;
    }
    if (!check) return false;

    e.preventDefault();

    console.log($(".contact1-form").serialize());

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxqMeAky_5lZxp6_uM238sJh1HqZkeq_x6UOc2185IaYi9uyeV-JINyjSgUViofedt1/exec",
      crossDomain: true,
      method: "POST",
      dataType: "json",
      data: $(".contact1-form").serialize(),
      success: function (response) {
        if (response.result == "success") {
          $(".contact1-form")[0].reset();
          alert("Thank you for contacting us.");
          return true;
        } else {
          console.log(response);
          alert(response.result);
        }
      },
      error: function () {
        alert("Something went wrong. Please try again.");
      },
    });
  });

  $(".validate-form .input1").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);
