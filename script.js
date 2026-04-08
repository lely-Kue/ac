// Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < window.innerHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Confetti Effect
const confettiContainer = document.getElementById('confetti-container');

function createConfettiPiece() {
    const confetti = document.createElement('div');
    const colors = ['#f0c27b', '#4b1248', '#ffd700', '#ffffff', '#64748b'];
    
    confetti.style.position = 'absolute';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    confettiContainer.appendChild(confetti);

    const animation = confetti.animate([
        { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate3d(${(Math.random() - 0.5) * 200}px, 100vh, 0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0, .9, .57, 1)'
    });

    animation.onfinish = () => confetti.remove();
}

// Start confetti on load
function startCelebration() {
    for (let i = 0; i < 100; i++) {
        setTimeout(createConfettiPiece, i * 20);
    }
}

window.addEventListener('load', () => {
    // Moved celebration to after successful unlock!
});
// Text Reveal Delay for Hero
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.reveal-text');
    const heroSubtitle = document.querySelector('.reveal-text-delay');
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 1200);
});

// Login Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginOverlay = document.getElementById('login-overlay');
    const passwordInput = document.getElementById('password-input');
    const loginBtn = document.getElementById('login-btn');
    const errorMsg = document.getElementById('error-msg');
    const audioContainer = document.getElementById('audio-container');
    
    // The designated video: Sahwira Mukuru by Majesty
    const videoId = 'R9KxT8Tj-24';

    function unlockTribute() {
        if (passwordInput.value.toUpperCase() === 'AC') {
            // Success!
            
            // 1. Hide Overlay
            loginOverlay.style.opacity = '0';
            setTimeout(() => {
                loginOverlay.style.visibility = 'hidden';
                loginOverlay.style.display = 'none';
                
                // 2. Trigger body animations
                startCelebration();
                setInterval(startCelebration, 10000);
                
                // 3. Play audio by injecting iframe
                // Requires user interaction (clicking unlock) to allow autoplay
                audioContainer.innerHTML = `<iframe width="1" height="1" src="https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            }, 800);

        } else {
            // Failure
            errorMsg.style.opacity = '1';
            passwordInput.style.borderColor = '#ef4444';
            setTimeout(() => {
                errorMsg.style.opacity = '0';
                passwordInput.style.borderColor = 'var(--glass-border)';
            }, 3000);
        }
    }

    loginBtn.addEventListener('click', unlockTribute);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') unlockTribute();
    });
});
