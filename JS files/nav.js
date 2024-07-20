const hamburger = document.querySelector('header > .irene > div > .open')
const close = document.querySelector('header > .irene > div > .close')
const nav2 = document.querySelector('.nav2')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.add('hide')
    close.classList.add('hide')
    nav2.classList.toggle('visible')
})

close.addEventListener('click', ()=>{
    hamburger.classList.remove('hide')
    close.classList.remove('hide')
    nav2.classList.toggle('visible')
})