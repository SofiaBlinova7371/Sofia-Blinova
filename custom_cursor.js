document.addEventListener('DOMContentLoaded', function () {
    // Load the custom cursor CSS dynamically
    const cursorStylesheet = document.createElement('link');
    cursorStylesheet.rel = 'stylesheet';
    cursorStylesheet.href = 'custom_cursor.css'; // Path to your custom cursor CSS
    document.head.appendChild(cursorStylesheet);

    // Create the custom cursor element dynamically
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    const cursorImage = document.createElement('img');
    cursorImage.src = 'Images/Logos/click_mouse.svg'; // Path to your cursor image
    cursorImage.alt = 'Custom cursor';
    customCursor.appendChild(cursorImage);
    document.body.appendChild(customCursor);

    // Check if it's a mobile device
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        // If on mobile, do not enable custom cursor functionality
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
    document.querySelectorAll('.a_img, #website_link, .menu_link, .left-half, .right-half, .project_name, .section').forEach(item => {
        item.addEventListener('mouseenter', function () {
            customCursor.classList.add('visible');
        });

        item.addEventListener('mouseleave', function () {
            customCursor.classList.remove('visible');
        });
    });
});
