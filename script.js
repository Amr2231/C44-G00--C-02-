// Dark Mode Functionality
class ThemeManager {
  constructor() {
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.themeIcon = document.getElementById('theme-icon');
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    
    this.init();
  }

  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);
    
    // Add event listener for theme toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!this.getStoredTheme()) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  getStoredTheme() {
    return localStorage.getItem('detoxify-theme');
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('detoxify-theme', theme);
    this.updateThemeIcon(theme);
  }

  updateThemeIcon(theme) {
    if (this.themeIcon) {
      if (theme === 'dark') {
        this.themeIcon.className = 'fas fa-sun';
      } else {
        this.themeIcon.className = 'fas fa-moon';
      }
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    
    // Add a subtle animation effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 300);
  }
}

// Hero Slider Functionality
class HeroSlider {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.currentSlide = 0;
    this.slideInterval = null;
    this.init();
  }

  init() {
    if (this.slides.length > 0) {
      this.startSlider();
      this.setupSlider();
    }
  }

  setupSlider() {
    // Set initial positions
    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlider();
  }

  updateSlider() {
    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
    });
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlider() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}

// Project Carousel Functionality
class ProjectCarousel {
  constructor() {
    this.slidesContainer = document.getElementById('slides2');
    this.slides = document.querySelectorAll('.slide5');
    this.dots = document.querySelectorAll('.dot2');
    this.currentSlide = 0;
    this.init();
  }

  init() {
    if (this.slides.length > 0) {
      this.setupCarousel();
      this.addEventListeners();
      this.startAutoPlay();
    }
  }

  setupCarousel() {
    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });
    this.updateDots();
  }

  addEventListeners() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goToSlide(index);
      });
    });
  }

  goToSlide(slideIndex) {
    this.currentSlide = slideIndex;
    this.updateCarousel();
    this.updateDots();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateCarousel();
    this.updateDots();
  }

  updateCarousel() {
    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
    });
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }

  startAutoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }
}

// Mobile Navigation
class MobileNavigation {
  constructor() {
    this.mobileMenuToggle = document.getElementById('mobile-menu');
    this.navLinks = document.querySelector('.nav-links');
    this.init();
  }

  init() {
    if (this.mobileMenuToggle && this.navLinks) {
      this.mobileMenuToggle.addEventListener('click', () => {
        this.toggleMenu();
      });

      // Close menu when clicking on nav links
      this.navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          this.closeMenu();
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.mobileMenuToggle.contains(e.target) && !this.navLinks.contains(e.target)) {
          this.closeMenu();
        }
      });
    }
  }

  toggleMenu() {
    this.mobileMenuToggle.classList.toggle('active');
    this.navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }

  closeMenu() {
    this.mobileMenuToggle.classList.remove('active');
    this.navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
}

// Profile Menu
class ProfileMenu {
  constructor() {
    this.profileImg = document.getElementById('Pimg');
    this.profileInfo = document.getElementById('Pinfo');
    this.init();
  }

  init() {
    if (this.profileImg && this.profileInfo) {
      this.profileImg.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleProfileMenu();
      });

      document.addEventListener('click', () => {
        this.closeProfileMenu();
      });

      this.profileInfo.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  }

  toggleProfileMenu() {
    this.profileInfo.classList.toggle('d-none');
  }

  closeProfileMenu() {
    this.profileInfo.classList.add('d-none');
  }
}

// Video Modal
class VideoModal {
  constructor() {
    this.videoTrigger = document.getElementById('MoveToVideo');
    this.videoContent = document.getElementById('VideoContent');
    this.closeBtn = document.getElementById('btn-close');
    this.init();
  }

  init() {
    if (this.videoTrigger && this.videoContent && this.closeBtn) {
      this.videoTrigger.addEventListener('click', () => {
        this.openModal();
      });

      this.closeBtn.addEventListener('click', () => {
        this.closeModal();
      });

      this.videoContent.addEventListener('click', (e) => {
        if (e.target === this.videoContent) {
          this.closeModal();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal();
        }
      });
    }
  }

  openModal() {
    this.videoContent.classList.remove('d-none');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.videoContent.classList.add('d-none');
    document.body.style.overflow = '';
    
    // Pause video if it's playing
    const video = this.videoContent.querySelector('video');
    if (video) {
      video.pause();
    }
  }
}

// Scroll Navigation
class ScrollNavigation {
  constructor() {
    this.nav = document.querySelector('nav');
    this.init();
  }

  init() {
    if (this.nav) {
      window.addEventListener('scroll', () => {
        this.handleScroll();
      });
    }
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.nav.classList.add('scrolled');
    } else {
      this.nav.classList.remove('scrolled');
    }
  }
}

// Counter Animation
class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.counter-q h4');
    this.init();
  }

  init() {
    if (this.counters.length > 0) {
      this.observeCounters();
    }
  }

  observeCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.textContent.replace(/,/g, ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = this.formatNumber(target);
        clearInterval(timer);
      } else {
        element.textContent = this.formatNumber(Math.floor(current));
      }
    }, 16);
  }

  formatNumber(num) {
    return num.toLocaleString();
  }
}

// Form Handling
class FormHandler {
  constructor() {
    this.contactForm = document.querySelector('.contact-form form');
    this.init();
  }

  init() {
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        this.handleSubmit(e);
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.contactForm);
    const data = Object.fromEntries(formData);
    
    // Add loading state
    const submitBtn = this.contactForm.querySelector('.send-btn');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }, 1500);
  }
}

// Smooth Scrolling for Anchor Links
class SmoothScrolling {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Lazy Loading for Images
class LazyLoading {
  constructor() {
    this.images = document.querySelectorAll('img');
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            this.lazyImageObserver.unobserve(img);
          }
        });
      });

      this.images.forEach(img => {
        this.lazyImageObserver.observe(img);
      });
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  new ThemeManager();
  new HeroSlider();
  new ProjectCarousel();
  new MobileNavigation();
  new ProfileMenu();
  new VideoModal();
  new ScrollNavigation();
  new CounterAnimation();
  new FormHandler();
  new SmoothScrolling();
  new LazyLoading();

  // Add fade-in animation to elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for fade-in animation
  document.querySelectorAll('.info-features, .slide5, .content-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Performance optimizations
window.addEventListener('load', () => {
  // Remove loading states
  document.body.classList.add('loaded');
});

// Handle visibility change for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when tab is not visible
    document.body.classList.add('paused');
  } else {
    // Resume animations when tab becomes visible
    document.body.classList.remove('paused');
  }
});

// Error handling for missing elements
window.addEventListener('error', (e) => {
  console.warn('Script error:', e.error);
});

// Export classes for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ThemeManager,
    HeroSlider,
    ProjectCarousel,
    MobileNavigation,
    ProfileMenu,
    VideoModal,
    ScrollNavigation,
    CounterAnimation,
    FormHandler,
    SmoothScrolling,
    LazyLoading
  };
}