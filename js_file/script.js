let lastScrollTop = 0;
  const navbar = document.querySelector(".floating-navbar");

  window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop === 0) {
          // Expand to full width at the top
          navbar.classList.add("full-width-navbar");
      } else {
          navbar.classList.remove("full-width-navbar");
      }

      if (scrollTop > lastScrollTop) {
          // Hide when scrolling down
          navbar.classList.add("hidden-navbar");
      } else {
          // Show when scrolling up
          navbar.classList.remove("hidden-navbar");
      }

      lastScrollTop = scrollTop;
  });


function loadCarousel() {
    fetch('carousel.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('carousel-container').innerHTML = data;
        });
}

// Load cards.html into index.html
document.addEventListener("DOMContentLoaded", function () {
    fetch("Prod_cards.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("cards-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading cards:", error));
});  



$(document).ready(function() {
    $("#contactForm").submit(function(event) {
        event.preventDefault(); // Prevent page reload

        let formData = $(this).serialize(); // Collect form data

        $.ajax({
            type: "POST",
            url: "process.php",
            data: formData,
            success: function(response) {
                $("#formResponse").html(response);
                $("#contactForm")[0].reset(); // Reset form after success
            },
            error: function() {
                $("#formResponse").html("<p class='text-danger'>An error occurred. Please try again.</p>");
            }
        });
    });
});

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
    