document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const projects = document.querySelectorAll(".photos .project");

    sections.forEach(section => {
        section.addEventListener("click", () => {
            // Toggle the "active" class on the clicked section's list
            const list = section.nextElementSibling;
            const isOpening = !list.classList.contains("active"); // Check if opening or closing
            list.classList.toggle("active");

            // Adjust the height of the list dynamically
            if (isOpening) {
                list.style.height = `${list.scrollHeight}px`;
            } else {
                list.style.height = "0";
            }

            // Reset heights of other lists and hide their corresponding projects
            sections.forEach(otherSection => {
                const otherList = otherSection.nextElementSibling;
                if (otherSection !== section && otherList.classList.contains("active")) {
                    otherList.classList.remove("active");
                    otherList.style.height = "0";
                }
            });

            // Handle the right content (projects)
            const sectionName = section.textContent.trim(); // Get the section title
            if (isOpening) {
                projects.forEach(project => {
                    if (project.dataset.section === sectionName) {
                        project.style.height = `${project.scrollHeight}px`;
                        project.classList.add("active");
                    } else {
                        project.style.height = "0";
                        project.classList.remove("active");
                    }
                });
            } else {
                // Hide all projects when the list is closed
                projects.forEach(project => {
                    project.style.height = "0";
                    project.classList.remove("active");
                });
            }
        });
    });
});
