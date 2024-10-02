// Function to scroll to the selected section smoothly
function toggleSection(sectionId) {
    // Scroll to the section smoothly
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Optionally, you can add active class or perform other actions here
}


//back to top btn
// Get the button element
let backToTopBtn = document.getElementById("backToTopBtn");

// Get the second section element
let secondSection = document.getElementById("about-us");

// When the user scrolls, execute the function to show or hide the button
window.onscroll = function() {
    showBackToTopButton();
};

function showBackToTopButton() {
    // Get the current scroll position
    let scrollPosition = window.pageYOffset;

    // Get the position of the second section
    let secondSectionPosition = secondSection.offsetTop;

    // Show the button if the user scrolls past the second section
    if (scrollPosition >= secondSectionPosition) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
