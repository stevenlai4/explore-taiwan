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
