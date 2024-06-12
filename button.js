

//button \fading in or out
document.addEventListener("DOMContentLoaded", function() {
    var sideButton = document.getElementById('sideButton');
    var mainContent = document.querySelector('main');

    document.addEventListener("mousemove", function(event) {
        // Check if mouse is on the left side of the screen
        if (event.clientX < 50) {
            sideButton.style.left = "10px"; // Adjust the position of the button
            sideButton.style.opacity = "1"; // Show the button
            mainContent.style.filter = "blur(5px)"; // Apply a blur effect to the main content
        } else {
            sideButton.style.left = "-150px"; // Hide the button
            sideButton.style.opacity = "0"; // Hide the button
            mainContent.style.filter = "none"; // Remove the blur effect from the main content
        }
    });
});

function redirectToHomePage() {
    // Replace 'new-page.html' with the URL of your new page
    window.location.href = 'index.html';
}
function redirectToFinancePage() {
    // Replace 'new-page.html' with the URL of your new page
    window.location.href = 'finance.html';
}
function redirectToProgrammingPage() {
    // Replace 'new-page.html' with the URL of your new page
    window.location.href = 'programming.html';
}

