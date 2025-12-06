// Drive-Well Academy - State of the Art Animations & Interactions
// ================================================================

// Utility: Debounce function for performance
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

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize loading screen
    initLoader();
    
    // Initialize all animations and effects
    initCustomCursor();
    initParticles();
    initGSAPAnimations();
    initScrollEffects();
    initNavigation();
    initCountUp();
    initTestimonials();
    initFormAnimations();
    initMagneticButtons();
    init3DCardTilt();
    initScrollProgress();
    initBackToTop();
    initServiceCardHover();
    initWhatsAppButton();
    initAIAssistantButton();
    initFAQ();
    initNewsletter();
    initGallery();
    initEducationTabs();
    initStudentPortal();
    // initHeroSlideshow(); // Now auto-initializes via IIFE
    
});

// Loading Screen
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Enable body scroll
            document.body.style.overflow = '';
        }, 1000);
    });
    
    // Hide loader immediately if page already loaded
    if (document.readyState === 'complete') {
        loader.classList.add('hidden');
    }
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.transform = `scaleX(${scrolled / 100})`;
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced Service Card Hover Effect
function initServiceCardHover() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                
                // Smooth scroll to question if needed
                setTimeout(() => {
                    const rect = item.getBoundingClientRect();
                    if (rect.top < 100) {
                        window.scrollTo({
                            top: window.scrollY + rect.top - 120,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        });
    });
}

// Gallery
function initGallery() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    if (!filterButtons.length || !galleryItems.length) return;
    
    let currentItems = [];
    let currentIndex = 0;
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    gsap.from(item, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    // Lightbox functionality
    const viewButtons = document.querySelectorAll('.gallery-view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = button.closest('.gallery-item');
            const type = button.getAttribute('data-type');
            
            // Get all visible items for navigation
            currentItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
            currentIndex = currentItems.indexOf(item);
            
            if (type === 'video') {
                // For video, you would embed a YouTube/Vimeo iframe here
                lightboxVideo.innerHTML = '<p style="color: white; text-align: center; padding: 50px;">Video player would be embedded here</p>';
                lightboxImage.style.display = 'none';
                lightboxVideo.style.display = 'block';
            } else {
                // For images, you would set the actual image source here
                // lightboxImage.src = 'path/to/image.jpg';
                lightboxImage.style.display = 'block';
                lightboxVideo.style.display = 'none';
                lightboxImage.alt = item.querySelector('.gallery-placeholder span').textContent;
            }
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            lightboxVideo.innerHTML = '';
        });
    }
    
    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
                lightboxVideo.innerHTML = '';
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            lightboxVideo.innerHTML = '';
        } else if (e.key === 'ArrowLeft' && lightboxPrev) {
            lightboxPrev.click();
        } else if (e.key === 'ArrowRight' && lightboxNext) {
            lightboxNext.click();
        }
    });
    
    // Navigation buttons
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
            const item = currentItems[currentIndex];
            const button = item.querySelector('.gallery-view-btn');
            if (button) button.click();
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % currentItems.length;
            const item = currentItems[currentIndex];
            const button = item.querySelector('.gallery-view-btn');
            if (button) button.click();
        });
    }
}

