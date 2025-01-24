document.addEventListener("DOMContentLoaded", function () {
    const footerElement = document.createElement('div');
    footerElement.classList.add('footer-container'); // Optional wrapper class
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            footerElement.innerHTML = data;
            document.body.appendChild(footerElement);

            // Dynamically apply the footer CSS
            const footerStyle = document.createElement('link');
            footerStyle.rel = 'stylesheet';
            footerStyle.href = 'footer.css'; // Your consistent footer styling file
            document.head.appendChild(footerStyle);
        })
        .catch(error => console.error('Error loading footer:', error));
});
