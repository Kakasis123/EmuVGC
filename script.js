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
        
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
        
        setTimeout(() => {
            if (mainContent) {
                mainContent.classList.add('visible');
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

    // Product Category Card Modal System
    initializeProductModals();

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-category-card, .vouch-item, .contact-link');
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    });

    // Smooth hover effects for product cards
    const productCards = document.querySelectorAll('.product-category-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Contact links hover effects
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Fetch vouches from Discord webhook (optional - requires server-side proxy)
    // fetchDiscordVouches();
}

// Product Modal System
function initializeProductModals() {
    const productCards = document.querySelectorAll('.product-category-card');
    const modals = document.querySelectorAll('.product-modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Open modal when clicking on product card
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productType = this.getAttribute('data-product');
            const modal = document.getElementById(`modal-${productType}`);
            
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.product-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.product-modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Free Bypass Step System
let completedSteps = 0;
const totalSteps = 3;

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const percentage = (completedSteps / totalSteps) * 100;
    
    progressFill.style.width = percentage + '%';
    progressText.textContent = `${completedSteps}/${totalSteps}`;
}

function completeStep(stepId) {
    const step = document.getElementById(stepId);
    const statusIcon = step.querySelector('.status-icon');
    const button = step.querySelector('.step-button');
    
    statusIcon.className = 'status-icon completed';
    statusIcon.textContent = '✅';
    button.disabled = true;
    button.style.background = 'var(--border-color)';
    
    completedSteps++;
    updateProgress();
}

function completeDiscordStep() {
    const button = document.querySelector('.discord-btn');
    const btnText = button.querySelector('.btn-text');
    
    // Change button text to show it's opening
    btnText.textContent = 'Opening Discord...';
    button.disabled = true;
    
    // Open Discord link in new tab
    window.open('https://discord.gg/EmuVGC', '_blank');
    
    // Wait 10 seconds before completing
    setTimeout(() => {
        completeStep('step-discord');
        
        // Enable earn step button
        const earnBtn = document.querySelector('.earn-btn');
        earnBtn.disabled = false;
        earnBtn.style.background = 'linear-gradient(135deg, var(--success-color), #00cc6a)';
        
        // Show completion message
        btnText.textContent = 'Discord Joined!';
    }, 10000);
}

function completeEarnStep() {
    const button = document.querySelector('.earn-btn');
    const btnText = button.querySelector('.btn-text');
    
    // Change button text to show it's opening
    btnText.textContent = 'Opening Earn Link...';
    button.disabled = true;
    
    // Open earn link in new tab
    window.open('https://tpi.li/eDNYMxfNexn', '_blank');
    
    // Wait 10 seconds before completing
    setTimeout(() => {
        completeStep('step-earn');
        
        // Enable download step button
        const downloadBtn = document.querySelector('.download-btn');
        downloadBtn.disabled = false;
        downloadBtn.style.background = 'linear-gradient(135deg, var(--success-color), #00cc6a)';
        
        // Show completion message
        btnText.textContent = 'Earn Link Completed!';
    }, 10000);
}

function downloadBypass() {
    const button = document.querySelector('.download-btn');
    const btnText = button.querySelector('.btn-text');
    
    // Change button text
    btnText.textContent = 'Downloading...';
    button.disabled = true;
    
    // Complete the step
    completeStep('step-download');
    
    // Show completion message
    btnText.textContent = 'Download Complete!';
    
    // Open the download link
    window.open('https://gofile.io/d/nrvyWi', '_blank');
    
    // Reset button after a delay
    setTimeout(() => {
        btnText.textContent = 'Download Bypass';
        button.disabled = false;
    }, 2000);
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

// Add smooth scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, #ffffff, #cccccc);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', debounce(function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, 10));
}

// Initialize scroll progress when content is visible
window.addEventListener('load', function() {
    setTimeout(createScrollProgress, 3800);
});

// Add CSS for mobile navigation
const mobileNavStyles = `
    .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.98);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        border-top: 1px solid var(--border-color);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = mobileNavStyles;
document.head.appendChild(styleSheet);

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
    // Initialize PayPal buttons for each product
    Object.keys(productPricing).forEach(productType => {
        const container = document.getElementById(`paypal-button-${productType}`);
        if (container && typeof paypal !== 'undefined') {
            renderPayPalButton(productType, container);
        }
    });
}

function renderPayPalButton(productType, container) {
    const product = productPricing[productType];
    if (!product) return;

    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
            height: 50
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: product.price,
                        currency_code: product.currency
                    },
                    description: product.name,
                    custom_id: productType
                }],
                application_context: {
                    brand_name: 'EmuVGC',
                    user_action: 'PAY_NOW'
                }
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // Generate order ID
                const orderId = generateOrderId(productType);
                
                // Show success modal
                showPaymentSuccess(orderId, productType, details);
                
                // Close product modal
                const activeModal = document.querySelector('.product-modal.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        },
        onError: function(err) {
            console.error('PayPal Error:', err);
            alert('Payment failed. Please try again or contact support.');
        },
        onCancel: function(data) {
            console.log('Payment cancelled:', data);
        }
    }).render(container);
}

// Generate secure order ID
function generateOrderId(productType) {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    const productCode = productType.toUpperCase();
    
    // Format: EMUVGC-PRODUCT+RANDOMCODE (e.g., EMUVGC-1PC8263)
    return `EMUVGC-${productCode}${randomNum}`;
}

// Show payment success modal
function showPaymentSuccess(orderId, productType, paymentDetails) {
    const modal = document.getElementById('payment-success-modal');
    const orderIdDisplay = document.getElementById('order-id-display');
    
    if (modal && orderIdDisplay) {
        orderIdDisplay.textContent = orderId;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Log payment details for debugging (remove in production)
        console.log('Payment successful:', {
            orderId,
            productType,
            paymentDetails
        });
    }
}

// Close payment success modal
function closePaymentSuccess() {
    const modal = document.getElementById('payment-success-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make closePaymentSuccess globally available
window.closePaymentSuccess = closePaymentSuccess;