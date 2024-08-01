// textElement = document.querySelector(".text");
// box = document.querySelector(".box");
// targetText = textElement.innerHTML.trim();
// // Text.innerHTML='';

// for (let i=0; i<targetText.length; i++) {
//     span = document.createElement("span");
//     span.textContent = targetText[i];
//     box.appendChild(span);
// }

let textElement = document.querySelector('.text')
let textContent = textElement.textContent;
textElement.innerHTML = '';

let spans = []
for (let char of textContent) {
    let span = document.createElement('span');
    span.textContent = char;
    textElement.appendChild(span);
    spans.push(span);
}

//add scroll event listener
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    spans.forEach((span, index) => {
        if (scrollDistance >= (index + 1) * 50) {
            span.style.transform = `translate(${index * 20}px, 0)`
            span.classList.add('active'); 
        }
        else{
            span.style.transform = `translate(${Math.random()*100-50}vw, ${Math.random()*100-50}vh)`;
            span.classList.remove('active');
        }
    })
})

// Trigger initial random position
window.dispatchEvent(new Event('scroll'));