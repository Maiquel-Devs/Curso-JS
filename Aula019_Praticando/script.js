function clicar() {
    var opiniao = document.getElementsByName('opini') // Os formulários
    var coment = document.getElementById('fala') // A Div que envia um comentário

    if (opiniao[0].checked) {
        coment.innerText = 'Obrigado!'
    } else if (opiniao[1].checked) {
        coment.innerText = 'Sentimos muito...'
    }else {
        alert('[ERRO] Por Favor marque uma das opções...')
    }
}