// Initialize Student Portal
function initStudentPortal() {
    const loginForm = document.getElementById('loginForm');
    const portalLogin = document.getElementById('portalLogin');
    const portalDashboard = document.getElementById('portalDashboard');
    const logoutBtn = document.getElementById('logoutBtn');
    const passwordToggle = document.getElementById('passwordToggle');
    const studentPassword = document.getElementById('studentPassword');
    
    // Password toggle
    if (passwordToggle && studentPassword) {
        passwordToggle.addEventListener('click', () => {
            const type = studentPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            studentPassword.setAttribute('type', type);
            passwordToggle.querySelector('i').classList.toggle('fa-eye');
            passwordToggle.querySelector('i').classList.toggle('fa-eye-slash');
        });
    }
    
    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('studentEmail').value;
            const password = document.getElementById('studentPassword').value;
            
            // Demo login (replace with actual authentication)
            // For demo purposes, accept any email/password
            if (email && password) {
                // Show loading state
                const loginBtn = loginForm.querySelector('.login-btn');
                const originalText = loginBtn.innerHTML;
                loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
                loginBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    // Store login state (in real app, use secure session/token)
                    localStorage.setItem('studentLoggedIn', 'true');
                    localStorage.setItem('studentEmail', email);
                    
                    // Update dashboard with user info
                    const studentName = email.split('@')[0];
                    document.getElementById('studentName').textContent = studentName.charAt(0).toUpperCase() + studentName.slice(1);
                    document.getElementById('profileEmail').textContent = email;
                    
                    // Show dashboard, hide login
                    portalLogin.style.display = 'none';
                    portalDashboard.style.display = 'block';
                    
                    // Scroll to dashboard
                    portalDashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Reset button
                    loginBtn.innerHTML = originalText;
                    loginBtn.disabled = false;
                }, 1500);
            }
        });
    }
    
    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('studentLoggedIn');
            localStorage.removeItem('studentEmail');
            portalLogin.style.display = 'block';
            portalDashboard.style.display = 'none';
            document.getElementById('loginForm').reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Check if user is already logged in
    if (localStorage.getItem('studentLoggedIn') === 'true') {
        const email = localStorage.getItem('studentEmail') || 'student@example.com';
        const studentName = email.split('@')[0];
        document.getElementById('studentName').textContent = studentName.charAt(0).toUpperCase() + studentName.slice(1);
        document.getElementById('profileEmail').textContent = email;
        portalLogin.style.display = 'none';
        portalDashboard.style.display = 'block';
    }
    
    // Update progress circle
    const progressCircle = document.getElementById('progressCircle');
    if (progressCircle) {
        const progress = 25; // 25% progress
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (progress / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
}

// Initialize Educational Content Tabs
function initEducationTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Newsletter Form
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('newsletter-name').value.trim();
        const email = document.getElementById('newsletter-email').value.trim();
        const submitBtn = newsletterForm.querySelector('.newsletter-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        if (!name || !email) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Subscribing...</span>';
        submitBtn.disabled = true;
        
        // Simulate subscription (replace with actual email service like Mailchimp, SendGrid, etc.)
        setTimeout(() => {
            // Success message
            submitBtn.innerHTML = '<i class="fas fa-check"></i><span>Subscribed!</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            // Reset form after delay
            setTimeout(() => {
                newsletterForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                
                // Show thank you message
                alert('Thank you for subscribing! Check your email for confirmation.');
            }, 2000);
        }, 1000);
    });
}

// WhatsApp Button Animation
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (!whatsappBtn) return;
    
    // Add click animation
    whatsappBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
    
    // Show button after page load with delay
    setTimeout(() => {
        whatsappBtn.style.opacity = '0';
        whatsappBtn.style.transform = 'scale(0)';
        whatsappBtn.style.display = 'flex';
        
        setTimeout(() => {
            whatsappBtn.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.transform = 'scale(1)';
        }, 1000);
    }, 500);
}

// AI Assistant Button Animation
function initAIAssistantButton() {
    const aiBtn = document.querySelector('.ai-assistant-float');
    if (!aiBtn) return;
    
    // Add click animation
    aiBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
    
    // Show button after page load with delay
    setTimeout(() => {
        aiBtn.style.opacity = '0';
        aiBtn.style.transform = 'scale(0)';
        aiBtn.style.display = 'flex';
        
        setTimeout(() => {
            aiBtn.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            aiBtn.style.opacity = '1';
            aiBtn.style.transform = 'scale(1)';
        }, 1200);
    }, 500);
}

// Custom Cursor Effect
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor animation
    function animateCursor() {
        // Main cursor - immediate response
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower - delayed response
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX - 15 + 'px';
        follower.style.top = followerY - 15 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .service-card, .contact-method');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            follower.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });
}

