// Get the custom cursor element
const customCursor = document.querySelector('.custom-cursor');

// Function to update the position of the custom cursor
function moveCursor(e) {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
}

// Function to show the custom cursor with smooth transition
function showCursor() {
    customCursor.classList.add('visible');
}

// Function to hide the custom cursor with smooth transition
function hideCursor() {
    customCursor.classList.remove('visible');
}

// Function to scale down the cursor when clicked
function clickCursor() {
    customCursor.classList.add('clicked');
}

// Function to return the cursor to normal size when released
function releaseCursor() {
    customCursor.classList.remove('clicked');
}

// Get all the elements that should have the custom cursor (e.g., .a_img elements)
const hoverElements = document.querySelectorAll('.a_img');

// Add event listeners to each hoverable element
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', showCursor);  // Show cursor on hover
    element.addEventListener('mouseleave', hideCursor);  // Hide cursor when not hovering
    element.addEventListener('mousemove', moveCursor);   // Move the cursor with the mouse
    element.addEventListener('mousedown', clickCursor);  // Scale down cursor on click
    element.addEventListener('mouseup', releaseCursor);  // Return cursor to normal size on release
});
