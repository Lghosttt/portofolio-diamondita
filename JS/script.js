
// ===================================
// PORTFOLIO WEBSITE - DITA
// ===================================

console.log("Welcome to Dita's Portfolio!");

document.addEventListener("DOMContentLoaded", () => {

    // ===================================
    // 1. SCROLL REVEAL ANIMATION
    // ===================================

    const revealElements = document.querySelectorAll("section");

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // ===================================
    // 2. CUTE SPARKLE CURSOR
    // ===================================

    const hasFinePointer = window.matchMedia(
        "(pointer: fine)"
    ).matches;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hasFinePointer && !prefersReducedMotion) {

        const sparkle = document.createElement("div");
        const miniHeart = document.createElement("div");

        sparkle.className = "cute-cursor";
        miniHeart.className = "cursor-heart";

        sparkle.innerHTML = "✦";
        miniHeart.innerHTML = "♡";

        document.body.appendChild(sparkle);
        document.body.appendChild(miniHeart);

        document.body.classList.add("custom-cursor-active");

        // Mengikuti posisi mouse
        document.addEventListener("mousemove", (event) => {

            const x = event.clientX;
            const y = event.clientY;

            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;

            miniHeart.style.left = `${x + 12}px`;
            miniHeart.style.top = `${y - 12}px`;

        });

        // Efek hover
        document.addEventListener("mouseover", (event) => {

            const isInteractive = event.target.closest(
                "a, button, [data-cursor='hover']"
            );

            sparkle.classList.toggle("is-hovering", !!isInteractive);
            miniHeart.classList.toggle("is-hovering", !!isInteractive);

        });

        // Efek klik
        document.addEventListener("mousedown", () => {
            sparkle.classList.add("is-clicking");
        });

        document.addEventListener("mouseup", () => {
            sparkle.classList.remove("is-clicking");
        });

    }


    // ===================================
    // 3. HERO TYPEWRITER EFFECT
    // ===================================

    const helloElement = document.getElementById("hello-typing");

    const typingElements = document.querySelectorAll(
        ".hero [data-typewriter]"
    );

    const helloText = "HELLO, I'M DIAMONDITA AISYA AZZAHRA";


    // Fungsi jeda animasi
    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };


    // Mengetik nama secara looping
    async function loopHello() {

        if (!helloElement) return;

        helloElement.classList.add("is-active");

        while (true) {

            // Mengetik nama
            for (let i = 0; i <= helloText.length; i++) {

                helloElement.textContent = helloText.slice(0, i);

                await wait(65);

            }

            // Jeda setelah nama selesai
            await wait(1800);

            // Menghapus nama
            for (let i = helloText.length; i >= 0; i--) {

                helloElement.textContent = helloText.slice(0, i);

                await wait(30);

            }

            // Jeda sebelum mengetik ulang
            await wait(500);

        }

    }


    // Mengetik konten Hero satu kali
    async function typeHeroContent() {

        for (const element of typingElements) {

            const originalText = element.textContent.trim();

            // Kosongkan teks sebelum mengetik
            element.textContent = "";

            // Mulai tampilkan elemen
            element.classList.add("is-typing");

            // Proses mengetik
            for (let i = 0; i <= originalText.length; i++) {

                element.textContent = originalText.slice(0, i);

                await wait(35);

            }

            // Hentikan efek kursor mengetik
            element.classList.remove("is-typing");

            // Pertahankan teks setelah selesai
            element.classList.add("is-typed");

            // Jeda sebelum elemen berikutnya
            await wait(250);

        }

    }


    // Jalankan animasi Hero
    if (helloElement && typingElements.length > 0) {

        loopHello();
        typeHeroContent();

    }

});
