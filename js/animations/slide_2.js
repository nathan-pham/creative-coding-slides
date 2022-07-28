import gsap from "https://cdn.skypack.dev/gsap@v3.10.4";
import { sharedAnimation } from "./config.js";

export default (slide) => {
    gsap.fromTo(
        slide.querySelectorAll("*"),
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.25,
            ...sharedAnimation,
        }
    );
};