// Particle Canvas Animation
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            // Move particles
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Mouse interaction
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                this.x -= dx * force * 0.03;
                this.y -= dy * force * 0.03;
            }
            
            // Wrap around edges
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(220, 38, 38, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const distance = Math.sqrt(
                    Math.pow(p1.x - p2.x, 2) + 
                    Math.pow(p1.y - p2.y, 2)
                );
                
                if (distance < 150) {
                    ctx.strokeStyle = `rgba(220, 38, 38, ${0.1 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    animate();
}

// GSAP Animations
function initGSAPAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-badge', {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        })
        .from('.hero-title .line-1', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        }, '-=0.4')
        .from('.hero-title .line-2', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        }, '-=0.7')
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.stat-item', {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, '-=0.3')
        .from('.hero-actions > *', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.scroll-indicator', {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.5');
    
    // Service cards scroll animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // About section animations
    gsap.from('.about-content > *', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.about-visual', {
        scrollTrigger: {
            trigger: '.about-visual',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Floating elements animation
    gsap.utils.toArray('.float-element').forEach((el) => {
        gsap.to(el, {
            y: 'random(-20, 20)',
            x: 'random(-20, 20)',
            rotation: 'random(-30, 30)',
            duration: 'random(3, 5)',
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    });
    
    // Text reveal animation for sections
    gsap.utils.toArray('.section-header').forEach((header) => {
        const tag = header.querySelector('.section-tag');
        const title = header.querySelector('.section-title');
        
        gsap.from([tag, title], {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect with smooth transition
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
    
    // Enhanced parallax effect for gradient orbs
    const orbs = document.querySelectorAll('.gradient-orb');
    
    const handleParallax = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.15);
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    };
    
    // Throttle parallax for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Smooth scroll for anchor links with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 100;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.getElementById('navToggle').classList.remove('active');
                }
            }
        });
    });
}

// Navigation Menu
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.querySelector('.navbar');
    
    if (!navToggle || !navMenu) return;
    
    // Scroll detection for navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (navbar) {
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll (optional - can be removed if not desired)
            if (currentScroll > lastScroll && currentScroll > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive);
        
        // Prevent body scroll when menu is open
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        // Animate toggle lines
        const spans = navToggle.querySelectorAll('span');
        if (isActive) {
            gsap.to(spans[0], { rotation: 45, y: 8, duration: 0.3 });
            gsap.to(spans[1], { opacity: 0, duration: 0.3 });
            gsap.to(spans[2], { rotation: -45, y: -8, duration: 0.3 });
        } else {
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            
            // Reset toggle animation
            const spans = navToggle.querySelectorAll('span');
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}` || 
                        link.getAttribute('href') === `index.html#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', debounce(updateActiveLink, 100));
}

// Count Up Animation
function initCountUp() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const countUp = (element) => {
        const target = parseInt(element.getAttribute('data-value'));
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                countUp(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Testimonials Carousel
function initTestimonials() {
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!cards.length || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    
    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });
    
    // Auto-rotate testimonials with smooth transitions
    let autoRotateInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }, 5000);
    
    // Pause auto-rotate on hover
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoRotateInterval));
        carousel.addEventListener('mouseleave', () => {
            autoRotateInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % cards.length;
                showCard(currentIndex);
            }, 5000);
        });
    }
}

// Form Animations
function initFormAnimations() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Floating labels
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Check if input has value on load
        if (input.value) {
            input.classList.add('has-value');
        }
        
        // Handle input events
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
        
        input.addEventListener('blur', () => {
            if (input.value) {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
        
        // Handle select change
        if (input.tagName === 'SELECT') {
            input.addEventListener('change', () => {
                if (input.value) {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            });
        }
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!name || !phone || !email || !service) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Add success animation
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>Sending...</span><div class="btn-glow"></div>';
        submitBtn.disabled = true;
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`New Inquiry: ${service} - Drive-Well Academy`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Email: ${email}\n` +
            `Service: ${service}\n\n` +
            `Message:\n${message || 'No additional message'}`
        );
        const mailtoLink = `mailto:info@drive-well-academy.com?subject=${subject}&body=${body}`;
        
        // Try to use Formspree or similar service (replace with your endpoint)
        // For now, use mailto as fallback
        const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with actual endpoint
        
        // Option 1: Use Formspree (uncomment and add your form ID)
        /*
        fetch(formEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                service: service,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            showSuccess(submitBtn, originalText, form, inputs);
        })
        .catch(error => {
            console.error('Error:', error);
            // Fallback to mailto
            window.location.href = mailtoLink;
            showSuccess(submitBtn, originalText, form, inputs);
        });
        */
        
        // Option 2: Direct mailto (current implementation)
        setTimeout(() => {
            // Open mailto link
            window.location.href = mailtoLink;
            showSuccess(submitBtn, originalText, form, inputs);
        }, 500);
    });
    
    // Helper function to show success message
    function showSuccess(submitBtn, originalText, form, inputs) {
            submitBtn.innerHTML = '<span>Message Sent! ✓</span><div class="btn-glow"></div>';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
        // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                
                // Remove has-value class from all inputs
                inputs.forEach(input => {
                    input.classList.remove('has-value');
                });
            }, 3000);
    }
}

