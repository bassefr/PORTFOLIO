document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-text', {
        strings: [
            "Basse,^2000",
            "Développeur, ^2000",
            "Passionnée des TICS ^2000",
            

        ],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500,
        backDelay: 1000,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".skills-track");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalItems = document.querySelectorAll(".skill-card").length;
    const visibleItems = 3; // Nombre de cartes visibles en même temps
    const itemWidth = document.querySelector(".skill-card").offsetWidth + 20; // Largeur d'un élément + gap
    const maxIndex = totalItems - visibleItems;

    function moveSlide(index) {
        if (index < 0) {
            index = maxIndex;
        } else if (index > maxIndex) {
            index = 0;
        }
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    prevButton.addEventListener("click", () => {
        moveSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        moveSlide(currentIndex + 1);
    });

    // Défilement automatique
    setInterval(() => {
        moveSlide(currentIndex + 1);
    }, 4000);
});
