
//Слайдер
const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.custom',
        clickable: true,
    },
    breakpoints: {
        480: { slidesPerView: 2 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});


// Intersection Observer для активации анимации при прокрутке
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.4 });

// 
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});



