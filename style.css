/* Reset and Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #ffffff;
    --secondary-color: #000000;
    --accent-color: #333333;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --text-muted: #999999;
    --border-color: #333333;
    --success-color: #00ff88;
    --warning-color: #ffaa00;
    --error-color: #ff4444;
    --gradient-bg: linear-gradient(135deg, #000000 0%, #333333 50%, #ffffff 100%);
    --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Performance optimizations */
html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--secondary-color);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Loading Screen */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: opacity 0.8s ease, visibility 0.8s ease;
}

.loading-screen.hidden {
    opacity: 0;
    visibility: hidden;
}

.loading-content {
    text-align: center;
}

.loading-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 3rem;
    font-weight: 300;
    color: var(--primary-color);
    margin-bottom: 2rem;
    letter-spacing: -1px;
    opacity: 0;
    animation: fadeInUp 1s ease 0.5s forwards;
}

.loading-bar {
    width: 300px;
    height: 2px;
    background: var(--accent-color);
    margin: 0 auto;
    border-radius: 1px;
    overflow: hidden;
    opacity: 0;
    animation: fadeInUp 1s ease 1s forwards;
}

.loading-progress {
    height: 100%;
    background: var(--primary-color);
    width: 0%;
    animation: loadingProgress 2s ease 1.2s forwards;
}

.loading-continue {
    margin-top: 2rem;
    opacity: 0;
    animation: fadeInUp 1s ease 3.5s forwards;
}

.continue-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
}

.continue-button {
    background: transparent;
    border: 1px solid var(--text-primary);
    color: var(--text-primary);
    padding: 0.8rem 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

.continue-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
}

.continue-button:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--text-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.continue-button:hover::before {
    left: 100%;
}

/* Main Content */
.main-content {
    opacity: 0;
    transition: opacity 0.8s ease;
}

.main-content.visible {
    opacity: 1;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo .logo-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

.logo-accent {
    color: var(--text-muted);
}

.nav-menu {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 400;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background: transparent;
    border: 1px solid transparent;
}

.nav-link:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
}

.nav-link.active {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--text-primary), #cccccc);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-link:hover::after {
    width: 80%;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.nav-toggle span {
    width: 20px;
    height: 1px;
    background: var(--text-primary);
    transition: all 0.3s ease;
}

.nav-mute-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-mute-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.1);
}

.mute-icon {
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

.nav-mute-btn.muted .mute-icon {
    opacity: 0.5;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-bg);
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(20, 20, 20, 0.4) 100%);
    z-index: 1;
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.hero-content {
    text-align: left;
}

.hero-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 4.5rem;
    font-weight: 200;
    letter-spacing: -2px;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 1.2s ease 0.3s forwards;
    line-height: 1;
}

.hero-accent {
    color: var(--text-muted);
    font-weight: 300;
}

.hero-subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--text-secondary);
    letter-spacing: 3px;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 1.2s ease 0.6s forwards;
    text-transform: uppercase;
}

.hero-description {
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 1.2s ease 0.9s forwards;
}

.hero-description p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.hero-quote {
    margin: 2rem 0;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 1.2s ease 1.5s forwards;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.quote-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-style: italic;
}

.quote-author {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 300;
}

.hero-cta {
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 1.2s ease 1.8s forwards;
}

.loading-music {
    margin-top: 2rem;
    text-align: center;
    opacity: 0;
    animation: fadeInUp 1s ease 2s forwards;
}

.music-text {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-style: italic;
}

/* Free VGC Bypass Section */
.free-bypass {
    padding: 4rem 0;
    background: linear-gradient(135deg, #111111 0%, #222222 50%, #333333 100%);
}

.bypass-content {
    max-width: 700px;
    margin: 0 auto;
}

.bypass-info {
    text-align: center;
    margin-bottom: 2rem;
}

/* Free Product Selection */
.free-product-selection {
    margin-bottom: 2rem;
}

.free-product-selection h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 0.5px;
}

.free-products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
}

.free-product-option {
    position: relative;
}

.free-product-option input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.free-product-option label {
    display: block;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
}

.free-product-option input[type="radio"]:checked + label {
    background: rgba(0, 255, 136, 0.1);
    border-color: var(--success-color);
}

.free-product-option label:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--text-primary);
}

.product-title {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 0.3rem;
    letter-spacing: 0.5px;
}

.product-desc {
    display: block;
    font-size: 0.8rem;
    color: var(--text-secondary);
    font-weight: 300;
}

.bypass-subtitle {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.bypass-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

.bypass-steps {
    margin-bottom: 2rem;
}

.bypass-steps h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: center;
}

.steps-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.step-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.step-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--text-secondary);
    transform: translateX(5px);
}

.step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--success-color);
    color: var(--secondary-color);
    border-radius: 50%;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.step-content h5 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.step-content p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1rem;
}

.step-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, var(--success-color), #00cc6a);
    color: var(--secondary-color);
    border: none;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

.step-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
}

