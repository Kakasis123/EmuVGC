// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const nav = document.querySelector('.nav');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const statNumbers = document.querySelectorAll('.stat-number');
const floatingCards = document.querySelectorAll('.floating-card');
const featureCards = document.querySelectorAll('.feature-card');

// Loading Screen Animation
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Start main animations after loading screen disappears
        setTimeout(() => {
            initAnimations();
        }, 800);
    }, 2000);
});

// Initialize all animations
function initAnimations() {
    // Animate stats on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats')) {
                    animateStats();
                }
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.style.animationDelay = Array.from(featureCards).indexOf(entry.target) * 0.1 + 's';
                    entry.target.classList.add('animate-in');
                }
            }
        });
    }, { threshold: 0.3 });

    // Observe stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) observer.observe(statsSection);

    // Observe feature cards
    featureCards.forEach(card => observer.observe(card));

    // Add parallax effect to floating particles
    addParallaxEffect();
    
    // Add smooth scroll behavior to nav links
    addSmoothScrolling();
    
    // Add interactive effects to floating cards
    addCardInteractions();
    
    // Add button ripple effects
    addButtonRipples();
    
    // Add dynamic grid animation
    addGridAnimation();
}

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animate Statistics Numbers
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 20);
    });
}

// Parallax Effect for Background Elements
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.grid-pattern');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Smooth Scrolling for Navigation Links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Interactive Floating Cards
function addCardInteractions() {
    floatingCards.forEach((card, index) => {
        // Add mouse move effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.05)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
        
        // Add click animation
        card.addEventListener('click', () => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = '';
            }, 10);
            
            // Create sparkle effect
            createSparkleEffect(card);
        });
    });
}

// Create Sparkle Effect
function createSparkleEffect(element) {
    const sparkles = 8;
    for (let i = 0; i < sparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #06ffa5;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        const rect = element.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        document.body.appendChild(sparkle);
        
        // Animate sparkle
        sparkle.animate([
            { 
                transform: 'scale(0) translate(0, 0)',
                opacity: 1
            },
            { 
                transform: `scale(1) translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// Button Ripple Effects
function addButtonRipples() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                transform: scale(0);
                z-index: 1;
            `;
            
            this.appendChild(ripple);
            
            ripple.animate([
                { transform: 'scale(0)', opacity: 1 },
                { transform: 'scale(1)', opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => ripple.remove();
        });
    });
}

// Dynamic Grid Animation
function addGridAnimation() {
    const gridPattern = document.querySelector('.grid-pattern');
    if (!gridPattern) return;
    
    let animationPhase = 0;
    
    setInterval(() => {
        animationPhase += 0.02;
        const intensity = 0.1 + Math.sin(animationPhase) * 0.05;
        
        gridPattern.style.backgroundImage = `
            linear-gradient(rgba(59, 130, 246, ${intensity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, ${intensity}) 1px, transparent 1px)
        `;
    }, 50);
}

// Create Floating Particles
function createFloatingParticles() {
    const particleContainer = document.querySelector('.floating-particles');
    if (!particleContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(6, 255, 165, 0.6);
            border-radius: 50%;
            pointer-events: none;
        `;
        
        // Random initial position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particleContainer.appendChild(particle);
        
        // Animate particle
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(0)',
                opacity: 0
            },
            { 
                transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1)`,
                opacity: 1
            },
            { 
                transform: `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 8000 + Math.random() * 4000,
            delay: Math.random() * 2000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
}

// Cursor Trail Effect
function addCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Create trail elements
        trail.forEach((point, index) => {
            const trailDot = document.createElement('div');
            trailDot.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(6, 255, 165, ${0.8 - index * 0.08});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${point.x}px;
                top: ${point.y}px;
                transform: translate(-50%, -50%);
            `;
            
            document.body.appendChild(trailDot);
            
            setTimeout(() => trailDot.remove(), 100);
        });
    });
}

// Initialize cursor trail on desktop
if (window.innerWidth > 768) {
    addCursorTrail();
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Additional scroll-based animations can go here
}, 16)); // ~60fps

// Add CSS animations for feature cards
const style = document.createElement('style');
style.textContent = `
    .feature-card.animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Create floating particles after DOM is loaded
setTimeout(createFloatingParticles, 3000);

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate animations on resize
    if (window.innerWidth <= 768) {
        // Disable some effects on mobile for performance
        document.querySelectorAll('.floating-card').forEach(card => {
            card.style.animation = 'none';
        });
    } else {
        // Re-enable effects on desktop
        document.querySelectorAll('.floating-card').forEach(card => {
            card.style.animation = '';
        });
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus management for accessibility
document.querySelectorAll('.btn, .nav-link').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #06ffa5';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});

console.log('🎮 EmuVGC.wtf loaded successfully! Welcome to competitive Pokemon emulation.');