//----------------Burger menu-----------------
let burgerButton = document.querySelector(".burger"),
   // span = document.querySelector(".burger__span"),
   nav = document.querySelector(".header__nav"),
   body = document.querySelector('body');


burgerButton.addEventListener('click', () => {
   burgerButton.classList.toggle('active')
   // span.classList.toggle('active')
   nav.classList.toggle('active')
   body.classList.toggle('modal-open')
})

//--------------Smoth scroll link---------------
let link = document.querySelectorAll("a[href*='#']")

link.forEach(elem => {
   elem.addEventListener('click', (e) => {
      e.preventDefault()

      let id = elem.getAttribute('href')

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
})

