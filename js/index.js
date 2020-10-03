// Hamburger Menu Toggle
var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');

        toggle.querySelector('a').innerHTML =
            "<i class='fas fa-bars fa-2x'></li>";
    } else {
        menu.classList.add('active');
        toggle.querySelector('a').innerHTML =
            "<i class='fas fa-times fa-2x'></li>";
    }
}

toggle.addEventListener('click', toggleMenu);

// Slide Animation
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
});
