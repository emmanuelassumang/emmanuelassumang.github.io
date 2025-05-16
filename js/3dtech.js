// 3D Tech Stack Component

function TechStackComponent() {
    // Tech stack with icons
    const techStack = [
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'Java', icon: 'fab fa-java', color: '#007396' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
        { name: 'TypeScript', icon: 'fab fa-js', color: '#3178C6' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
        { name: 'R', icon: 'fas fa-chart-line', color: '#276DC3' },
        { name: 'MATLAB', icon: 'fas fa-cubes', color: '#0076A8' },
        { name: 'SQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'Golang', icon: 'fas fa-code', color: '#00ADD8' },
        { name: 'C', icon: 'fas fa-code', color: '#A8B9CC' }
    ];

    // Using the framer-motion library for animations
    const { motion } = Motion;

    return React.createElement(
        'div',
        { className: 'py-12' },
        React.createElement(
            'h3',
            { className: 'text-2xl font-semibold text-gray-800 mb-8 text-center' },
            'Tech Stack'
        ),
        React.createElement(
            motion.div,
            {
                className: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6',
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { staggerChildren: 0.1 }
            },
            techStack.map((tech, index) => (
                React.createElement(
                    motion.div,
                    {
                        key: index,
                        className: 'perspective-container',
                        initial: { opacity: 0, rotateY: -90 },
                        animate: { opacity: 1, rotateY: 0 },
                        transition: {
                            delay: index * 0.1,
                            duration: 0.6,
                            type: 'spring',
                            stiffness: 60
                        },
                        whileHover: {
                            scale: 1.05,
                            rotateY: 180,
                            transition: {
                                duration: 0.8,
                                type: 'spring',
                                damping: 10,
                                stiffness: 100
                            }
                        }
                    },
                    React.createElement(
                        'div',
                        {
                            className: 'tech-cube relative w-full h-52 transform-style-3d cursor-pointer'
                        },
                        // Front face
                        React.createElement(
                            'div',
                            {
                                className: 'tech-cube-face tech-cube-front absolute w-full h-full flex flex-col items-center justify-center rounded-xl p-6 shadow-lg transform-gpu',
                                style: {
                                    backgroundColor: tech.color,
                                    color: isLightColor(tech.color) ? '#1a202c' : 'white',
                                    transform: 'translateZ(2rem)'
                                }
                            },
                            React.createElement(
                                'i',
                                { className: `${tech.icon} text-5xl mb-4` }
                            ),
                            React.createElement(
                                'h4',
                                { className: 'text-xl font-bold' },
                                tech.name
                            )
                        ),
                        // Back face
                        React.createElement(
                            'div',
                            {
                                className: 'tech-cube-face tech-cube-back absolute w-full h-full flex flex-col items-center justify-center rounded-xl p-6 shadow-lg transform-gpu',
                                style: {
                                    backgroundColor: 'white',
                                    color: tech.color,
                                    transform: 'translateZ(-2rem) rotateY(180deg)'
                                }
                            },
                            React.createElement(
                                'i',
                                { className: `${tech.icon} text-5xl mb-4` }
                            ),
                            React.createElement(
                                'h4',
                                { className: 'text-xl font-bold mb-2' },
                                tech.name
                            ),
                            React.createElement(
                                'div',
                                { className: 'skill-level' },
                                [...Array(5)].map((_, i) => (
                                    React.createElement(
                                        'i',
                                        {
                                            key: i,
                                            className: `fas fa-star ${i < getSkillLevel(tech.name) ? 'text-yellow-400' : 'text-gray-300'} mx-1`
                                        }
                                    )
                                ))
                            )
                        ),
                        // Right face
                        React.createElement(
                            'div',
                            {
                                className: 'tech-cube-face tech-cube-right absolute w-full h-full flex items-center justify-center rounded-xl p-6 transform-gpu',
                                style: {
                                    backgroundColor: lightenColor(tech.color, 20),
                                    color: isLightColor(tech.color) ? '#1a202c' : 'white',
                                    transform: 'rotateY(90deg) translateZ(2rem)'
                                }
                            },
                            React.createElement(
                                'i',
                                { className: `${tech.icon} text-5xl` }
                            )
                        ),
                        // Left face
                        React.createElement(
                            'div',
                            {
                                className: 'tech-cube-face tech-cube-left absolute w-full h-full flex items-center justify-center rounded-xl p-6 transform-gpu',
                                style: {
                                    backgroundColor: darkenColor(tech.color, 20),
                                    color: 'white',
                                    transform: 'rotateY(-90deg) translateZ(2rem)'
                                }
                            },
                            React.createElement(
                                'i',
                                { className: `${tech.icon} text-5xl` }
                            )
                        ),
                        // Top face
                        React.createElement(
                            'div',
                            {
                                className: 'tech-cube-face tech-cube-top absolute w-full h-full flex items-center justify-center rounded-xl p-6 transform-gpu',
                                style: {
                                    backgroundColor: lightenColor(tech.color, 40),
                                    color: isLightColor(tech.color) ? '#1a202c' : 'white',
                                    transform: 'rotateX(90deg) translateZ(2rem)'
                                }
                            }
                        ),
                        // Bottom face
                        React.createElement(
                            'div',
                            {
                                className: 'tech-cube-face tech-cube-bottom absolute w-full h-full flex items-center justify-center rounded-xl p-6 transform-gpu',
                                style: {
                                    backgroundColor: darkenColor(tech.color, 40),
                                    color: 'white',
                                    transform: 'rotateX(-90deg) translateZ(2rem)'
                                }
                            }
                        )
                    )
                )
            ))
        )
    );
}

// Helper function to determine if a color is light
function isLightColor(color) {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate brightness (perceived luminance)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 155;
}

// Helper function to lighten a color
function lightenColor(color, amount) {
    return pSBC(amount/100, color);
}

// Helper function to darken a color
function darkenColor(color, amount) {
    return pSBC(-amount/100, color);
}

// Function to get skill level (1-5)
function getSkillLevel(techName) {
    const levels = {
        'Python': 5,
        'Java': 4,
        'JavaScript': 5,
        'TypeScript': 4,
        'React': 4,
        'Node.js': 4,
        'HTML5': 5,
        'CSS3': 4,
        'Git': 5,
        'GitHub': 5,
        'Bootstrap': 4,
        'R': 3,
        'MATLAB': 3,
        'SQL': 4,
        'Golang': 3,
        'C': 3
    };

    return levels[techName] || 3;
}

// pSBC - Shade Blend Convert - Version 4.0
// This function helps blend colors
function pSBC(p, c0, c1, l) {
    let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a = typeof(c1) == "string";
    if (typeof(p) != "number" || p < -1 || p > 1 || typeof(c0) != "string" || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null;
    const pSBCr = (d) => {
        let n = d.length, x = {};
        if (n > 9) {
            [r, g, b, a] = d = d.split(","), n = d.length;
            if (n < 3 || n > 4) return null;
            x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1;
        } else {
            if (n == 8 || n == 6 || n < 4) return null;
            if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
            d = i(d.slice(1), 16);
            if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000;
            else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1;
        }
        return x;
    };
    h = c0.length > 9;
    h = a ? c1.length > 9 ? true : c1 == "c" ? !h : false : h;
    f = pSBCr(c0);
    P = p < 0;
    t = c1 && c1 != "c" ? pSBCr(c1) : P ? {r: 0, g: 0, b: 0, a: -1} : {r: 255, g: 255, b: 255, a: -1};
    p = P ? p * -1 : p;
    P = 1 - p;
    if (!f || !t) return null;
    if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b);
    else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
    a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
    return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
}

// Add this component to the page
document.addEventListener('DOMContentLoaded', function() {
    // Add required CSS for 3D transformations
    const style = document.createElement('style');
    style.textContent = `
        .perspective-container {
            perspective: 1000px;
            transform-style: preserve-3d;
        }

        .transform-style-3d {
            transform-style: preserve-3d;
            transition: transform 0.6s;
        }

        .tech-cube {
            transition: transform 0.8s;
            transform-style: preserve-3d;
        }

        .tech-cube-face {
            backface-visibility: hidden;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .tech-cube:hover {
            transform: rotateY(180deg);
        }
    `;
    document.head.appendChild(style);

    // Tech Stack Component
    const techStackContainer = document.createElement('div');
    techStackContainer.id = 'tech-stack-component';

    // Insert after skills-component
    const skillsComponent = document.getElementById('skills-component');
    if (skillsComponent && skillsComponent.parentNode) {
        skillsComponent.parentNode.insertBefore(techStackContainer, skillsComponent.nextSibling);
        ReactDOM.render(React.createElement(TechStackComponent), techStackContainer);
    }
});
