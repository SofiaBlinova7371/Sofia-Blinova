document.addEventListener("DOMContentLoaded", () => {
  const previews = document.querySelectorAll(".hero_preview");
  const circles = document.querySelectorAll(".circle");

  function showPreview(index) {
    previews.forEach((preview, i) => {
      preview.classList.toggle("visible", i === index);
    });
  }

  // Show the first image by default
  showPreview(0);

  circles.forEach((circle, index) => {
    const isMobile = window.innerWidth <= 800;

    if (isMobile) {
      circle.addEventListener("click", () => {
        showPreview(index);
      });
    } else {
      circle.addEventListener("mouseenter", () => {
        showPreview(index);
      });
    }
  });
});