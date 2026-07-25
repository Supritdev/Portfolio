document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const sections = document.querySelectorAll('section, main');
    const navLinks = document.querySelectorAll('.nav-links a');
    const introScreen = document.getElementById('intro-screen');
    const welcomeTextEl = document.getElementById('welcome-text');
    const fullMessage = "Hi!,welcome to my portfolio";

    let charIndex = 0;
    const typingSpeed = 100;

    function typeMessage() {
        if (charIndex < fullMessage.length) {
            welcomeTextEl.textContent += fullMessage.charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, typingSpeed);
        } else {
            setTimeout(() => {
                welcomeTextEl.style.borderRight = 'none';
                introScreen.classList.add('fade-out');
            }, 1000);
        }
    }

    function changeActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (currentSection && href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    typeMessage();
    changeActiveLink();
    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', changeActiveLink);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });
});