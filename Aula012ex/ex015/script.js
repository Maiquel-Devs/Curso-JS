function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Não esquecer do "()"
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = window.document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'Imagem/bebeM-removebg-preview.png')
        }else if (idade < 21) {
            //Joven
            img.setAttribute('src', 'Imagem/jovenM-removebg-preview.png')
        }else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'Imagem/adultoM-removebg-preview.png')
        } else {
            //Idoso
            img.setAttribute('src', 'Imagem/idosoM-removebg-preview.png')
        }
    } else if(fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'Imagem/bebeF-removebg-preview.png')
        }else if (idade < 21) {
            //Joven
            img.setAttribute('src', 'Imagem/jovenF-removebg-preview.png')
        }else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'Imagem/adultoF-removebg-preview.png')
        } else {
            //Idoso
            img.setAttribute('src', 'Imagem/idosoF-removebg-preview.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}