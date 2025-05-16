// React Components

// Skills Component
function SkillsComponent() {
    // Programming languages
    const languages = [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'R', level: 70 },
        { name: 'C', level: 65 },
        { name: 'Golang', level: 60 },
        { name: 'MATLAB', level: 55 }
    ];

    // Technologies
    const technologies = [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'HTML/CSS/Bootstrap', level: 90 },
        { name: 'REST', level: 75 },
        { name: 'Flask', level: 70 },
        { name: 'SQL', level: 80 },
        { name: 'Pandas', level: 85 },
        { name: 'Anaconda', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'JUnit', level: 70 }
    ];

    // Interests
    const interests = [
        'Full-Stack Development',
        'Backend & Infrastructure',
        'Machine Learning',
        'Mobile Development'
    ];

    // Using the framer-motion library for animations
    // Make sure Motion object exists to prevent errors
    const { motion } = (typeof Motion !== 'undefined') ? Motion : { motion: {} };

    // Container variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Item variants for animations
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return React.createElement(
        motion.div,
        {
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
            variants: containerVariants
        },
        // Programming Languages Section
        React.createElement(
            motion.div,
            {
                className: 'bg-white rounded-xl shadow-md p-6 md:p-8',
                variants: itemVariants
            },
            React.createElement(
                'h3',
                { className: 'text-xl font-semibold text-gray-800 mb-6' },
                'Programming Languages'
            ),
            React.createElement(
                'div',
                { className: 'space-y-4' },
                languages.map((lang, index) => (
                    React.createElement(
                        'div',
                        { key: index, className: 'mb-2' },
                        React.createElement(
                            'div',
                            { className: 'flex justify-between mb-1' },
                            React.createElement('span', { className: 'text-gray-700 font-medium' }, lang.name),
                            React.createElement('span', { className: 'text-gray-500 text-sm' }, `${lang.level}%`)
                        ),
                        React.createElement(
                            'div',
                            { className: 'w-full bg-blue-100 rounded-full h-2.5' },
                            React.createElement(
                                motion.div,
                                {
                                    className: 'bg-blue-600 h-2.5 rounded-full',
                                    style: { width: '0%' },
                                    animate: { width: `${lang.level}%` },
                                    transition: { duration: 1, delay: index * 0.1 }
                                }
                            )
                        )
                    )
                ))
            )
        ),

        // Technologies Section
        React.createElement(
            motion.div,
            {
                className: 'bg-white rounded-xl shadow-md p-6 md:p-8',
                variants: itemVariants
            },
            React.createElement(
                'h3',
                { className: 'text-xl font-semibold text-gray-800 mb-6' },
                'Technologies'
            ),
            React.createElement(
                'div',
                { className: 'space-y-4' },
                technologies.map((tech, index) => (
                    React.createElement(
                        'div',
                        { key: index, className: 'mb-2' },
                        React.createElement(
                            'div',
                            { className: 'flex justify-between mb-1' },
                            React.createElement('span', { className: 'text-gray-700 font-medium' }, tech.name),
                            React.createElement('span', { className: 'text-gray-500 text-sm' }, `${tech.level}%`)
                        ),
                        React.createElement(
                            'div',
                            { className: 'w-full bg-blue-100 rounded-full h-2.5' },
                            React.createElement(
                                motion.div,
                                {
                                    className: 'bg-blue-600 h-2.5 rounded-full',
                                    style: { width: '0%' },
                                    animate: { width: `${tech.level}%` },
                                    transition: { duration: 1, delay: index * 0.1 }
                                }
                            )
                        )
                    )
                ))
            )
        ),

        // Interests Section
        React.createElement(
            motion.div,
            {
                className: 'bg-white rounded-xl shadow-md p-6 md:p-8 md:col-span-2',
                variants: itemVariants
            },
            React.createElement(
                'h3',
                { className: 'text-xl font-semibold text-gray-800 mb-6' },
                'Interests'
            ),
            React.createElement(
                'div',
                { className: 'flex flex-wrap gap-4' },
                interests.map((interest, index) => (
                    React.createElement(
                        motion.div,
                        {
                            key: index,
                            className: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-lg shadow-md text-center',
                            whileHover: { scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)' },
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: index * 0.2 }
                        },
                        interest
                    )
                ))
            )
        )
    );
}

