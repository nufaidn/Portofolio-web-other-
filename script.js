// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-screen');
    loader.classList.add('hidden');
});

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#2563eb' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});

// Dynamic Hover Effect
document.querySelectorAll('.item').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Lazy Loading Images
const images = document.querySelectorAll('.item img');
const imageOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                observer.unobserve(img);
            });
        }
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));

// Scroll Reveal
ScrollReveal().reveal('.item', {
    delay: 200,
    distance: '50px',
    duration: 800,
    origin: 'bottom',
    opacity: 0,
    scale: 0.9,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    interval: 100
}); 


/* Script untuk mendeteksi section yang aktif */
document.addEventListener('DOMContentLoaded', () => {
    // Mengatur scroll yang halus
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Fungsi untuk mengecek section yang visible
    const checkSection = () => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const scroll = window.scrollY;

            if(scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
                // Tambahkan class active ke section
                section.classList.add('active');
                
                // Update active state pada navigasi
                navLinks.forEach(link => {
                    if(link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    };

    // Jalankan saat scroll
    window.addEventListener('scroll', checkSection);
    
    // Jalankan saat pertama kali load
    checkSection();
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = window.scrollY / windowHeight;
        scrollProgress.style.transform = `scaleX(${progress})`;
    });
});