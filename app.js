let openForm = document.querySelectorAll('.open-form')
let formPopover = document.querySelector('.form-popover')
let formCloseBtn = document.querySelector('.form-close')
let cards = document.querySelectorAll('.card')
let infoPopovers = document.querySelectorAll('.info-popover')
let bg = document.querySelector('.backDrop')
let closeBtns = document.querySelectorAll('.close-btn')
let orderBtns = document.querySelectorAll('.orderBtn')

document.querySelector('.menu_icon').onclick = () => {
    document.querySelector('.mob-menu').classList.toggle('active')
}
document.querySelector('.close').onclick = () => {
    document.querySelector('.mob-menu').classList.remove('active')
}

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
        let popoverIndex;
        if (index > 6) {
            const mobileMapping = [0, 1, 3, 2, 5, 4, 6];
            popoverIndex = mobileMapping[index - 7];
        } else {
            popoverIndex = index;
        }
        infoPopovers[popoverIndex].classList.toggle('active');
        bg.classList.toggle('active');
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