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
const navLinks = document.querySelectorAll('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.forEach(nav => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(nav => {
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.forEach(nav => nav.style.display = 'none');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
});

// Add active state to mobile menu button
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    const spans = this.querySelectorAll('span');
    if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
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

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.forEach(nav => nav.style.display = 'flex');
    } else {
        navLinks.forEach(nav => nav.style.display = 'none');
        mobileMenuBtn.classList.remove('active');
    }
}); 