// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Get the position of the projects section
    var projects = document.getElementById('projects');
    var projectsPosition = projects.getBoundingClientRect().top;

    // Check if the projects section is in the viewport
    if (projectsPosition < window.innerHeight) {
        // If it is, add a class to fade in the projects
        projects.classList.add('fade-in');
    } else {
        // If it's not, remove the class to fade out the projects
        projects.classList.remove('fade-in');
    }
});

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Get the position of the photo and description section
    var photoDescription = document.getElementById('photo-description');
    var photoDescriptionPosition = photoDescription.getBoundingClientRect().top;

    // Check if the photo and description section is in the viewport
    if (photoDescriptionPosition < window.innerHeight) {
        // If it is, add a class to animate the photo and description
        photoDescription.classList.add('animate');
    } else {
        // If it's not, remove the class to reset the animation
        photoDescription.classList.remove('animate');
    }
});
