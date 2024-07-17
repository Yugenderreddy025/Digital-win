 window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;
    var moveAmount = scrollPosition * 0.15;
    document.querySelector(".right-image img").style.transform = "translateX(-" + moveAmount + "px)";
 });
 document.addEventListener("DOMContentLoaded", function() {
        var video = document.getElementById("myVideo");
        video.play();
 });
    
 // Function to handle scroll and apply parallax effect
function handleParallaxEffect() {
    var scrollPosition = window.pageYOffset;
    var moveAmount = -scrollPosition * 0.09;
    document.querySelector("#services .left-image img").style.transform = "translateY(" + moveAmount + "px)";
}

// Event listener for scroll
window.addEventListener("scroll", function () {
    // Check if the screen size matches the media query
    if (window.matchMedia("(min-width: 768px)").matches) {
        handleParallaxEffect();
    }
});

document.addEventListener("DOMContentLoaded", function() {
  var dropdownBtns = document.querySelectorAll(".dropdown-btn");
  var dropdownContents = document.querySelectorAll(".dropdown-content");

  dropdownBtns.forEach(function(btn, index) {
      btn.addEventListener("click", function(event) {
          event.stopPropagation();

          // Close all dropdowns
          dropdownContents.forEach(function(content, idx) {
              if (idx !== index) {
                  content.style.display = "none";
              }
          });

          // Toggle the clicked dropdown
          dropdownContents[index].style.display = (dropdownContents[index].style.display === "block") ? "none" : "block";
      });
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
      if (!event.target.matches(".dropdown-btn")) {
          dropdownContents.forEach(function(content) {
              content.style.display = "none";
          });
      }
  });
});

 






document.addEventListener('DOMContentLoaded', function () {
  const clientLogosContainer = document.getElementById('clientLogosContainer');

  function duplicateLogos() {
    const originalLogos = clientLogosContainer.innerHTML;
    clientLogosContainer.innerHTML += originalLogos;
  }

  // Initial duplication
  duplicateLogos();

  // Function to handle animation based on screen size
  function handleAnimation() {
    if (window.innerWidth > 768) {
      clientLogosContainer.style.animation = 'scrollLogos 40s linear infinite';
      // Hide mobile logos
      document.querySelectorAll('.mobile-logos').forEach(function (logo) {
        logo.style.display = 'none';
      });
    } else {
      clientLogosContainer.style.animation = 'none';
      // Show mobile logos
      document.querySelectorAll('.mobile-logos').forEach(function (logo) {
        logo.style.display = 'block';
      });
    }
  }

  // Set animation based on initial screen size
  handleAnimation();

  // Reapply animation if the window is resized
  window.addEventListener('resize', handleAnimation);
});




  function validateForm() {
    var mobileNumber = document.getElementById("number").value;

    // Regular expression to match a 10-digit numeric format
    var mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false; // Prevent form submission
    }

    return true; // Allow form submission
  }

