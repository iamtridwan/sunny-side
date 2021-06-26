
// creating collapsible toggle menu 

let navBar = document.getElementById('nav-bar');
let toogleBtn = document.querySelector('#icon');
toogleBtn.addEventListener("click", ()=>{
    navBar.classList.toggle('show-nav');
})