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
});
