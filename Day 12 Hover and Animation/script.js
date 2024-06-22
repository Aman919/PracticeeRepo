const texts = document.querySelectorAll(".text")
texts.forEach(text=>{
    const spans = Array.from(text.textContent.trim()).map
    (char=>
        `<span>${char === '' ? '&nbsp;' : char}</span>`).join('');
        text.innerHTML = spans;
    })

    // const spanList = text.querySelectorAll("span");
    // spanList.forEach((span, index)=>{
    //     span.addEverntListener('mouseOver', ()=>{
    //         spanList.forEach((s, i)=>{
    //             const distance = Math.abs(index-i);
    //             const delay = (distance*0.1).toFixed(1);
    //             s.style.transitionDelay = 
    //         })
        // })
    // })