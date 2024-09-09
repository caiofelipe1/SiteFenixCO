document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.getElementById("hamburguer");
    const menu = document.querySelector("nav.menu");

    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carrossel-prev');
    const nextButton = document.querySelector('.carrossel-next');
    const slides = document.querySelectorAll('.carrossel-slide');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Optional: Auto-play functionality
    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
});