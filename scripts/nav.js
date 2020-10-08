// =================================
// MOBILE DEVICES - MENU HAMBURGER
// =================================
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');
        // Animate links - by index each subsequent element is slightly delayed
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 4 + 1}s`;
            }
        });
        // burger animation to x symbol
        burger.classList.toggle('toggle');
    });
}

// now we have to invoke this function, without this it doesnt work
navSlide();


// ================================
// sticky navigation
// ================================
window.onscroll = function () { myFunction() };

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
