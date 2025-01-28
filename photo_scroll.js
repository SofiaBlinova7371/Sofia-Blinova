document.querySelectorAll(".project_name").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const photosContainer = document.querySelector(".photos");
            const offsetTop = targetElement.offsetTop - photosContainer.offsetTop;

            photosContainer.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    });
});
