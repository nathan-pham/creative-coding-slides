import gsap from "https://cdn.skypack.dev/gsap@v3.10.4";
import { sharedAnimation } from "./config.js";

import slide_0 from "./slide_0.js";

export const animations = {
    0: slide_0,
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
