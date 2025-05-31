// Intersection Observer for scroll animations
const sections = document.querySelectorAll('.baroque-section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            mobileMenu.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('show');
        mobileMenuBtn.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 