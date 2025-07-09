// Carousel functionality for services
const nextBtn = document.querySelector('.carousel-next');
const carousel = document.querySelector('.service-carousel');

if (nextBtn && carousel) {
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
    });
}
// Optionally, add more interactivity as needed
