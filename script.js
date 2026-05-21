const startDate = new Date("2024-01-01 00:00:00");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (diff / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (diff / 1000) % 60
    );

    document.getElementById("timer").innerHTML =
        `${days} Hari 💜
     ${hours} Jam 💙
     ${minutes} Menit 💜
     ${seconds} Detik`;
}

updateTimer();

setInterval(updateTimer, 1000);