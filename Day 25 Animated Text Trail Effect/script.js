document.addEventListener("DOMContentLoaded", () => {
    let cursor = document.querySelector('.cursor');
    let textContent = "animate text trail effect";

    for (let i = 0; i < textContent.length; i++) {
        let span = document.createElement('span');
        span.classList.add('text');
        span.style.setProperty('--i', i + 1);
        span.style.left = i * 0.6 + 'em';
        span.textContent = textContent[i];
        span.style.filter = `hue-rotate(${i * 10}deg)`;
        cursor.appendChild(span)
    }

    //Mousemove event to animate text with gsap
    document.addEventListener("mousemove", e => {
        gsap.to(".text", {
            x: e.clientX,
            y: e.clientY,
            stagger: 0.05
        })
    })
})