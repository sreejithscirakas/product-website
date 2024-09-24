const texts = document.querySelectorAll('.slide-text');
let currentIndex = 0;

// Show the first text on load
texts[currentIndex].classList.add('active');

// Function to show the next text
function showNextText() {
    texts[currentIndex].classList.remove('active'); // Hide current text
    currentIndex = (currentIndex + 1) % texts.length; // Move to next text
    texts[currentIndex].classList.add('active'); // Show next text
}

// Change text every 4 seconds
setInterval(showNextText, 4000);



// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
}

// Initial state
header.classList.add('transparent');

// Event listener for scroll
window.addEventListener('scroll', handleScroll);


var acc = document.getElementsByClassName("accordion");
var displayedImage = document.getElementById("displayedImage");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    var isActive = this.classList.contains("active");

    // Close all panels
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.maxHeight = null;
    }

    // If it was not active, open it and change the image
    if (!isActive) {
      this.classList.toggle("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      // Change the image based on the clicked accordion
      displayedImage.src = this.getAttribute("data-image");
    } else {
      // If the clicked section was already active, reset to default image
      displayedImage.src = "img/all-v1.png";
    }
  });
}





