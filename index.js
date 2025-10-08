document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------------------------
    // 1. Image Lightbox/Modal Functionality
    // ------------------------------------------------------------------

    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-content");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];
    
    // Get all clickable images (excluding team portraits)
    const images = document.querySelectorAll('.image-block img, .projects img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            // Display and animate the modal
            modal.style.display = "block";
            // Wait for display:block before adding the 'active' class for transitions
            setTimeout(() => {
                modal.classList.add('active');
            }, 10); 
            
            // Set image source and alt text
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            
            // Set the caption from the data-caption attribute
            captionText.innerHTML = this.getAttribute('data-caption') || this.alt;
        });
    });

    // Function to close the modal with transition
    function closeModal() {
        modal.classList.remove('active');
        // Wait for the transition to finish before hiding the modal completely
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); 
    }

    // Close button click handler
    closeBtn.onclick = closeModal;

    // Close modal when user clicks anywhere outside of the image (on the modal overlay)
    modal.addEventListener('click', function(event) {
        // Check if the click target is the modal itself, not the image or caption
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal on ESC key press
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.classList.contains('active')) {
            closeModal();
        }
    });


    // ------------------------------------------------------------------
    // 2. Scroll-based Enhancements (e.g., Sticky Header Styling)
    // ------------------------------------------------------------------

    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Add a class to the header after scrolling a certain amount
        // This can be used to add a stronger shadow or change background color
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add a corresponding style in your CSS for '.header.scrolled' 
    // e.g., to increase box-shadow or change color.
});

// ------------------------------------------------------------------
// 3. Smooth Anchor Scroll (For Browsers that don't support CSS smooth-scroll)
// ------------------------------------------------------------------
// This is an optional fallback, as we already used CSS 'scroll-behavior: smooth;'
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/