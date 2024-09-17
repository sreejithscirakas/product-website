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





