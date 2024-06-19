document.addEventListener('DOMContentLoaded', function () {
    function animateCount(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const countElement = entry.target;
                const endValue = parseInt(countElement.getAttribute('data-count'), 10);
                animateCount(countElement, 0, endValue, 2000);
                observer.unobserve(countElement);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.count').forEach(countElement => {
        const endValue = parseInt(countElement.innerText, 10);
        countElement.setAttribute('data-count', endValue);
        countElement.innerText = '0';
        observer.observe(countElement);
    });
});