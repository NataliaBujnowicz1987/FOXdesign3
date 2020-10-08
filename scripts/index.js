// =======================
// logo fox animation
// =======================
const nose = document.getElementById('FOXnose');
const eyes = document.getElementById('FOXeyes');
const head = document.getElementById('FOXhead');
const body = document.getElementById('FOXbody');

const tl = gsap.timeline({ delay: 1, defaults: { visibility: 'hidden', ease: 'power2.inOut' } })

// fox
tl.staggerFromTo(body.children, 2,
    { scale: 0.4, opacity: 0, },
    { scale: 1, opacity: 1, visibility: "visible" }, 0.1)
    .staggerFromTo(head.children, 0.7, { scale: 0.4, opacity: 0, }, { scale: 1, opacity: 1, visibility: "visible" }, 0.1)
    .fromTo(nose, 1, { opacity: 0 }, { visibility: "visible", opacity: 1 })
    .fromTo(eyes, 1, { opacity: 0 }, { visibility: "visible", opacity: 1 }, '-=1');




// ===============================
// SERVICE PAGE - slide boxes
// ===============================

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("servicePage-box");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// ==========================
// MODAL BOX
// ==========================
const modal = document.getElementById("myModal");
const btn = document.getElementById("btnModal");
const spanClose = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block"
}

spanClose.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ==========================
// GSAP  - effect page
// ==========================
gsap.registerPlugin(ScrollTrigger);
const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.fromTo(section.children, { y: '+=100', opacity: 0, }, {
        y: 0, opacity: 1, stagger: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: section,
            toggleActions: "restart pause pause reverse",
            start: '0 60%',
            markers: true,
        }
    });
});

tl2.to(".text", { y: "0%", duration: 1, stagger: 2, });