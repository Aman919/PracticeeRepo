document.querySelectorAll('a').forEach(link=>{
    link.innerHTML = link.innerText.split('').map((letters, i)=>{
        if(letters===' '){
            return ' ';
        } else{
            return `<span style="transition-delay: ${i*50}ms">${letters}</span>`
        }
    }).join('');
})