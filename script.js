const startDate = new Date("2025-09-04 00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `${days} Hari 💜 &nbsp;&nbsp; ${hours} Jam 💙 &nbsp;&nbsp; ${minutes} Menit 🧸 &nbsp;&nbsp; ${seconds} Detik ✨`;
}

updateTimer();
setInterval(updateTimer, 1000);

// MUSIC dengan user interaction (biar autoplay gak diblokir)
const playBtn = document.getElementById("playMusicBtn");
const audio = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
    audio.play().then(() => {
        playBtn.innerText = "🎶 Musik Lucu Sedang Berputar 🎶";
        playBtn.style.opacity = "0.8";
    }).catch(err => console.log("user allow dulu ya"));
});

// efek tambahan: munculin bubble lebih random
function createExtraBubble() {
    const bubbleDiv = document.querySelector('.floating-bubbles');
    if (bubbleDiv) {
        let extra = document.createElement('div');
        extra.innerText = ['💜', '💙', '🧸', '🐰', '⭐', '🌸', '🍭'][Math.floor(Math.random() * 7)];
        extra.style.position = 'fixed';
        extra.style.left = Math.random() * 100 + '%';
        extra.style.bottom = '-20px';
        extra.style.fontSize = (Math.random() * 25 + 20) + 'px';
        extra.style.animation = 'floatBubble 8s linear forwards';
        extra.style.pointerEvents = 'none';
        extra.style.zIndex = '999';
        document.body.appendChild(extra);
        setTimeout(() => extra.remove(), 8000);
    }
}
setInterval(createExtraBubble, 2200);
