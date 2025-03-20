let slideIndex = 0;
let slideInterval;
const slides = document.getElementsByClassName("slides");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function startSlideshow() {
    slideInterval = setInterval(showSlides, 5000); // Slower transition every 5 seconds
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
    stopSlideshow();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    stopSlideshow();
}

// Start the slideshow automatically
startSlideshow();

// Pause slideshow when hovering over arrows
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("mouseenter", stopSlideshow);
nextButton.addEventListener("mouseenter", stopSlideshow);

prevButton.addEventListener("mouseleave", startSlideshow);
nextButton.addEventListener("mouseleave", startSlideshow);
