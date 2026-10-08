const introMusic = document.getElementById("introMusic");
const mainMusic = document.getElementById("mainMusic");

introMusic.volume = 0.4;
mainMusic.volume = 0.4;

const CONFIG = {
    name1: "Cebyy",

    message:
        "yeyeyeyyy udaaa jalan 3 tahun, semogaa kita selalu teruss bersamaa, saling ngertiin satu sama lain, selalu hargai waktu satu sama lain, dan selalu berdoa agar bisa maraih mimpi kita masingg masingg untuk mencapai suatu kesuksesan yaa, Happy Aniversary cayangg I love you! 💕",

    // Foto galeri
    photos: [
        "uhuy.jpeg",
        "aw.jpeg",
        "cuy.jpeg"
    ],

    // Foto halaman awal
    introPhoto: "ahay.jpeg"
};


/* =========================
   FOTO INTRO
========================= */

const introImg = document.getElementById("introImg");

introImg.src = CONFIG.introPhoto;


/* =========================
   FOTO GALERI
========================= */

const imgs = document.querySelectorAll(".gallery img");

imgs.forEach((img, index) => {
    img.src = CONFIG.photos[index];
});


/* =========================
   INFORMASI UTAMA
========================= */

document.getElementById("n1").textContent = CONFIG.name1;
document.getElementById("msg").textContent = CONFIG.message;


/* =========================
   MUSIK INTRO
========================= */

// Coba mulai musik intro saat website dibuka
window.addEventListener("load", () => {
    introMusic.currentTime = 0;

    introMusic.play().catch(() => {
        // Browser bisa memblokir autoplay.
        // Musik akan tetap bisa mulai setelah user berinteraksi.
    });
});


/* =========================
   HATI MELAYANG
========================= */

const box = document.getElementById("hearts");

function heart() {
    const e = document.createElement("div");

    e.className = "h";

    e.textContent = [
        "💖",
        "💗",
        "💕",
        "🌸",
        "💝"
    ][Math.random() * 5 | 0];

    e.style.left = Math.random() * 100 + "vw";
    e.style.fontSize = 14 + Math.random() * 22 + "px";
    e.style.animationDuration = 5 + Math.random() * 6 + "s";

    box.appendChild(e);

    setTimeout(() => {
        e.remove();
    }, 11000);
}

setInterval(heart, 500);


/* =========================
   CONFETTI
========================= */

function confetti(n = 70) {
    const colors = [
        "#ff6fa5",
        "#ffd6e5",
        "#ffffff",
        "#e0457f",
        "#ffb3d0"
    ];

    for (let i = 0; i < n; i++) {
        const e = document.createElement("div");

        e.className = "conf";

        e.style.left = Math.random() * 100 + "vw";
        e.style.background = colors[i % 5];
        e.style.animationDuration =
            2 + Math.random() * 3 + "s";
        e.style.animationDelay =
            Math.random() * 0.8 + "s";

        document.body.appendChild(e);

        setTimeout(() => {
            e.remove();
        }, 6000);
    }
}


/* =========================
   MENGETIK JUDUL
========================= */

function typeTitle() {
    const text = "Happy Anniversary";
    const element = document.getElementById("title");

    let i = 0;

    const interval = setInterval(() => {
        element.textContent = text.slice(0, ++i);

        if (i >= text.length) {
            clearInterval(interval);
        }
    }, 110);
}


/* =========================
   BUKA HALAMAN UTAMA
========================= */

document.getElementById("intro").addEventListener(
    "click",
    () => {
        const intro = document.getElementById("intro");
        const main = document.getElementById("main");

        // Hentikan musik intro
        introMusic.pause();
        introMusic.currentTime = 0;

        // Mulai musik anniversary
        mainMusic.currentTime = 0;
        mainMusic.play().catch(() => {});

        // Buka halaman utama
        intro.classList.add("out");
        main.classList.add("show");

        typeTitle();
        confetti();

        for (let i = 0; i < 12; i++) {
            setTimeout(heart, i * 120);
        }
    },
    {
        once: true
    }
);


/* =========================
   TOMBOL KIRIM CINTA
========================= */

document.getElementById("more").addEventListener(
    "click",
    () => {
        confetti(100);

        for (let i = 0; i < 10; i++) {
            setTimeout(heart, i * 100);
        }
    }
);