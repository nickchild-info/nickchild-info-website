// ===================================
// Navigation
// ===================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Sticky navigation on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Hero Canvas Animation
// ===================================
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle system for background
class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 127, 110, 0.5)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 127, 110, 0.6)';
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Create particles
const particles = [];
const particleCount = Math.min(Math.floor(canvas.width / 10), 80);
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Draw connections between nearby particles
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                const opacity = (150 - distance) / 150 * 0.5;
                ctx.strokeStyle = `rgba(255, 155, 142, ${opacity})`;
                ctx.shadowBlur = 5;
                ctx.shadowColor = `rgba(255, 127, 110, ${opacity})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
        }
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    drawConnections();

    requestAnimationFrame(animate);
}
animate();

// ===================================
// Metric Counter Animation
// ===================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===================================
// Scroll Reveal Animations
// ===================================
const revealElements = document.querySelectorAll('.service-card, .case-study-card, .tech-category, .social-proof-item');

// Add reveal class to elements
revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===================================
// Metric Counter Trigger
// ===================================
const metrics = document.querySelectorAll('.metric-value');
const animatedMetrics = new Set();

const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Find all metrics in this case study card
            const cardMetrics = entry.target.querySelectorAll('.metric-value');
            cardMetrics.forEach(metric => {
                // Only animate if not already animated
                if (!animatedMetrics.has(metric)) {
                    animateCounter(metric);
                    animatedMetrics.add(metric);
                }
            });
        }
    });
}, {
    threshold: 0.5
});

// Observe all case study cards
const caseStudyCards = document.querySelectorAll('.case-study-card');
caseStudyCards.forEach(card => {
    metricsObserver.observe(card);
});

// ===================================
// Contact Form
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Show success message (in production, this would submit to a backend)
        formMessage.textContent = 'Thank you! Your message has been sent. I\'ll get back to you soon.';
        formMessage.className = 'form-message success';

        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);

        // Log form data (for development)
        console.log('Form submitted:', formData);
        console.log('Note: Connect this form to Formspree or similar service for production.');
    });
}

// ===================================
// Performance: Reduce animations on mobile
// ===================================
if (window.innerWidth < 768) {
    // Reduce particle count on mobile
    const removeCount = Math.floor(particles.length / 2);
    particles.splice(0, removeCount);
}

// ===================================
// Easter egg: Console message
// ===================================
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #00D9FF;');
console.log('%cLike what you see? Let\'s work together!', 'font-size: 14px; color: #4DFFFF;');
console.log('%cEmail: nick@nickchild.info', 'font-size: 12px; color: #9BA5B4;');
