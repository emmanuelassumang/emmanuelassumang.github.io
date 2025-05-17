// Enhanced 3D Tech Stack Component with Floating Icons

function EnhancedTechStackComponent() {
    // Tech stack with icons and proper logos
    const techStack = [
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Java', icon: 'fab fa-java', color: '#007396', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'TypeScript', icon: 'fas fa-code', color: '#3178C6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Flask', icon: 'fas fa-flask', color: '#000000', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Golang', icon: 'fas fa-code', color: '#00ADD8', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
        { name: 'C', icon: 'fas fa-code', color: '#A8B9CC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'TensorFlow', icon: 'fas fa-brain', color: '#FF6F00', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'AWS', icon: 'fab fa-aws', color: '#232F3E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Redux', icon: 'fas fa-code', color: '#764ABC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Tailwind', icon: 'fas fa-wind', color: '#38B2AC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
    ];

    // Get skill level (1-5)
    function getSkillLevel(techName) {
        const levels = {
            'Python': 5,
            'React': 4,
            'JavaScript': 5,
            'TypeScript': 4,
            'Node.js': 4,
            'HTML5': 5,
            'CSS3': 4,
            'Java': 4,
            'Git': 5,
            'MongoDB': 4,
            'MySQL': 4,
            'Flask': 4,
            'Docker': 3,
            'Linux': 4,
            'Golang': 3,
            'C': 3,
            'TensorFlow': 4,
            'AWS': 4,
            'Redux': 4,
            'Tailwind': 4
        };

        return levels[techName] || 3;
    }

    // Using the framer-motion library for animations
    const { motion } = Motion;

    return React.createElement(
        'div',
        {
            className: 'tech-space relative min-h-screen overflow-hidden py-24',
            id: 'tech-stack-section',
            style: { background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }
        },
        // 3D Grid Background
        React.createElement(
            'div',
            { className: 'tech-grid absolute inset-0 opacity-30' }
        ),
        // Header with 3D effect
        React.createElement(
            'div',
            { className: 'container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10' },
            React.createElement(
                'div',
                { className: 'tech-title-3d text-center' },
                React.createElement(
                    'h2',
                    { className: 'tech-title-inner text-4xl font-bold text-white mb-2' },
                    'Technical Skills'
                ),
                React.createElement('div', { className: 'tech-title-shadow' }),
                React.createElement(
                    'p',
                    { className: 'text-xl text-center text-gray-300 max-w-3xl mx-auto mt-4' },
                    'Passionate about cutting-edge development technologies'
                ),
            ),
        ),

        // Background with floating tech icons
        React.createElement(
            'div',
            { className: 'absolute inset-0 overflow-hidden' },
            techStack.map((tech, index) => {
                // Random positions and sizes
                const size = 40 + Math.random() * 40; // Size between 40px and 80px
                const delay = Math.random() * 15; // Random delay for animation
                const duration = 15 + Math.random() * 30; // Animation duration between 15-45s
                const initialX = Math.random() * 100; // Initial X position (percent)
                const initialY = Math.random() * 100; // Initial Y position (percent)
                const depth = Math.random() * 200 - 100; // Z-depth between -100 and 100

                // Calculate opacity based on z-depth (-100 to 100 → 0.3 to 1)
                const opacity = 0.3 + ((depth + 100) / 200) * 0.7;

                // Calculate scale based on z-depth (-100 to 100 → 0.5 to 1.5)
                const scale = 0.5 + ((depth + 100) / 200);

                return React.createElement(
                    motion.div,
                    {
                        key: index,
                        className: 'absolute tech-icon-3d',
                        style: {
                            left: `${initialX}%`,
                            top: `${initialY}%`,
                            zIndex: Math.round(depth) + 100, // Ensure proper stacking
                            opacity: opacity,
                            width: `${size}px`,
                            height: `${size}px`,
                        },
                        initial: {
                            scale: scale,
                            filter: `blur(${Math.max(0, -depth/30)}px)`,
                            rotateX: Math.random() * 360,
                            rotateY: Math.random() * 360,
                            rotateZ: Math.random() * 360
                        },
                        animate: {
                            x: [
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50
                            ],
                            y: [
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50
                            ],
                            rotateX: [
                                Math.random() * 360,
                                Math.random() * 360,
                                Math.random() * 360,
                                Math.random() * 360
                            ],
                            rotateY: [
                                Math.random() * 360,
                                Math.random() * 360,
                                Math.random() * 360,
                                Math.random() * 360
                            ],
                            rotateZ: [
                                Math.random() * 360,
                                Math.random() * 360,
                                Math.random() * 360,
                                Math.random() * 360
                            ]
                        },
                        transition: {
                            duration: duration,
                            delay: delay,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear',
                        },
                        whileHover: {
                            scale: scale * 1.3,
                            zIndex: 1000,
                            transition: { duration: 0.3 }
                        }
                    },
                    // The tech logo
                    React.createElement(
                        'div',
                        {
                            className: 'tech-icon-inner w-full h-full flex items-center justify-center',
                            style: {
                                backgroundColor: 'transparent',
                                perspective: '1000px'
                            }
                        },
                        React.createElement('img', {
                            src: tech.logo,
                            alt: tech.name,
                            className: 'w-full h-full object-contain'
                        })
                    )
                );
            })
        ),

        // Featured Tech Cards
        React.createElement(
            'div',
            {
                className: 'container mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10',
            },
            React.createElement(
                motion.div,
                {
                    className: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8',
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, staggerChildren: 0.1 }
                },
                techStack.slice(0, 10).map((tech, index) => (
                    React.createElement(
                        motion.div,
                        {
                            key: index,
                            className: 'tech-item-float',
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                                delay: index * 0.1,
                                duration: 0.5
                            },
                            whileHover: {
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }
                        },
                        React.createElement(
                            'div',
                            {
                                className: 'tech-card-3d h-full',
                                style: {
                                    borderTop: `2px solid ${tech.color}`,
                                    borderBottom: `2px solid ${tech.color}`,
                                }
                            },
                            // Background glow effect
                            React.createElement(
                                'div',
                                {
                                    className: 'absolute inset-0 opacity-20',
                                    style: {
                                        background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 70%)`,
                                    }
                                }
                            ),
                            React.createElement(
                                'div',
                                {
                                    className: 'tech-card-content flex flex-col items-center justify-center text-center p-5',
                                },
                                React.createElement(
                                    'div',
                                    {
                                        className: 'tech-logo-3d mb-3 relative z-10',
                                    },
                                    React.createElement('img', {
                                        src: tech.logo,
                                        alt: tech.name,
                                        className: 'w-full h-full object-contain'
                                    }),
                                    React.createElement('div', { className: 'tech-logo-shadow' })
                                ),
                                React.createElement(
                                    'h3',
                                    { className: 'tech-name text-white' },
                                    tech.name
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'skill-level mt-2' },
                                    [...Array(5)].map((_, i) => (
                                        React.createElement(
                                            'span',
                                            {
                                                key: i,
                                                className: `skill-star fas fa-star ${i < getSkillLevel(tech.name) ? 'text-yellow-400' : 'text-gray-600'} mx-0.5`
                                            }
                                        )
                                    ))
                                )
                            )
                        )
                    )
                ))
            )
        ),

        // Tech Categories section with 3D cards
        React.createElement(
            'div',
            {
                className: 'container mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10',
            },
            React.createElement(
                'h3',
                { className: 'text-2xl font-bold text-center text-white mb-10' },
                'Technology Categories'
            ),
            React.createElement(
                'div',
                { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
                [
                    {
                        title: 'Frontend Development',
                        items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
                        icon: 'fas fa-desktop',
                        color: '#3B82F6'
                    },
                    {
                        title: 'Backend Development',
                        items: ['Python', 'Node.js', 'Java', 'MongoDB', 'MySQL', 'Flask'],
                        icon: 'fas fa-server',
                        color: '#8B5CF6'
                    },
                    {
                        title: 'DevOps & Tools',
                        items: ['Git', 'Docker', 'Linux', 'AWS', 'CI/CD', 'Bash'],
                        icon: 'fas fa-tools',
                        color: '#EC4899'
                    }
                ].map((category, catIndex) => (
                    React.createElement(
                        motion.div,
                        {
                            key: catIndex,
                            className: 'glass-card p-6 relative overflow-hidden',
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: catIndex * 0.2, duration: 0.5 },
                            whileHover: {
                                y: -5,
                                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 30px rgba(139, 92, 246, 0.3)',
                                transition: { duration: 0.3 }
                            }
                        },
                        React.createElement(
                            'div',
                            {
                                className: 'absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 rounded-full',
                                style: {
                                    background: `radial-gradient(circle at center, ${category.color}60 0%, transparent 70%)`,
                                    filter: 'blur(20px)'
                                }
                            }
                        ),
                        React.createElement(
                            'div',
                            { className: 'flex items-center mb-4' },
                            React.createElement(
                                'div',
                                {
                                    className: 'w-12 h-12 rounded-full flex items-center justify-center mr-4',
                                    style: {
                                        background: `linear-gradient(135deg, ${category.color}, ${category.color}90)`
                                    }
                                },
                                React.createElement('i', { className: `${category.icon} text-white text-xl` })
                            ),
                            React.createElement(
                                'h4',
                                { className: 'text-xl font-bold text-white' },
                                category.title
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'flex flex-wrap gap-2 mt-4' },
                            category.items.map((item, itemIndex) => (
                                React.createElement(
                                    motion.span,
                                    {
                                        key: itemIndex,
                                        className: 'px-3 py-1 rounded-full text-sm font-medium',
                                        initial: { opacity: 0, scale: 0.8 },
                                        animate: { opacity: 1, scale: 1 },
                                        transition: { delay: catIndex * 0.2 + itemIndex * 0.1, duration: 0.3 },
                                        style: {
                                            backgroundColor: `${category.color}20`,
                                            border: `1px solid ${category.color}40`,
                                            color: 'white'
                                        },
                                        whileHover: {
                                            backgroundColor: `${category.color}40`,
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }
                                    },
                                    item
                                )
                            ))
                        )
                    )
                ))
            )
        )
    );
}

// Helper function to determine if color is light or dark
function isLightColor(color) {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate brightness using a common formula
    return (r * 299 + g * 587 + b * 114) / 1000 > 155;
}

// Add this component to the page
document.addEventListener('DOMContentLoaded', function() {
    // Add required CSS style if 3dstyles.css is not already loaded
    const enhancedStyle = document.createElement('style');
    enhancedStyle.textContent = `
        /* Tech Grid */
        .tech-grid {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 200%;
            background: 
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
            transform: rotateX(60deg) translateZ(-100px) translateX(-25%) translateY(0);
            animation: grid-animation 15s linear infinite;
        }

        @keyframes grid-animation {
            0% {
                transform: rotateX(60deg) translateZ(-100px) translateX(-25%) translateY(0);
            }
            100% {
                transform: rotateX(60deg) translateZ(-100px) translateX(-75%) translateY(0);
            }
        }

        /* Floating animation */
        .tech-item-float {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0px);
            }
        }

        /* Staggered animation timings */
        .tech-item-float:nth-child(odd) {
            animation-duration: 5s;
        }

        .tech-item-float:nth-child(even) {
            animation-duration: 7s;
            animation-delay: 0.5s;
        }

        .tech-item-float:nth-child(3n) {
            animation-duration: 6s;
            animation-delay: 1s;
        }
    `;
    document.head.appendChild(enhancedStyle);

    // Tech Stack Section
    const techStackContainer = document.getElementById('tech-stack-component');
    if (techStackContainer) {
        ReactDOM.render(React.createElement(EnhancedTechStackComponent), techStackContainer);
    }
});