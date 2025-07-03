// Candle click effect
document.querySelector('.candle').addEventListener('click', function () {
    const flameContainer = document.querySelector('.flame-container');
    flameContainer.style.animation = 'none';

    const smoke = document.createElement('div');
    smoke.style.position = 'absolute';
    smoke.style.bottom = '225px';
    smoke.style.left = '50%';
    smoke.style.width = '30px';
    smoke.style.height = '30px';
    smoke.style.background = 'rgba(200, 200, 200, 0.7)';
    smoke.style.borderRadius = '50%';
    smoke.style.transform = 'translateX(-50%) scale(0)';
    smoke.style.animation = 'extinguish 1.5s forwards';
    document.querySelector('.cake-container').appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 1500);

    flameContainer.style.opacity = '0';
});

// Add extinguish keyframe
const style = document.createElement('style');
style.innerHTML = `
    @keyframes extinguish {
        0% { transform: translateX(-50%) scale(0); opacity: 1; }
        50% { transform: translateX(-50%) scale(3); opacity: 0.5; }
        100% { transform: translateX(-50%) scale(5); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Confetti + delayed navigation
document.querySelector('.wish-button').addEventListener('click', function (e) {
    e.preventDefault();
    const link = this.href;

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = ['#ff6b6b', '#ffd700', '#4ecdc4', '#ff5252', '#45b7d1'][Math.floor(Math.random() * 5)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '100';
        confetti.style.top = '50%';
        confetti.style.left = '50%';
        confetti.style.opacity = '0';
        document.body.appendChild(confetti);

        const angle = Math.random() * Math.PI * 2;
        const velocity = 15 + Math.random() * 10;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        confetti.animate([
            { transform: 'translate(0, 0) scale(0)', opacity: 0 },
            { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 },
            { transform: `translate(${x * 3}px, ${y * 3}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            delay: i * 50
        });

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }

    // ⏳ Delay the navigation
    setTimeout(() => {
        window.location.href = link;
    }, 1500); // adjust delay as needed
});