// Enhanced 3D Floating Tech Stack Component

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

    // Using the framer-motion library for animations
    const { motion } = Motion;

    return React.createElement(
        'div',
        {
            className: 'tech-space relative min-h-screen bg-gray-900 overflow-hidden py-16',
            id: 'tech-stack-section'
        },
        // Header
        React.createElement(
            'div',
            { className: 'container mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10' },
            React.createElement(
                'h2',
                { className: 'text-4xl font-bold text-center text-white mb-4' },
                'Tech Stack'
            ),
            React.createElement(
                'p',
                { className: 'text-xl text-center text-gray-300 max-w-3xl mx-auto' },
                'Passionate about cutting-edge development technologies'
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

        // Featured Tech Section (3D Cubes)
        React.createElement(
            'div',
            {
                className: 'container mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10',
            },
            React.createElement(
                motion.div,
                {
                    className: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6',
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, staggerChildren: 0.1 }
                },
                techStack.slice(0, 10).map((tech, index) => (
                    React.createElement(
                        motion.div,
                        {
                            key: index,
                            className: 'featured-tech-item',
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
                                className: 'featured-tech-card bg-gray-800 text-white p-4 rounded-lg shadow-xl h-full flex flex-col items-center justify-center text-center hover:bg-gray-700 transition-colors duration-300 relative overflow-hidden tech-card-3d',
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
                                    className: 'tech-logo-container mb-3 relative z-10',
                                    style: {
                                        width: '60px',
                                        height: '60px'
                                    }
                                },
                                React.createElement('img', {
                                    src: tech.logo,
                                    alt: tech.name,
                                    className: 'w-full h-full object-contain'
                                })
                            ),
                            React.createElement(
                                'h3',
                                { className: 'text-lg font-semibold relative z-10' },
                                tech.name
                            )
                        )
                    )
                ))
            )
        ),

        // "Know more" button
        React.createElement(
            'div',
            { className: 'flex justify-center mt-12 relative z-10' },
            React.createElement(
                motion.a,
                {
                    href: '#skills',
                    className: 'know-more-btn group flex items-center text-white bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300',
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.98 }
                },
                'Know more',
                React.createElement(
                    motion.span,
                    {
                        className: 'ml-2 transform group-hover:translate-x-1 transition-transform duration-300',
                    },
                    '→'
                )
            )
        )
    );
}

