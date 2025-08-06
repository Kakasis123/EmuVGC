// Loading Screen Management
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const backgroundMusic = document.getElementById('background-music');
    
    // Show loading screen for 3 seconds, then show "Loaded. click to continue"
    setTimeout(() => {
        const loadingContinue = document.getElementById('loading-continue');
        if (loadingContinue) {
            loadingContinue.style.display = 'block';
        }
    }, 3000);
    
    // Auto-continue after 8 seconds if user hasn't clicked
    setTimeout(() => {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            continueToSite();
        }
    }, 8000);
    
    // Initialize PayPal buttons after loading
    setTimeout(() => {
        if (typeof paypal !== 'undefined') {
            initializePayPalButtons();
        }
    }, 1000);
    
    // Function to continue to the main site
    window.continueToSite = function() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        const backgroundMusic = document.getElementById('background-music');
        
        console.log('continueToSite called');
        
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            console.log('Loading screen hidden');
        }
        
        setTimeout(() => {
            if (mainContent) {
                mainContent.classList.add('visible');
                console.log('Main content made visible');
            }
            initializeAnimations();
            
            // Start background music when content is visible
            if (backgroundMusic) {
                backgroundMusic.volume = 0.2; // Lower volume for background
                backgroundMusic.play().then(() => {
                    console.log('Background music started');
                }).catch(function(error) {
                    console.log('Background music autoplay was prevented:', error);
                });
            }
        }, 800);
    };
    
    // Emergency fallback - if loading screen is still visible after 10 seconds, force continue
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            console.log('Emergency: Forcing site to continue');
            continueToSite();
        }
    }, 10000);
    
    // Keyboard shortcut to bypass loading screen (press any key)
    document.addEventListener('keydown', function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            console.log('Keyboard bypass: Continuing to site');
            continueToSite();
        }
    });
    
    // Ensure the continue button is properly accessible
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('continue-button')) {
            console.log('Continue button clicked');
            continueToSite();
        }
    });
});

// Music Control
let isMusicMuted = false;

function toggleMusic() {
    const backgroundMusic = document.getElementById('background-music');
    const muteBtn = document.querySelector('.nav-mute-btn');
    const muteIcon = document.querySelector('.mute-icon');
    
    if (!muteBtn || !muteIcon) {
        console.log('Mute button elements not found');
        return;
    }
    
    if (isMusicMuted) {
        // Try to unmute
        if (backgroundMusic) {
            backgroundMusic.volume = 0.2;
            backgroundMusic.play().then(() => {
                isMusicMuted = false;
                muteBtn.classList.remove('muted');
                muteIcon.textContent = '🔊';
            }).catch(function(error) {
                console.log('Could not unmute music:', error);
            });
        }
    } else {
        // Show Dexter Morgan message
        alert('You cannot mute Dexter Morgan.');
        return;
    }
}

// Initialize animations and interactions
function initializeAnimations() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animateElements = document.querySelectorAll('.product-category-card, .vouch-item, .contact-link');
    animateElements.forEach(el => {
        observer.observe(el);
        el.classList.add('fade-in');
    });

    // Initialize product modals
    initializeProductModals();
    
    // Initialize scroll progress
    createScrollProgress();
}

// Product Modal Management
function initializeProductModals() {
    const productCards = document.querySelectorAll('.product-category-card');
    const modals = document.querySelectorAll('.product-modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Open modal on card click
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productType = this.getAttribute('data-product');
            const modal = document.getElementById(`modal-${productType}`);
            if (modal) {
                modal.classList.add('active');
            }
        });
    });

    // Close modal on close button click
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.product-modal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Close modal on outside click
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.product-modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
            }
        }
    });
}

// Progress Bar Management
function updateProgress() {
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
        progressBar.style.width = '100%';
    }
}

function completeStep(stepId) {
    const step = document.getElementById(stepId);
    if (step) {
        const statusIcon = step.querySelector('.status-icon');
        if (statusIcon) {
            statusIcon.className = 'status-icon completed';
        }
    }
}

function completeDiscordStep() {
    completeStep('discord-step');
    updateProgress();
    setTimeout(() => {
        completeStep('earn-step');
    }, 1000);
}

function completeEarnStep() {
    completeStep('earn-step');
    updateProgress();
    setTimeout(() => {
        completeStep('download-step');
    }, 1000);
}

