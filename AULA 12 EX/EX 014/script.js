function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minuto}min.`

    if(hora >= 0 && hora <12){
        foto.src = 'fotodamanha.png'
        document.body.style.background = '#F1B694'
    }else if(hora >=12 && hora <=18){
        foto.src = 'fototarde.png'
        document.body.style.background = '#7D8387'
    }else{
        foto.src = 'fotonoite.png'
        document.body.style.background = '#1B2F53'
    }
}

