document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".print_images");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const scrollAmount = carousel.clientWidth; // Scroll by one image width

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });
});
