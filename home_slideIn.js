document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".small_card, .big_card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    cards.forEach(card => {
        observer.observe(card);
    });

    const headers = document.querySelectorAll('.header_box h1');
    headers.forEach((header, index) => {
        setTimeout(() => {
            header.classList.add('animated');
        }, index * 380);
    });
});

// Function to toggle the mobile menu
function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');

    // Toggle the menu visibility
    menuLinks.classList.toggle('show');

    // Change the toggle icon based on menu visibility (optional)
    if (menuLinks.classList.contains('show')) {
        menuToggle.innerHTML = '✕'; // Change to close icon when menu is open
    } else {
        menuToggle.innerHTML = '☰'; // Change to default icon when menu is closed
    }
}
