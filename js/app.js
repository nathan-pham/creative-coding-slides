import { animations, fadeInSlide } from "./animations/animations.js";
import { toggleFullScreen } from "./toggleFullScreen.js";
import { splitText } from "./splitText.js";

const slides = [...document.querySelectorAll(".slide")];
let currentSlide = parseInt(location.hash.slice(1)) || 0;

// update slide index
const changeSlides = (newSlideIndex = 0) => {
    // set new slide & hash
    currentSlide = Math.min(Math.max(newSlideIndex, 0), slides.length - 1);
    location.hash = currentSlide;

    // hide all other slides & animate current
    for (let i = 0; i < slides.length; i++) {
        if (currentSlide == i) {
            slides[i].classList.remove("slide-hidden");
            animateSlide(currentSlide);
        } else {
            slides[i].classList.add("slide-hidden");
        }
    }
};

// animate slides
const animateSlide = (currentSlide) => {
    const slide = slides[currentSlide];
    const animation = animations[slide.dataset.animation];

    if (typeof animation === "function") {
        animation(slide);
    } else {
        fadeInSlide(slide);
    }
};

// change to new slide on key press
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowRight":
            changeSlides(currentSlide + 1);
            break;

        case "ArrowLeft":
            changeSlides(currentSlide - 1);
            break;

        case "Enter":
            toggleFullScreen();
            break;
    }
});

// initial animations
splitText();
changeSlides(currentSlide, false);
