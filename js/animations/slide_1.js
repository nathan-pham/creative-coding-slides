import gsap from "https://cdn.skypack.dev/gsap@v3.10.4";
import { sharedAnimation } from "./config.js";

export default (slide) => {
    gsap.fromTo(
        slide.querySelector("h1"),
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            ...sharedAnimation,
        }
    );

    gsap.fromTo(
        slide.querySelectorAll("p, li, iframe"),
        {
            opacity: 0,
            x: -100,
        },
        {
            opacity: 1,
            x: 0,
            delay: 0.5,
            stagger: 0.1,
            ...sharedAnimation,
        }
    );

    gsap.fromTo(
        slide.querySelector(".img"),
        {
            opacity: 0,
            y: 100,
        },
        {
            opacity: 1,
            y: 0,
            delay: 1.5,
            ...sharedAnimation,
        }
    );
};
