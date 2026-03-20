/* ========================= */
/* MENU TOGGLE & NAVBAR STUFF */
/* ========================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* Mobile Menu Toggle */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll Events */
window.onscroll = () => {

    /* Active Section Link */
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
/* ========================= */
/* READ MORE BUTTONS FIXED */
/* ========================= */
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const container = this.parentElement;
            const moreText = container.querySelector('.more-text');

            if (moreText.style.display === "inline") {
                moreText.style.display = "none";
                this.textContent = "Read More";
            } else {
                moreText.style.display = "inline";
                this.textContent = "Read Less";
            }
        });
    });
});

/* ========================= */
/* TYPING ANIMATION */
/* ========================= */
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".typing-text")) {
        new Typed(".typing-text", {
            strings: ["Computer Science Student", "English Educator", "Web Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
        });
    }
});

/* ========================= */
/* SCROLL REVEAL ANIMATION */
/* ========================= */
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}