// Enhanced 3D Project Component
function EnhancedProjectsComponent() {
    const projects = [
        {
            title: 'Athlete Management System',
            description: 'Led a 5-person team to build and deploy a comprehensive Athlete Management System for Colby Athletics using Heroku. Created a one-stop portal for real-time athlete readiness tracking using Flask and fetched data from wearables using REST API.',
            image: 'assets/images/projects/athletemanagement.jpg',
            tags: ['Flask', 'REST API', 'Machine Learning', 'Heroku'],
            color: '#6366f1', // indigo
            projectUrl: 'https://github.com/enjoythecode/scrum-wizards-cs321',
            githubUrl: 'https://github.com/enjoythecode/scrum-wizards-cs321'
        },
        {
            title: 'Chaos Dungeon Game',
            description: 'Built a fully functional single-player interactive adventure pc game using Pygame. Pioneered essential character class foundations and crafted an intuitive UI for a seamless gaming experience.',
            image: 'assets/images/projects/chaosdungeon.jpg',
            tags: ['Python', 'Pygame', 'Game Development', 'UI Design'],
            color: '#8b5cf6', // violet
            projectUrl: 'https://github.com/tylionshield/ChaosDungeon',
            githubUrl: 'https://github.com/tylionshield/ChaosDungeon'
        },
        {
            title: 'Figrex',
            description: 'A figure recognition and analysis tool designed to interpret and process visual data efficiently.',
            image: 'assets/images/projects/figrex.jpg',
            tags: ['Computer Vision', 'AI/ML', 'Data Processing', 'Python'],
            color: '#3b82f6', // blue
            projectUrl: 'https://figrex.com',
            githubUrl: 'https://github.com/Syd4r/figrex'
        },
        {
            title: 'PantryAI',
            description: 'An AI-powered recipe generator that creates personalized recipes based on available ingredients.',
            image: 'assets/images/projects/pantryai.jpg',
            tags: ['AI/ML', 'Web Development', 'React', 'Python'],
            color: '#ec4899', // pink
            projectUrl: 'https://pantryai-52d0ec20532a.herokuapp.com',
            githubUrl: 'https://github.com/emmanuelassumang/RecipeGen'
        }
    ];

    // Using the framer-motion library for animations
    const { motion } = Motion;

    return React.createElement(
        'div',
        {
            className: 'projects-section bg-gray-900 text-white py-20',
            style: {
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
            }
        },
        React.createElement(
            'div',
            { className: 'container mx-auto px-4 sm:px-6 lg:px-8' },
            React.createElement(
                'h2',
                { className: 'text-4xl font-bold text-center text-white mb-4' },
                'Projects'
            ),
            React.createElement(
                'p',
                { className: 'text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16' },
                'Explore my recent work and accomplishments'
            ),
            React.createElement(
                'div',
                { className: 'projects-container space-y-24' },
                projects.map((project, index) => (
                    React.createElement(
                        motion.div,
                        {
                            key: index,
                            className: 'project-card-3d',
                            initial: { opacity: 0, y: 100 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true, margin: '-100px' },
                            transition: { duration: 0.8, type: 'spring', stiffness: 50 }
                        },
                        React.createElement(
                            motion.div,
                            {
                                className: 'project-card-inner relative rounded-2xl overflow-hidden transform-gpu',
                                style: {
                                    background: 'rgba(15, 23, 42, 0.7)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                },
                                whileHover: {
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }
                            },
                            // Background gradient accent
                            React.createElement(
                                'div',
                                {
                                    className: 'absolute inset-0 z-0 opacity-30',
                                    style: {
                                        background: `linear-gradient(135deg, ${project.color}66 0%, transparent 100%)`
                                    }
                                }
                            ),
                            // "View Details" floating button
                            React.createElement(
                                motion.div,
                                {
                                    className: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 view-details-btn opacity-0 transition-opacity duration-300',
                                    whileHover: { scale: 1.1 }
                                },
                                React.createElement(
                                    'div',
                                    {
                                        className: 'rounded-full w-24 h-24 flex items-center justify-center bg-white/90 backdrop-blur-sm text-gray-900 cursor-pointer shadow-lg',
                                        style: {
                                            boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                                        }
                                    },
                                    React.createElement(
                                        'div',
                                        { className: 'text-center' },
                                        React.createElement(
                                            'i',
                                            { className: 'fas fa-eye text-xl mb-1' }
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'text-xs font-medium leading-tight' },
                                            'VIEW',
                                            React.createElement('br', {}),
                                            'DETAILS'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                {
                                    className: 'flex flex-col md:flex-row relative z-10',
                                },
                                React.createElement(
                                    'div',
                                    { className: 'md:w-3/5 relative overflow-hidden' },
                                    React.createElement(
                                        motion.div,
                                        {
                                            className: 'project-image-container h-80 md:h-auto w-full',
                                            whileHover: { scale: 1.05 },
                                            transition: { duration: 0.5 }
                                        },
                                        React.createElement(
                                            'img',
                                            {
                                                src: project.image,
                                                alt: project.title,
                                                className: 'w-full h-full object-cover'
                                            }
                                        ),
                                        // Overlay on hover
                                        React.createElement(
                                            'div',
                                            {
                                                className: 'absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'
                                            }
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'md:w-2/5 p-8 md:p-10 flex flex-col justify-center' },
                                    React.createElement(
                                        'h3',
                                        {
                                            className: 'text-2xl md:text-3xl font-bold mb-4',
                                            style: { color: project.color }
                                        },
                                        project.title
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'text-gray-300 mb-6' },
                                        project.description
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'flex flex-wrap gap-2 mb-6' },
                                        project.tags.map((tag, tagIndex) => (
                                            React.createElement(
                                                'span',
                                                {
                                                    key: tagIndex,
                                                    className: 'px-3 py-1 rounded-full text-sm font-medium',
                                                    style: {
                                                        backgroundColor: `${project.color}33`,
                                                        color: project.color,
                                                        border: `1px solid ${project.color}66`
                                                    }
                                                },
                                                tag
                                            )
                                        ))
                                    ),
                                    React.createElement(
                                        motion.a,
                                        {
                                            href: project.projectUrl,
                                            target: '_blank',
                                            className: 'mt-auto inline-flex items-center text-sm font-medium',
                                            style: { color: project.color },
                                            whileHover: { x: 5 }
                                        },
                                        'Explore Project',
                                        React.createElement(
                                            'i',
                                            { className: 'fas fa-arrow-right ml-2' }
                                        )
                                    )
                                )
                            )
                        )
                    )
                ))
            )
        )
    );
}

// Add this component to the page
document.addEventListener('DOMContentLoaded', function() {
    // Add required CSS for 3D transformations
    const style = document.createElement('style');
    style.textContent = `
        /* 3D Tech Space styles */
        .tech-space {
            perspective: 1000px;
            transform-style: preserve-3d;
        }

        .tech-icon-3d {
            transform-style: preserve-3d;
            transition: transform 0.3s ease;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
        }

        .tech-icon-inner {
            transform-style: preserve-3d;
            backface-visibility: hidden;
        }

        /* Project card 3D effects */
        .project-card-3d {
            perspective: 2000px;
            transform-style: preserve-3d;
        }

        .project-card-inner {
            transform-style: preserve-3d;
            transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .project-card-inner:hover {
            transform: translateZ(30px) rotateX(3deg);
        }

        .project-card-inner:hover .view-details-btn {
            opacity: 1;
        }

        /* Tech card 3D effects */
        .tech-card-3d {
            transform-style: preserve-3d;
            transition: transform 0.3s ease;
        }

        .tech-card-3d:hover {
            transform: translateZ(10px) scale(1.05);
        }

        .know-more-btn {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Fancy gradient text */
        .gradient-text {
            background: linear-gradient(90deg, #4f46e5, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    `;
    document.head.appendChild(style);

    // Replace existing sections with enhanced versions

    // Tech Stack Component
    const techStackContainer = document.createElement('section');
    techStackContainer.id = 'tech-stack';
    techStackContainer.className = 'py-0'; // No padding as the component handles it

    // Find skills section to replace
    const skillsSection = document.getElementById('skills');
    if (skillsSection && skillsSection.parentNode) {
        skillsSection.parentNode.replaceChild(techStackContainer, skillsSection);
        ReactDOM.render(React.createElement(EnhancedTechStackComponent), techStackContainer);
    }

    // Projects Component
    const projectsContainer = document.createElement('section');
    projectsContainer.id = 'projects';
    projectsContainer.className = 'py-0'; // No padding as the component handles it

    // Find projects section to replace
    const projectsSection = document.getElementById('projects');
    if (projectsSection && projectsSection.parentNode) {
        projectsSection.parentNode.replaceChild(projectsContainer, projectsSection);
        ReactDOM.render(React.createElement(EnhancedProjectsComponent), projectsContainer);
    }

    // Adjust the body and overall theme
    document.body.classList.remove('bg-gray-50');
    document.body.classList.add('bg-gray-900');

    // Update navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-gray-900');
        navbar.classList.add('text-white');

        // Update nav links
        const navLinks = navbar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('text-gray-600');
            link.classList.add('text-gray-300');
            link.classList.add('hover:text-white');
        });
    }
});
