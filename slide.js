//nav slide
// Function to open the vertical navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Function to close the vertical navbar
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.slide-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.5  // Trigger when 50% of the element is in view
    });

    observer.observe(aboutSection);
});
