document.addEventListener('DOMContentLoaded', function() {
    let currentSpread = 1;
    const totalSpreads = 25; // Update to 25, as we have 25 spreads
    const spreadImage = document.getElementById('spread-image');
    
    let autoChange; // Declare autoChange interval
    let isChanging = false; // Track if an image is currently changing to prevent rapid changes

    // Function to start/restart auto-change
    function startAutoChange() {
        clearInterval(autoChange); // Clear any existing interval
        autoChange = setInterval(nextSpread, 3000); // Auto-change every 3 seconds
    }

    // Start auto-change on page load
    startAutoChange();

    // Event listener for left-half click (previous spread)
    document.querySelector('.left-half').addEventListener('click', function() {
        if (!isChanging) { 
            previousSpread();
            restartAutoChange(); // Restart auto-change 3 seconds after interaction
        }
    });

    // Event listener for right-half click (next spread)
    document.querySelector('.right-half').addEventListener('click', function() {
        if (!isChanging) { 
            nextSpread();
            restartAutoChange(); // Restart auto-change 3 seconds after interaction
        }
    });

    // Function to restart auto-changing after a click
    function restartAutoChange() {
        clearInterval(autoChange); // Stop auto-change temporarily
        startAutoChange(); // Immediately restart 3-second cycle after change completes
    }

    // Function to go to the next spread
    function nextSpread() {
        if (isChanging) return; // Prevent multiple changes at once
        isChanging = true;
        currentSpread = (currentSpread % totalSpreads) + 1; // Loop from 25 back to 1
        changeSpread();
    }

    // Function to go to the previous spread
    function previousSpread() {
        if (isChanging) return; // Prevent multiple changes at once
        currentSpread = (currentSpread - 1 + totalSpreads) % totalSpreads || totalSpreads; // Loop from 1 back to 25
        isChanging = true;
        changeSpread();
    }

    // Function to change the image
    function changeSpread() {
        spreadImage.classList.remove('active'); // Start fade-out
        setTimeout(() => {
            spreadImage.src = `Images/Axles&Spokes/spreads/${currentSpread}.png`; // Change to next/prev image
            spreadImage.classList.add('active'); // Start fade-in
            setTimeout(() => {
                isChanging = false; // Allow next change only after fade-in is complete
            }, 500); // Ensure smooth transition before allowing another change
        }, 300); // 300ms delay for fade-out
    }
});
