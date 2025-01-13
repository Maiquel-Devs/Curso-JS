function carregar() {
    var corpo = window.document.getElementById('corpo')

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // o var data recebe todos os parametros do Date usando o new
    var hora = data.getHours() // o var hora está recebendo um parametro específico do Date usando a variável data
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        //Bom Dia!
        img.src = 'imgManha-removebg-preview.png'
        corpo.style.background = '#e2cd9f'
    }else if (hora >=12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'imgTarde-removebg-preview.png'
        corpo.style.background = '#b9846f'
    }else {
        //Boa noite
        img.src = 'imgNoite-removebg-preview.png'
        corpo.style.background = '#515154'
    }

}