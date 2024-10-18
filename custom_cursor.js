document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');

    // Check if it's a mobile device
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        // If on mobile, do not show the custom cursor
        return;
    }

    // Continue with the custom cursor functionality for desktop
    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', function () {
        customCursor.classList.add('clicked');
    });

    document.addEventListener('mouseup', function () {
        customCursor.classList.remove('clicked');
    });

    // Make the cursor visible on hover over relevant elements
    document.querySelectorAll('.a_img, .menu_link, #link').forEach(item => {
        item.addEventListener('mouseenter', function () {
            customCursor.classList.add('visible');
        });

        item.addEventListener('mouseleave', function () {
            customCursor.classList.remove('visible');
        });
    });
});
