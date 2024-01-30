// responsive nav function;
function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

// fast carousel code;
let currentIndex = 0;

function showSlide(index) {
    const inner = document.querySelector('.why-build-cart-container');
    currentIndex = index;
    const translateValue = -currentIndex * 100 + '%';
    inner.style.transform = `translateX(${translateValue})`;
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 3; // Number of slides minus 1
    }
    showSlide(currentIndex);
}

function nextSlide() {
    if (currentIndex < 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// second carousel code;
// ==================================//

let currentIndex2 = 0;

function secondShowSlide(index) {
    const inner = document.querySelector('.second-carousel-inner');
    currentIndex2 = index;
    const translateValue = -currentIndex2 * 100 + '%';
    inner.style.transform = `translateX(${translateValue})`;
}

function technologiesPrevSlide() {
    if (currentIndex2 > 0) {
        currentIndex2--;
    } else {
        currentIndex2 = 3; // Number of slides minus 1
    }
    secondShowSlide(currentIndex2);
}

function technologiesNextSlide() {
    if (currentIndex2 < 3) {
        currentIndex2++;
    } else {
        currentIndex2 = 0;
    }
    secondShowSlide(currentIndex2);
}

// HOW WE BUILD carousel code;
// ==================================//

let howWeBuildCarousel = 0;

function secondShowSlide(index) {
    const inner = document.querySelector('.how-we-build-carousel-inner');
    howWeBuildCarousel = index;
    const translateValue = -howWeBuildCarousel * 100 + '%';
    inner.style.transform = `translateX(${translateValue})`;
}

function technologiesPrevSlide() {
    if (howWeBuildCarousel > 0) {
        howWeBuildCarousel--;
    } else {
        howWeBuildCarousel = 3; // Number of slides minus 1
    }
    secondShowSlide(howWeBuildCarousel);
}

function technologiesNextSlide() {
    if (howWeBuildCarousel < 3) {
        howWeBuildCarousel++;
    } else {
        howWeBuildCarousel = 0;
    }
    secondShowSlide(howWeBuildCarousel);
}

// chang html file location;
// ============================================

// html file location change about;
document.getElementById('button-home').addEventListener('click', function () {
    window.location.href = 'index.html';
});

// html file location change about;
document.getElementById('button-about').addEventListener('click', function () {
    window.location.href = 'about.html';
});

// html file location change about;
document.getElementById('button-service').addEventListener('click', function () {
    window.location.href = 'services.html'
});

// html file location change about;
document.getElementById('button-contact').addEventListener('click', function () {
    window.location.href = 'contact.html'
});