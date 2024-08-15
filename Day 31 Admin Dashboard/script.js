// add hovered class in selected list item

let list = document.querySelectorAll('.navigation ul li');


function activeLink() {
    list.forEach((item) => {
        item.classList.remove('hovered');
        this.classList.add('hovered');
    })
}

list.forEach((item) => {
    item.addEventListener('mouseover', activeLink)
})

// let searchInput = document.querySelector('.search input')
// searchInput.addEventListener('keydown',function(e){
//     if(e.key==='Escape'){
//         searchInput.value='';
//     }
// })

//Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}