// Projects Component
function ProjectsComponent() {
    const projects = [
        {
            title: 'Athlete Management System',
            description: 'Led a 5-person team to build and deploy a comprehensive Athlete Management System for Colby Athletics using Heroku. Created a one-stop portal for real-time athlete readiness tracking using Flask and fetched data from wearables using REST API. Developed an injury prediction model for 775 varsity athletes using historical data, enhancing strategy and team performance.',
            image: 'assets/images/projects/athletemanagement.jpg',
            tags: ['Flask', 'REST API', 'Machine Learning', 'Heroku', 'Team Project'],
            githubUrl: 'https://github.com/enjoythecode/scrum-wizards-cs321'
        },
        {
            title: 'Chaos Dungeon Game',
            description: 'Built a fully functional single-player interactive adventure pc game using Pygame. Pioneered essential character class foundations and crafted an intuitive UI for a seamless gaming experience. Enhanced player engagement and strategy through careful balance of fitness and difficulty.',
            image: 'assets/images/projects/chaosdungeon.jpg',
            tags: ['Python', 'Pygame', 'Game Development', 'UI Design'],
            githubUrl: 'https://github.com/tylionshield/ChaosDungeon'
        },
        {
            title: 'Artivism A',
            description: 'An innovative platform connecting art and activism, fostering creative expression for social change.',
            image: 'assets/images/projects/artivism.jpg',
            tags: ['React', 'Node.js', 'Social Impact', 'UI/UX'],
            githubUrl: 'https://github.com/emmanuelassumang/ArtivismA'
        },
        {
            title: 'FigRex',
            description: 'A figure recognition and analysis tool designed to interpret and process visual data efficiently.',
            image: 'assets/images/projects/figrex.jpg',
            tags: ['Computer Vision', 'AI/ML', 'Data Processing', 'Python'],
            githubUrl: 'https://github.com/Syd4r/figrex'
        }
    ];

    // Using the framer-motion library for animations
    // Make sure Motion object exists to prevent errors
    const { motion } = (typeof Motion !== 'undefined') ? Motion : { motion: {} };

    return React.createElement(
        'div',
        { className: 'space-y-12' },
        projects.map((project, index) => (
            React.createElement(
                motion.div,
                {
                    key: index,
                    className: 'glass-card overflow-hidden project-card-3d',
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: '-100px' },
                    transition: { duration: 0.6, delay: index * 0.2 }
                },
                React.createElement(
                    'div',
                    { className: 'flex flex-col md:flex-row' },
                    React.createElement(
                        'div',
                        { className: 'md:w-2/5 project-image-container' },
                        React.createElement(
                            'img',
                            {
                                src: project.image,
                                alt: project.title,
                                className: 'w-full h-64 md:h-full object-cover'
                            }
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'md:w-3/5 p-6 md:p-8 relative z-10' },
                        React.createElement(
                            'h3',
                            { className: 'text-2xl font-semibold text-white mb-3' },
                            project.title
                        ),
                        React.createElement(
                            'p',
                            { className: 'text-gray-300 mb-6' },
                            project.description
                        ),
                        React.createElement(
                            'div',
                            { className: 'flex flex-wrap gap-2' },
                            project.tags.map((tag, tagIndex) => (
                                React.createElement(
                                    motion.span,
                                    {
                                        key: tagIndex,
                                        className: 'tech-badge px-3 py-1 rounded-full text-sm',
                                        whileHover: { scale: 1.1 }
                                    },
                                    tag
                                )
                            ))
                        ),
                        React.createElement(
                            'div',
                            { className: 'mt-6' },
                            React.createElement(
                                'a',
                                {
                                    href: project.githubUrl,
                                    target: '_blank',
                                    className: 'px-4 py-2 bg-gradient-to-r from-accent-indigo to-accent-purple text-white rounded-full inline-flex items-center hover:shadow-lg hover:shadow-accent-indigo/30 transition-all transform hover:-translate-y-1'
                                },
                                'View on GitHub ',
                                React.createElement(
                                    'i',
                                    { className: 'fab fa-github ml-2' }
                                )
                            )
                        )
                    )
                )
            )
        ))
    );
}

// Render React Components
document.addEventListener('DOMContentLoaded', function() {
    // Skills Component
    const skillsContainer = document.getElementById('skills-component');
    if (skillsContainer) {
        ReactDOM.render(React.createElement(SkillsComponent), skillsContainer);
    }

    // Projects Component
    const projectsContainer = document.getElementById('projects-component');
    if (projectsContainer) {
        ReactDOM.render(React.createElement(ProjectsComponent), projectsContainer);
    }
    
    // 3D Tech Stack Component
    const techStackContainer = document.getElementById('tech-stack-component');
    if (techStackContainer && typeof TechStackComponent !== 'undefined') {
        ReactDOM.render(React.createElement(TechStackComponent), techStackContainer);
    }
    
    // Enhanced 3D Tech Stack (if available)
    const enhancedTechStackSection = document.getElementById('tech-stack-section');
    if (enhancedTechStackSection && typeof EnhancedTechStackComponent !== 'undefined') {
        ReactDOM.render(React.createElement(EnhancedTechStackComponent), enhancedTechStackSection);
    }
});
