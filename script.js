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
const leftNav = document.querySelector('.left-links');
const rightNav = document.querySelector('.right-links');

mobileMenuBtn.addEventListener('click', () => {
    leftNav.classList.toggle('active');
    rightNav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
const allNavLinks = document.querySelectorAll('.nav-links a');
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            leftNav.classList.remove('active');
            rightNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Add active state to mobile menu button
mobileMenuBtn.addEventListener('click', function() {
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

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        leftNav.classList.remove('active');
        rightNav.classList.remove('active');
        leftNav.style.display = 'flex';
        rightNav.style.display = 'flex';
    } else {
        leftNav.style.display = 'none';
        rightNav.style.display = 'none';
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