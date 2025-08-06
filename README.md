# emuvgc.wtf

A modern, sharp website with smooth animations built for Cloudflare deployment.

## Features

- **Sharp Design**: Clean, modern aesthetic with precise typography and layouts
- **Smooth Animations**: Fluid hover effects, entrance animations, and micro-interactions
- **Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript
- **Cloudflare Ready**: Configured for seamless Cloudflare Pages deployment

## Technologies Used

- HTML5 with semantic markup
- CSS3 with custom properties and modern features
- Vanilla JavaScript for interactions
- Google Fonts (Inter)
- CSS Grid and Flexbox for layouts

## Animation Features

- Hero text slide-in animations
- Floating geometric shapes with parallax
- Smooth scroll navigation
- Hover effects on cards and buttons
- Ripple button effects
- Cursor trail (desktop only)
- Scroll progress indicator
- Form validation with notifications

## Cloudflare Deployment

### Quick Deploy

1. Upload the files to Cloudflare Pages
2. Set the build output directory to `/`
3. No build command needed - this is a static site

### Custom Domain Setup

1. Add your domain `emuvgc.wtf` to Cloudflare
2. Update the `wrangler.toml` file with your account and zone IDs
3. Configure DNS records to point to Cloudflare Pages

### Performance Optimizations

- Efficient CSS with minimal repaints
- Compressed assets ready for CDN
- Proper caching headers configured
- Security headers included
- Mobile-optimized interactions

## File Structure

```
emuvgc.wtf/
├── index.html          # Main HTML structure
├── style.css           # All styles and animations
├── script.js           # Interactive functionality
├── _headers            # Cloudflare headers config
├── wrangler.toml       # Cloudflare deployment config
└── README.md           # This file
```

## Customization

### Colors
Update the CSS custom properties in `:root` to change the color scheme:
- `--primary-color`: Main brand color
- `--secondary-color`: Accent color
- `--accent-color`: Highlight color

### Content
Edit the HTML content in `index.html` to customize:
- Navigation links
- Hero section text
- About cards
- Services
- Contact information

### Animations
Modify animation parameters in `style.css`:
- Duration and easing functions
- Keyframe definitions
- Hover effects

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance

- Optimized for 90+ Lighthouse scores
- Minimal JavaScript bundle
- Efficient CSS with no unused styles
- Fast Time to Interactive (TTI)

---

Built with precision and attention to detail. Ready for deployment to Cloudflare.