// Magnetic Button Effect
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.magnetic-element');
    
    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Apply magnetic effect
            gsap.to(elem, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        elem.addEventListener('mouseleave', () => {
            // Reset position
            gsap.to(elem, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// 3D Card Tilt Effect
function init3DCardTilt() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            elem.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        elem.addEventListener('mouseleave', () => {
            elem.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Performance optimization
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

// Optimize scroll events
const optimizedScroll = debounce(() => {
    // Scroll-based animations
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Hero Slideshow - Fixed Version
(function() {
    'use strict';
    
    function initHeroSlideshow() {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slideshow-dots .dot');
        const prevBtn = document.querySelector('.slideshow-prev');
        const nextBtn = document.querySelector('.slideshow-next');
        
        if (!slides.length) {
            console.error('Slideshow: No slides found!');
            return;
        }
        
        console.log('Slideshow found', slides.length, 'slides');
        
        let currentSlide = 0;
        let slideInterval = null;
        
        function showSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.opacity = '0';
                slide.style.visibility = 'hidden';
                slide.style.zIndex = '1';
            });
            
            // Show target slide
            slides[index].classList.add('active');
            slides[index].style.opacity = '1';
            slides[index].style.visibility = 'visible';
            slides[index].style.zIndex = '10';
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentSlide = index;
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
        
        function startAutoPlay() {
            stopAutoPlay();
            slideInterval = setInterval(nextSlide, 4000);
        }
        
        function stopAutoPlay() {
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
            }
        }
        
        // Button click handlers
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                nextSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }
        
        // Dot click handlers
        dots.forEach((dot, i) => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                showSlide(i);
                stopAutoPlay();
                startAutoPlay();
            });
        });
        
        // Initialize
        showSlide(0);
        startAutoPlay();
        
        // Expose for testing/debugging
        window.slideshow = { 
            next: nextSlide, 
            prev: prevSlide, 
            goTo: showSlide,
            start: startAutoPlay,
            stop: stopAutoPlay
        };
    }
    
    // Auto-run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroSlideshow);
    } else {
        initHeroSlideshow();
    }
})();

// Initialize AOS for additional scroll animations (optional)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Cookie Consent Management
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieDecline = document.getElementById('cookieDecline');
    const cookieSettings = document.getElementById('cookieSettings');
    
    if (!cookieConsent) return;
    
    // Check if user has already made a choice
    const cookieConsentGiven = localStorage.getItem('cookieConsent');
    const cookieConsentDate = localStorage.getItem('cookieConsentDate');
    
    // Show banner if consent hasn't been given or if it's been more than 12 months
    const shouldShowBanner = !cookieConsentGiven || 
        (cookieConsentDate && (Date.now() - parseInt(cookieConsentDate)) > 365 * 24 * 60 * 60 * 1000);
    
    if (shouldShowBanner) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000); // Show after 1 second
    }
    
    // Accept all cookies
    if (cookieAccept) {
        cookieAccept.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            localStorage.setItem('cookieConsentDate', Date.now().toString());
            cookieConsent.classList.remove('show');
            
            // Enable analytics or other cookies here if needed
            console.log('Cookies accepted');
        });
    }
    
    // Decline cookies
    if (cookieDecline) {
        cookieDecline.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            localStorage.setItem('cookieConsentDate', Date.now().toString());
            cookieConsent.classList.remove('show');
            
            // Disable non-essential cookies here if needed
            console.log('Cookies declined');
        });
    }
    
    // Settings (redirect to cookie policy)
    if (cookieSettings) {
        cookieSettings.addEventListener('click', function() {
            window.location.href = 'policies.html#cookies';
        });
    }
}

// Initialize cookie consent when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
    initCookieConsent();
}