let imagens = document.querySelectorAll('.small_img')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('#modal_img')
let btClose = querySelector('#bt_close')
let srcVal = ""


 for(let i = 0; i<imagens.length; i++){
    imagens[i].addEventListener('click',Function(){
        
        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src', srcVal)
        modal.classList.toggle('modal_active')
    })
}

btClose.addEventListener('click', Function(){
    modal.classList.toggle('modal_active')
})

