document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById('typed-text');
    const text = typedText.innerText;
    typedText.innerText = ''; // Clear existing text

    let i = 0;
    const typeWriter = setInterval(function() {
        if (text[i] === ';') {
            // If current character is a space, add a non-breaking space
            typedText.innerHTML += '&nbsp';
        } else {
            // Otherwise, add the character
            typedText.innerText += text[i];
        }
        i++;
        if (i === text.length) {
            clearInterval(typeWriter); // Stop animation when all characters are typed
        }
    }, 100); // Adjust typing speed if needed
});

document.addEventListener("DOMContentLoaded", function() {
    const financeSlide = document.querySelector('.slide:nth-of-type(1)');
    const programmingSlide = document.querySelector('.slide:nth-of-type(2)');
    
    // Function to fade in the slides
    function fadeInSlides() {
        financeSlide.style.opacity = '1';
        programmingSlide.style.opacity = '1';
    }

    // Call the fadeInSlides function after a slight delay to ensure it's visible after DOM load
    setTimeout(fadeInSlides, 500); // Adjust the delay if needed
});

document.addEventListener("DOMContentLoaded", function() {
    const financeSlide = document.querySelector('.slide:nth-of-type(1)');
    const programmingSlide = document.querySelector('.slide:nth-of-type(2)');
    
    // Function to slide up the slides
    function slideUpSlides() {
        financeSlide.style.transform = 'translateY(0)';
        programmingSlide.style.transform = 'translateY(0)';
    }

    // Call the slideUpSlides function after a slight delay to ensure it's visible after DOM load
    setTimeout(slideUpSlides, 500); // Adjust the delay if needed
});
