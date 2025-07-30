// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const container = document.querySelector('.slider-container');
    if (container && slides.length > 0) {
        const offset = -index * 100;
        container.style.transform = `translateX(${offset}%)`;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides
if (slides.length > 0) {
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Profile Info Toggle
const profileImg = document.getElementById('Pimg');
const profileInfo = document.getElementById('Pinfo');

if (profileImg && profileInfo) {
    profileImg.addEventListener('click', function(e) {
        e.stopPropagation();
        profileInfo.classList.toggle('d-none');
    });

    // Close profile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileInfo.contains(e.target) && !profileImg.contains(e.target)) {
            profileInfo.classList.add('d-none');
        }
    });
}

// Project Carousel Functionality
let currentProjectSlide = 0;
const projectSlides = document.querySelectorAll('.slide5');
const projectDots = document.querySelectorAll('.dot2');
const slidesContainer = document.getElementById('slides2');

function showProjectSlide(index) {
    if (slidesContainer && projectSlides.length > 0) {
        const offset = -index * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        projectDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
}

function nextProjectSlide() {
    currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
    showProjectSlide(currentProjectSlide);
}

function prevProjectSlide() {
    currentProjectSlide = (currentProjectSlide - 1 + projectSlides.length) % projectSlides.length;
    showProjectSlide(currentProjectSlide);
}

// Add click event to dots
projectDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentProjectSlide = index;
        showProjectSlide(currentProjectSlide);
    });
});

// Auto-advance project slides
if (projectSlides.length > 0) {
    setInterval(nextProjectSlide, 4000); // Change slide every 4 seconds
}

// Video Modal Functionality
const videoTrigger = document.getElementById('MoveToVideo');
const videoContent = document.getElementById('VideoContent');
const closeBtn = document.getElementById('btn-close');

if (videoTrigger && videoContent) {
    videoTrigger.addEventListener('click', function() {
        videoContent.classList.remove('d-none');
        document.body.style.overflow = 'hidden';
        
        // Play video if it exists
        const video = videoContent.querySelector('video');
        if (video) {
            video.play();
        }
    });
}

if (closeBtn && videoContent) {
    closeBtn.addEventListener('click', function() {
        videoContent.classList.add('d-none');
        document.body.style.overflow = '';
        
        // Pause video if it exists
        const video = videoContent.querySelector('video');
        if (video) {
            video.pause();
        }
    });
}

// Close video modal when clicking outside
if (videoContent) {
    videoContent.addEventListener('click', function(e) {
        if (e.target === videoContent) {
            videoContent.classList.add('d-none');
            document.body.style.overflow = '';
            
            const video = videoContent.querySelector('video');
            if (video) {
                video.pause();
            }
        }
    });
}

// Counter Animation for Statistics
function animateCounters() {
    const counters = document.querySelectorAll('.counter-q h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/,/g, ''));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Intersection Observer for Counter Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'Questions') {
                animateCounters();
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

const questionsSection = document.getElementById('Questions');
if (questionsSection) {
    observer.observe(questionsSection);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.send-btn');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Lazy Loading for Images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    }
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'Escape':
            // Close modals
            if (videoContent && !videoContent.classList.contains('d-none')) {
                videoContent.classList.add('d-none');
                document.body.style.overflow = '';
                const video = videoContent.querySelector('video');
                if (video) video.pause();
            }
            
            // Close mobile menu
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Close profile menu
            if (profileInfo && !profileInfo.classList.contains('d-none')) {
                profileInfo.classList.add('d-none');
            }
            break;
            
        case 'ArrowLeft':
            if (e.target.closest('.carousel-container')) {
                e.preventDefault();
                prevProjectSlide();
            }
            break;
            
        case 'ArrowRight':
            if (e.target.closest('.carousel-container')) {
                e.preventDefault();
                nextProjectSlide();
            }
        break;
    }
});

// Touch/Swipe Support for Carousel
let startX = 0;
let endX = 0;

const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextProjectSlide();
            } else {
                prevProjectSlide();
            }
        }
    }
}

// Performance Optimization - Debounce Scroll Events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
}, 10);

window.removeEventListener('scroll', window.addEventListener('scroll', debouncedScrollHandler));
window.addEventListener('scroll', debouncedScrollHandler);

// Initialize tooltips or any other interactive elements
function initializeInteractiveElements() {
    // Add loading states
    document.body.classList.add('loaded');
    
    // Initialize any third-party libraries here
    // Example: Initialize AOS (Animate On Scroll) if included
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeInteractiveElements);
} else {
    initializeInteractiveElements();
}

// Error Handling for Images
images.forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Failed to load image:', this.src);
    });
});

// Accessibility Improvements
document.addEventListener('keydown', function(e) {
    // Add focus indicators for keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Local Storage for User Preferences (if needed)
function saveUserPreference(key, value) {
    try {
        localStorage.setItem(`detoxify_${key}`, JSON.stringify(value));
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
}

function getUserPreference(key, defaultValue = null) {
    try {
        const saved = localStorage.getItem(`detoxify_${key}`);
        return saved ? JSON.parse(saved) : defaultValue;
    } catch (e) {
        console.warn('Could not read from localStorage:', e);
        return defaultValue;
    }
}

// Initialize with saved preferences
const savedTheme = getUserPreference('theme');
if (savedTheme) {
    document.body.classList.add(`theme-${savedTheme}`);
}