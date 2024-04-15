const overlay = document.getElementById('overlay');
const loveMessage = document.getElementById('loveMessage');
const loveText = "MY BABY LOVE YOU SO MUCH FOREVER YOU AND I!!! I LOVE YOU OH I LOVE YOU SO MUCH FOREVER LQA";
const audio = document.getElementById('audio');


document.body.addEventListener('click', () => {
    overlay.classList.add('active');
    animateText();
    animateHearts();
});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', () => {
        playAudio();
    });
    document.addEventListener('touchstart', () => {
        playAudio();
    });
});

function playAudio() {
    if (audio.paused) {
        audio.play();
    }
}

function animateText() {
    let index = 0;
    const textInterval = setInterval(() => {
        if (index < loveText.length) {
            loveMessage.textContent += loveText.charAt(index);
            index++;
        } else {
            clearInterval(textInterval);
        }
    }, 100);
}

function animateHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);
        animateHeart(heart);
    }
}

function animateHeart(heart) {
    const size = Math.random() * 30 + 10;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 15;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;

    heart.addEventListener('animationiteration', () => {
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${Math.random() * window.innerHeight}px`;
    });

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}