.step-button:hover::before {
    left: 100%;
}

.step-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
}

.step-button:disabled {
    background: var(--border-color);
    color: var(--text-muted);
    cursor: not-allowed;
    opacity: 0.6;
}

.btn-icon {
    font-size: 1.1rem;
}

.step-status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}

.status-icon {
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.status-icon.pending {
    color: var(--warning-color);
}

.status-icon.completed {
    color: var(--success-color);
    animation: checkmark 0.5s ease;
}

@keyframes checkmark {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.bypass-progress {
    margin-top: 3rem;
    text-align: center;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: var(--border-color);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--success-color), #00cc6a);
    width: 0%;
    transition: width 0.5s ease;
}

.progress-text {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.bypass-download {
    text-align: center;
}

.download-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 3rem;
    background: linear-gradient(135deg, var(--success-color), #00cc6a);
    color: var(--secondary-color);
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.download-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);
}

.download-icon {
    font-size: 1.3rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-5px);
    }
    60% {
        transform: translateY(-3px);
    }
}

.download-note {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--text-muted);
    font-style: italic;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--text-secondary);
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.cta-button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: var(--text-primary);
    transform: translateY(-2px);
}

.hero-visual {
    position: relative;
    height: 400px;
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 1.2s ease 1.5s forwards;
}

.hero-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 100%;
}

.grid-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.3s ease;
    animation: pulse 3s ease-in-out infinite;
}

.grid-item:nth-child(1) { animation-delay: 0s; }
.grid-item:nth-child(2) { animation-delay: 0.5s; }
.grid-item:nth-child(3) { animation-delay: 1s; }
.grid-item:nth-child(4) { animation-delay: 1.5s; }

@keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.02); }
}

.scroll-line {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--text-primary), transparent);
    opacity: 0.3;
}

/* Section Dividers */
.section-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--border-color), transparent);
    margin: 0 0 4rem 0;
}

.section-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 4rem;
    letter-spacing: -1px;
    color: var(--text-primary);
}

/* Products Section */
.products {
    padding: 4rem 0;
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

/* Product Category Cards */
.product-category-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.product-category-card:hover {
    border-color: var(--text-primary);
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.card-content {
    position: relative;
    z-index: 2;
}

.card-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.card-subtitle {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-weight: 300;
}

.card-price {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--success-color);
    margin-bottom: 1rem;
}

.card-status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.5px;
}

.card-status.available {
    background: rgba(0, 255, 136, 0.15);
    color: var(--success-color);
}

.card-status.unavailable {
    background: rgba(255, 68, 68, 0.15);
    color: var(--error-color);
}

.card-status.updating {
    background: rgba(255, 170, 0, 0.15);
    color: var(--warning-color);
}

.card-status.sale {
    background: rgba(0, 255, 136, 0.15);
    color: var(--success-color);
}

.card-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 3;
}

.card-hover span {
    color: var(--text-primary);
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.product-category-card:hover .card-hover {
    opacity: 1;
}

/* Product Modals */
.product-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(10px);
}

.product-modal.active {
    display: flex;
}

.modal-content {
    background: var(--secondary-color);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    max-width: 800px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid var(--border-color);
}

.modal-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
    margin: 0;
}

.modal-close {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.modal-close:hover {
    color: var(--text-primary);
    transform: scale(1.1);
}

.modal-body {
    padding: 2rem;
}

.modal-info {
    margin-bottom: 2rem;
}

.info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-row:last-child {
    border-bottom: none;
}

.info-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 300;
}

.info-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: var(--text-primary);
    font-weight: 500;
}

.modal-description {
    margin-bottom: 2rem;
}

.modal-description p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.modal-features {
    margin-bottom: 1.5rem;
}

.modal-features .feature {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.modal-requirements {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
}

.modal-requirements p {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.modal-vouches {
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
    margin-bottom: 2rem;
}

.modal-vouches h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.vouch-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.vouch-list .vouch-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    transition: all 0.3s ease;
}

.vouch-list .vouch-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--text-secondary);
}

.vouch-list .vouch-content {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    line-height: 1.4;
    font-style: italic;
}

.vouch-list .vouch-author {
    font-size: 0.8rem;
    color: var(--text-muted);
    font-weight: 500;
}

.modal-images {
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
}

.modal-images h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.modal-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
}

