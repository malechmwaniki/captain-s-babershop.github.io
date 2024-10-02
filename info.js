
    // Function to check if the section is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the 'show' class when in the viewport
    function checkViewport() {
        const infoContainer = document.querySelector('.info-container');
        if (isElementInViewport(infoContainer)) {
            infoContainer.classList.add('show');
        }
    }

    // Listen for scroll event
    window.addEventListener('scroll', checkViewport);
    
    // Run on load to check if it's already in the viewport
    window.addEventListener('load', checkViewport);
