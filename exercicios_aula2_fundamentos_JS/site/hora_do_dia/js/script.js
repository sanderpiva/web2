let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let date = new Date()
let hora = date.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if(hora >= 0 && hora < 12){

    img.src='manha.png'
    document.body.style.background='#d1b942'
}

else if(hora > 12 && hora <= 18){
    img.src='tarde.png'
    document.body.style.background='#b9846f'
}

else{

    img.src='noite.png'
    document.body.style.background='#515154'
}