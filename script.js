particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

let progress = 0;
const progressBar = document.getElementById('loadingProgress');
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');
const clickText = document.getElementById('clickText');
const music = document.getElementById('backgroundMusic');

const loadingInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);
        setTimeout(() => {
            clickText.style.opacity = '1';
        }, 500);
    }
    progressBar.style.width = progress + '%';
}, 200);

let hasEntered = false;
document.addEventListener('click', () => {
    if (!hasEntered && progress >= 100) {
        hasEntered = true;
        
        music.play().catch(e => console.log('Audio autoplay blocked'));
        
        loadingScreen.classList.add('hidden');
        
        setTimeout(() => {
            mainContent.classList.add('visible');
            document.body.style.overflow = 'auto';
        }, 500);
    }
});

document.addEventListener('contextmenu', e => e.preventDefault());