.modal-image:hover {
    transform: scale(1.02);
    border-color: var(--text-secondary);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Vouches Section */
.vouches {
    padding: 6rem 0;
    background: linear-gradient(135deg, #f5f5f5 0%, #cccccc 50%, #000000 100%);
}

.vouches .section-title {
    color: var(--secondary-color);
}

.vouches-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.vouch-item {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.vouch-item:hover {
    background: rgba(0, 0, 0, 0.15);
    border-color: rgba(0, 0, 0, 0.3);
}

.vouch-content {
    font-size: 1rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
    font-style: italic;
    line-height: 1.5;
}

.vouch-author {
    font-size: 0.85rem;
    color: var(--accent-color);
    font-weight: 500;
}

.vouches-note {
    text-align: center;
    font-size: 0.9rem;
    color: var(--accent-color);
    font-style: italic;
}

/* Contact Section */
.contact {
    padding: 6rem 0;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
}

.contact-link:hover {
    border-color: var(--text-primary);
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.contact-method {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 300;
    letter-spacing: 0.5px;
}

.contact-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: var(--text-primary);
    font-weight: 400;
}

/* Footer */
.footer {
    background: var(--secondary-color);
    border-top: 1px solid var(--border-color);
    padding: 3rem 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-disclaimer p {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0.3rem;
}

.footer-credits {
    text-align: right;
}

.footer-credits p {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0.3rem;
}

.credit-name {
    color: var(--text-secondary);
    font-weight: 500;
}

/* Animations */
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes loadingProgress {
    to {
        width: 100%;
    }
}

/* Scroll Animations */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .nav-toggle {
        display: flex;
    }
    
    .nav-mute-btn {
        display: none; /* Hide mute button on mobile */
    }
    
    .hero-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .hero-content {
        text-align: center;
    }
    
    .hero-title {
        font-size: 3.5rem;
    }
    
    .hero-quote {
        margin: 1.5rem 0;
        padding: 1rem;
    }
    
    .quote-text {
        font-size: 1.1rem;
    }
    
    .hero-visual {
        height: 300px;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .bypass-subtitle {
        font-size: 1.5rem;
    }
    
    .step-item {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .step-number {
        align-self: center;
    }
    
    .download-button {
        padding: 1.2rem 2rem;
        font-size: 1rem;
    }
    
    .product-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }
    
    .product-category-card {
        padding: 1.5rem;
    }
    
    .card-title {
        font-size: 1.5rem;
    }
    
    .modal-content {
        width: 95%;
        max-height: 95vh;
    }
    
    .modal-header {
        padding: 1.5rem;
    }
    
    .modal-body {
        padding: 1.5rem;
    }
    
    .modal-title {
        font-size: 1.3rem;
    }
    
    .image-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.8rem;
    }
    
    .modal-image {
        height: 120px;
    }
    
    .vouches-container {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-credits {
        text-align: center;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .hero-description p {
        font-size: 1rem;
    }
    
    .hero-quote {
        margin: 1rem 0;
        padding: 0.8rem;
    }
    
    .quote-text {
        font-size: 1rem;
    }
    
    .hero-visual {
        height: 200px;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .bypass-subtitle {
        font-size: 1.3rem;
    }
    
    .step-item {
        padding: 1rem;
    }
    
    .step-content h5 {
        font-size: 1rem;
    }
    
    .step-content p {
        font-size: 0.85rem;
    }
    
    .download-button {
        padding: 1rem 1.5rem;
        font-size: 0.9rem;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .product-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .free-products {
        grid-template-columns: 1fr;
        gap: 0.8rem;
    }
    
    .free-product-option label {
        padding: 0.8rem;
    }
    
    .product-title {
        font-size: 0.85rem;
    }
    
    .product-desc {
        font-size: 0.75rem;
    }
    
    .product-category-card {
        padding: 1rem;
    }
    
    .card-title {
        font-size: 1.3rem;
    }
    
    .modal-content {
        width: 98%;
        max-height: 98vh;
    }
    
    .modal-header {
        padding: 1rem;
    }
    
    .modal-body {
        padding: 1rem;
    }
    
    .modal-title {
        font-size: 1.1rem;
    }
    
    .image-grid {
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }
    
    .modal-image {
        height: 100px;
    }
    
    .contact-link {
        flex-direction: column;
        align-items: flex-start;
    }
}

/* Payment Styles */
.modal-payment {
    margin-top: 2rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.modal-payment h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
}

.payment-powered {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    text-align: center;
}

.payment-buttons {
    margin-top: 1rem;
}

.paypal-button-container {
    max-width: 400px;
    margin: 0 auto;
}

/* Payment Success Modal */
.payment-success-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(10px);
}

.payment-success-modal.active {
    display: flex;
}

.payment-success-content {
    background: var(--card-bg);
    padding: 3rem;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    text-align: center;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.success-icon {
    font-size: 4rem;
    color: var(--success-color);
    margin-bottom: 1rem;
}

.success-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: 1px;
}

.success-message {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.order-id-section {
    background: rgba(255, 255, 255, 0.02);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    margin-bottom: 2rem;
}

.order-id-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.order-id-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    letter-spacing: 1px;
    word-break: break-all;
}

.hwid-warning {
    background: rgba(255, 193, 7, 0.1);
    border: 1px solid rgba(255, 193, 7, 0.3);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.hwid-warning-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    color: #ffc107;
    line-height: 1.5;
}

.success-close-btn {
    background: var(--button-bg);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    padding: 0.8rem 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.success-close-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--text-primary);
    transform: translateY(-2px);
}
