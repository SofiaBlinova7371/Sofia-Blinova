document.addEventListener('DOMContentLoaded', function () {
    const photosContainer = document.querySelector('.photos');
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
    const overlayImage = document.createElement('img');
    overlay.appendChild(overlayImage);
    document.body.appendChild(overlay);

    // Open image in overlay
    photosContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const imgSrc = e.target.getAttribute('src');
            overlayImage.setAttribute('src', imgSrc);
            overlay.classList.add('active');
        }
    });

    // Close overlay on click
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});

