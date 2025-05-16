// Framer Motion animations for the portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Make sure Motion object exists to prevent errors
    const { motion, AnimatePresence } = (typeof Motion !== 'undefined') ? Motion : { motion: {}, AnimatePresence: {} };

    // Function to create animated elements with Framer Motion
    function createAnimatedElement(selector, animation) {
        const element = document.querySelector(selector);
        if (!element) return;

        // Create a motion div
        const motionDiv = document.createElement('div');
        motionDiv.style.width = '100%';
        motionDiv.style.height = '100%';

        // Clone the element's children
        while (element.firstChild) {
            motionDiv.appendChild(element.firstChild);
        }

        // Add the motion div to the element
        element.appendChild(motionDiv);

        // Apply animations
        motion(motionDiv, animation);
    }

    // Animations for different sections

    // Hero section animations
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';

        // Split text into characters and wrap each in a span
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `opacity 0.3s ease, transform 0.3s ease`;
            span.style.transitionDelay = `${index * 0.03}s`;

            heroTitle.appendChild(span);

            // Trigger animation after a short delay
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 300);
        });
    }

    // Function to animate on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section-title, .timeline-item, #about img, #leadership .bg-white');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            // Add base animation classes
            el.classList.add('transform');
            el.classList.add('transition-all');
            el.classList.add('duration-700');
            el.classList.add('translate-y-10');
            el.classList.add('opacity-0');

            observer.observe(el);
        });

        // Custom animation styles
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                .animate-in {
                    transform: translateY(0) !important;
                    opacity: 1 !important;
                }

                .section-title.animate-in::after {
                    animation: growWidth 0.6s ease forwards 0.3s;
                }

                @keyframes growWidth {
                    from { width: 0; }
                    to { width: 80px; }
                }
            </style>
        `);
    }

    // Call the animation function
    animateOnScroll();

    // Apply page transition animations
    function setupPageTransitions() {
        // Preloader animation
        const body = document.body;
        const preloader = document.createElement('div');

        preloader.className = 'fixed inset-0 bg-white z-50 flex items-center justify-center';
        preloader.innerHTML = `
            <div class="relative">
                <div class="w-16 h-16 border-4 border-blue-200 border-solid rounded-full"></div>
                <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent border-solid rounded-full absolute top-0 left-0 animate-spin"></div>
            </div>
        `;

        body.style.overflow = 'hidden';
        body.appendChild(preloader);

        // Hide preloader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.transition = 'opacity 0.5s ease';

                setTimeout(() => {
                    preloader.remove();
                    body.style.overflow = '';

                    // Animate sections sequentially
                    const sections = document.querySelectorAll('section');
                    sections.forEach((section, index) => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        section.style.transitionDelay = `${0.1 + index * 0.1}s`;

                        setTimeout(() => {
                            section.style.opacity = '1';
                            section.style.transform = 'translateY(0)';
                        }, 100);
                    });
                }, 500);
            }, 500);
        });
    }

    // Setup page transitions
    setupPageTransitions();

    // Smooth cursor follow effect
    function setupCursorEffect() {
        const cursor = document.createElement('div');
        cursor.className = 'fixed w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block';
        cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.3)';
        cursor.style.transform = 'translate(-50%, -50%)';
        cursor.style.transition = 'transform 0.1s ease, width 0.2s ease, height 0.2s ease';
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.className = 'fixed w-2 h-2 rounded-full bg-blue-600 pointer-events-none z-50 hidden md:block';
        cursorDot.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(cursorDot);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .tech-badge, .btn-primary, .btn-secondary');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '48px';
                cursor.style.height = '48px';
                cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.2)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.width = '32px';
                cursor.style.height = '32px';
                cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.3)';
            });
        });
    }

    // Setup cursor effect
    setupCursorEffect();

    // Parallax effect for hero section
    function setupParallaxEffect() {
        const hero = document.getElementById('hero');
        if (!hero) return;
        
        const heroContent = hero.querySelector('.container');
        if (!heroContent) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < hero.offsetHeight) {
                heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
                
                const h1 = heroContent.querySelector('h1');
                if (h1) h1.style.transform = `translateY(${scrollY * 0.1}px)`;
                
                const h2 = heroContent.querySelector('h2');
                if (h2) h2.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        });
    }

    // Setup parallax effect
    setupParallaxEffect();
});