function downloadBypass() {
    completeStep('download-step');
    updateProgress();
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`
EmuVGC Free VGC Bypass

Instructions:
1. Download and extract the bypass
2. Run as administrator
3. Follow the on-screen instructions
4. Restart your computer
5. Launch Valorant

Features:
- Disables Vanguard completely
- Works on all Windows versions
- No hardware restrictions
- Safe and undetectable

Note: This is for educational purposes only.
Use at your own risk.
    `);
    downloadLink.download = 'emuvgc_bypass.txt';
    downloadLink.click();
    
    // Show success message
    setTimeout(() => {
        alert('Bypass downloaded! Check your downloads folder.');
    }, 500);
}

// Utility functions
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

// Scroll Progress Indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    const updateProgress = debounce(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, 10);

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
}

// Discord Vouches Fetcher (commented out - requires backend proxy due to CORS)
/*
async function fetchDiscordVouches() {
    try {
        // Note: Direct Discord webhook calls from frontend will fail due to CORS
        // You would need a backend proxy to fetch these
        
        const webhookUrl = 'https://discord.com/api/webhooks/1402639425787138058/k-2JcLZc0n650I6YJruZ_rL8GOTNZCnfMaXeXbmTfUiLR-7_7QzVKNe7gWpREQqln4L9';
        
        // This would need to be routed through your backend
        // const response = await fetch('/api/discord-vouches');
        // const messages = await response.json();
        
        // updateVouchesSection(messages);
        
    } catch (error) {
        console.log('Could not fetch Discord vouches:', error);
        // Fall back to static vouches
    }
}

function updateVouchesSection(messages) {
    const vouchesContainer = document.querySelector('.vouches-container');
    if (!vouchesContainer || !messages.length) return;
    
    // Clear existing vouches
    vouchesContainer.innerHTML = '';
    
    // Add new vouches from Discord
    messages.slice(0, 6).forEach(message => {
        const vouchItem = document.createElement('div');
        vouchItem.className = 'vouch-item fade-in';
        vouchItem.innerHTML = `
            <div class="vouch-content">"${message.content}"</div>
            <div class="vouch-author">- ${message.author.username}</div>
        `;
        vouchesContainer.appendChild(vouchItem);
    });
}
*/

// PayPal Payment Integration
const paypalConfig = {
    clientId: 'YOUR_LIVE_CLIENT_ID', // Replace with your actual PayPal Client ID
    currency: 'EUR',
    merchantEmail: 'oreomcm5@gmail.com'
};

// Product pricing mapping
const productPricing = {
    '1pc': { price: '40.00', currency: 'EUR', name: '1PC Vanguard Bypass' },
    '2pc': { price: '20.00', currency: 'USD', name: '2PC Vanguard AIO Emulator' },
    'perm': { price: '15.00', currency: 'USD', name: 'Permanent HWID Spoofer' }
};

// Fallback PayPal initialization on window load
window.addEventListener('load', function() {
    if (typeof paypal !== 'undefined') {
        initializePayPalButtons();
    }
});

function initializePayPalButtons() {
    const paypalContainers = document.querySelectorAll('.paypal-button-container');
    
    paypalContainers.forEach(container => {
        const productType = container.getAttribute('data-product');
        if (productType && productPricing[productType]) {
            renderPayPalButton(productType, container);
        }
    });
}

function renderPayPalButton(productType, container) {
    const product = productPricing[productType];
    
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: product.price,
                        currency_code: product.currency
                    },
                    description: product.name,
                    custom_id: generateOrderId(productType)
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                showPaymentSuccess(data.orderID, productType, details);
            });
        },
        onError: function(err) {
            console.error('PayPal error:', err);
            alert('Payment failed. Please try again.');
        }
    }).render(container);
}

function generateOrderId(productType) {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `${productType}_${timestamp}_${random}`;
}

function showPaymentSuccess(orderId, productType, paymentDetails) {
    const modal = document.getElementById('payment-success-modal');
    if (modal) {
        const orderIdElement = modal.querySelector('.order-id');
        const productNameElement = modal.querySelector('.product-name');
        
        if (orderIdElement) orderIdElement.textContent = orderId;
        if (productNameElement) productNameElement.textContent = productPricing[productType].name;
        
        modal.classList.add('active');
    }
}

function closePaymentSuccess() {
    const modal = document.getElementById('payment-success-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Export functions for global access
window.toggleMusic = toggleMusic;
window.downloadBypass = downloadBypass;
window.completeDiscordStep = completeDiscordStep;
window.completeEarnStep = completeEarnStep;
window.closePaymentSuccess = closePaymentSuccess;
