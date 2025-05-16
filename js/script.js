// Vanilla JavaScript for basic functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-2xl');
            navbar.classList.add('bg-gray-900/80');
            navbar.classList.add('backdrop-blur-md');
            navbar.classList.add('border-b');
            navbar.classList.add('border-white/5');
        } else {
            navbar.classList.remove('shadow-2xl');
            navbar.classList.remove('bg-gray-900/80');
            navbar.classList.remove('backdrop-blur-md');
            navbar.classList.remove('border-b');
            navbar.classList.remove('border-white/5');
        }
    });

    // Scroll to section with smooth behavior
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Create animated background elements
    createAnimatedBackground();

    // Form submission handling
    const contactForm = document.querySelector('#contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Simple validation
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all fields');
                return;
            }

            // Here you would typically send data to a server
            // For demo purposes, we'll just show a success message
            alert('Message sent successfully! (Demo only)');

            // Reset form
            contactForm.reset();
        });
    }
});

// Function to create animated background elements
function createAnimatedBackground() {
    const animatedBg = document.getElementById('animated-bg');

    if (!animatedBg) return;
    
    // Clear any existing elements
    animatedBg.innerHTML = '';

    const shapes = [
        { type: 'circle', size: '100px' },
        { type: 'square', size: '80px' },
        { type: 'triangle', size: '120px' },
        { type: 'rectangle', size: '150px 70px' },
        { type: 'circle', size: '140px' },
        { type: 'square', size: '120px' }
    ];

    shapes.forEach((shape, index) => {
        const element = document.createElement('div');
        element.classList.add('floating-shape');

        // Set position
        element.style.top = `${Math.random() * 100}%`;
        element.style.left = `${Math.random() * 100}%`;

        // Set size
        element.style.width = shape.size.split(' ')[0];
        if (shape.size.split(' ').length > 1) {
            element.style.height = shape.size.split(' ')[1];
        } else {
            element.style.height = shape.size;
        }

        // Set shape
        if (shape.type === 'circle') {
            element.style.borderRadius = '50%';
            element.style.backgroundColor = '#3b82f6';
        } else if (shape.type === 'square') {
            element.style.backgroundColor = '#2563eb';
        } else if (shape.type === 'triangle') {
            element.style.width = '0';
            element.style.height = '0';
            element.style.borderLeft = `${parseInt(shape.size) / 2}px solid transparent`;
            element.style.borderRight = `${parseInt(shape.size) / 2}px solid transparent`;
            element.style.borderBottom = `${parseInt(shape.size)}px solid #818cf8`;
            element.style.backgroundColor = 'transparent';
        } else if (shape.type === 'rectangle') {
            element.style.backgroundColor = '#60a5fa';
        }

        // Set animation delay
        element.style.animationDelay = `${index * 0.7}s`;

        animatedBg.appendChild(element);
    });
}
