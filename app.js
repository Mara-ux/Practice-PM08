let openForm = document.querySelectorAll('.open-form')
let formPopover = document.querySelector('.form-popover')
let formCloseBtn = document.querySelector('.form-close')
let cards = document.querySelectorAll('.card')
let infoPopovers = document.querySelectorAll('.info-popover')
let bg = document.querySelector('.backDrop')
let closeBtns = document.querySelectorAll('.close-btn')
let orderBtns = document.querySelectorAll('.orderBtn')

openForm.forEach(openFormBtn => {
    openFormBtn.onclick = () => {
        formPopover.classList.toggle('active')
        bg.classList.toggle('active')
    }
});

formCloseBtn.onclick = () => {
    formPopover.classList.remove('active')
    bg.classList.remove('active')
}
cards.forEach((card, index) => {
    card.onclick = () => {
        infoPopovers[index].classList.toggle('active')
        bg.classList.toggle('active')
    }
})
closeBtns.forEach((closeBtn, index) => {
    closeBtn.onclick = () => {
        infoPopovers[index].classList.remove('active')
        bg.classList.toggle('active')
    }
})
orderBtns.forEach((orderBtn, index) => {
    orderBtn.onclick = () => {
        infoPopovers[index].classList.remove('active')
        formPopover.classList.toggle('active')
    }
})