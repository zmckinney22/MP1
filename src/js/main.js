

/// REQUIREMENT 4
const navbar = document.querySelector('.navbar')

function resizeNavBar() {
    if (window.scrollY > 60) {
        navbar.classList.add('is-scrolled');
    } else {
        navbar.classList.remove('is-scrolled');
    }
}

window.addEventListener('scroll', resizeNavBar)
resizeNavBar();

/// REQUIREMENT 4


const slidesContainer = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentSlide = 0;

function showSlide(index) {
    if (index <0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
     
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

}


prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});



const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

modalOpenButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal-open');
        const modal = document.getElementById(modalId);
        modal.classList.add('modal-open');
    });
});

modalCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('modal-open');
    });
});



const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('header[id], main section[id]');


function updateActiveNav() {
    const navBarHeight = document.querySelector('.navbar').offsetHeight;
    const scrollPosition = window.scrollY + navBarHeight + 10;
    let currentSection = sections[0];

    sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
            currentSection = section;
        }
    });
    
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
        currentSection = sections[sections.length - 1];
    }

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection.id}`) {
            link.classList.add('active');
        }
    })


}


window.addEventListener('scroll', updateActiveNav);
updateActiveNav();
