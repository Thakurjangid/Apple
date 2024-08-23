(function ($) {
  "use strict";

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 30,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Typed Initiate
  if ($(".header h2").length == 1) {
    var typed_strings = $(".header .typed-text").text();
    var typed = new Typed(".header h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Skills
  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Porfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Review slider
  $(".review-slider").slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

// document.getElementById('reg').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Clear previous error messages
//     document.getElementById('usernameError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('messageError').textContent = '';

//     // Get form values
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('message').value;

//     let isValid = true;

//     // Validate username
//     if (username.length < 3) {
//         document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
//         isValid = false;
//     }
//     // Validate email
//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!emailPattern.test(email)) {
//         document.getElementById('emailError').textContent = 'Please enter a valid email address.';
//         isValid = false;
//     }

//     // Validate password
//     if (password.length < 6) {
//         document.getElementById('messageError').textContent = 'Password must be at least 6 characters long.';
//         isValid = false;
//     }

//     // If all fields are valid
//     if (isValid) {
//         document.getElementById('thankYouMessage').style.display = 'none';
//         document.getElementById('registrationForm').reset(); // Optionally reset the form
//     }
// })

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("message").value;
    let isValid = true;

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate username
    if (username.length < 3) {
      document.getElementById("usernameError").textContent =
        "Username must be at least 3 characters long.";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      isValid = false;
    }

    // Validate password (assuming 'message' as the password field)
    if (password.length < 6) {
      document.getElementById("messageError").textContent =
        "comment must be at least 6 characters long.";
      isValid = false;
    }

    // If all fields are valid
    if (isValid) {
      document.getElementById("registrationForm").style.display = "none"; // Hide the form
      document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message

      // After 5 seconds, hide thank you message and show form again
      setTimeout(function () {
        document.getElementById("thankYouMessage").style.display = "none";
        document.getElementById("registrationForm").reset(); // Optionally reset the form
        document.getElementById("registrationForm").style.display = "block"; // Show the form
      }, 5000);
    }
  });
