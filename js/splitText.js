{
    /* <h1 class="slide-landing__title" data-split>
<span class="highlight">Introduction</span> to<br />
<span class="highlight">Art</span> for<br />
<span class="highlight">Programmers</span>
</h1> */
}

export const splitText = () => {
    const elements = [...document.querySelectorAll("[data-split]")];
    for (const element of elements) {
        // save nodes
        const cacheNodes = [...element.childNodes];

        // clear element
        element.innerHTML = "";

        // replace all characters with spans
        for (const node of cacheNodes) {
            if (
                node.nodeType === 3 &&
                (node.textContent.trim().length > 0 || node.textContent === " ")
            ) {
                element.innerHTML += textToSpans(node.textContent);
            } else {
                element.appendChild(node);
            }
        }
    }
};

const textToSpans = (text) =>
    text
        .split(" ")
        .map((char) => `<span>${char}</span>`)
        .join("\n");
