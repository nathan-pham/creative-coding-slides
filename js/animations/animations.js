import gsap from "https://cdn.skypack.dev/gsap@v3.10.4";
import { sharedAnimation } from "./config.js";

import slide_0 from "./slide_0.js"; // landing page animations
import slide_1 from "./slide_1.js"; // standard animate header + image
import slide_2 from "./slide_2.js"; // animate center card
import slide_3 from "./slide_3.js"; // stagger all

export const animations = {
    slide_0,
    slide_1,
    slide_2,
    slide_3,
};

export const fadeOutSlide = (element) =>
    gsap.fromTo(
        element,
        {
            opacity: 1,
        },
        {
            opacity: 0,
            ...sharedAnimation,
            onComplete: () => {
                element.classList.add("slide-hidden");
            },
        }
    );

export const fadeInSlide = (element) =>
    gsap.fromTo(
        element,
        {
            opacity: 0,
        },
        {
            opacity: 1,
        }
    );
