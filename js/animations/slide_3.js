import gsap from "https://cdn.skypack.dev/gsap@v3.10.4";
import { sharedAnimation } from "./config.js";

export default (slide) => {
    gsap.fromTo(
        slide.querySelectorAll("div > *"),
        {
            opacity: 0,
            x: -50,
        },
        {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            ...sharedAnimation,
        }
    );
};
