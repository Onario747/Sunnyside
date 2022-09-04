const mobileBtn = document.querySelector('.mobilebtn')
const navLinks = document.querySelector('.navlinks')

mobileBtn.addEventListener ('click', ()=>{
    navLinks.classList.toggle('activebtn');
})