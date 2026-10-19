
const music = document.getElementById("birthday-song");
const musicToggle = document.getElementById("music-toggle");

const openLetterButton = document.getElementById("open-letter");
const envelope = document.getElementById("envelope");
const loveLetter = document.getElementById("love-letter");

const surpriseButton = document.getElementById("surprise-button");
const finalMessage = document.getElementById("final-message");
const heartsContainer = document.getElementById("hearts-container");

// Background music controls
musicToggle.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            musicToggle.textContent = "♫ Pause our song";
        } catch (error) {
            musicToggle.textContent = "Music unavailable 💗";
            alert(
                "Please add your love-song MP3 file inside the assets folder."
            );
        }
    } else {
        music.pause();
        musicToggle.textContent = "♫ Play our song";
    }
});

music.addEventListener("play", () => {
    musicToggle.textContent = "♫ Pause our song";
});

music.addEventListener("pause", () => {
    musicToggle.textContent = "♫ Play our song";
});

// Open the love letter
openLetterButton.addEventListener("click", () => {
    loveLetter.hidden = false;
    envelope.hidden = true;

    createHeartShower(20);

    loveLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Reveal the final birthday surprise
surpriseButton.addEventListener("click", () => {
    finalMessage.hidden = false;
    surpriseButton.hidden = true;

    createHeartShower(40);

    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// Floating hearts animation
function createHeartShower(amount) {
    const symbols = ["❤️", "💕", "💗", "💖", "💘", "♡"];

    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            const heart = document.createElement("span");

            heart.className = "floating-heart";
            heart.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (16 + Math.random() * 25) + "px";
            heart.style.animationDuration = (3 + Math.random() * 4) + "s";
            heart.style.opacity = String(0.6 + Math.random() * 0.4);

            heartsContainer.appendChild(heart);

            heart.addEventListener("animationend", () => {
                heart.remove();
            });

            // Fallback cleanup in case the animation event does not fire.
            setTimeout(() => {
                heart.remove();
            }, 8000);

        }, i * 90);
    }
}

// A few gentle hearts occasionally float in the background.
setInterval(() => {
    if (document.hidden) return;

    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "20px";
    heart.style.animationDuration = "6s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6500);
}, 1800);
