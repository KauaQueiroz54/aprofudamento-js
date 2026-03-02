function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    }else{
       var fsex = document.getElementsByName('txtsexo')
        var idade = ano - Number(fano.value)
        var genero = ""
        var pronome = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        img.style.margin = 'center'
        img.style.height = '300px'
        img.style.width = '200px'
        if(fsex[0].checked) {
             genero = 'Homem'
            pronome = 'um'
            if(idade >= 0 &&  idade<11){
                //criança
                img.setAttribute('src' , 'criança-homem.png')
            }else if (idade <=21) {
                //jovem
                img.setAttribute('src' , 'homem-jovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            }else{
                //idoso
                img.setAttribute('src' , 'homem-idoso.png')
            }
        }else{
            genero = 'Mulher'
            pronome = 'uma'
            if(idade >0 &&  idade<11){
                //criança
                img.setAttribute('src', 'criança-mulher.png')
            }else if (idade <=21) {
                //jovem
                img.setAttribute('src' , 'mulher-jovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src' , 'mulher-adulta.png')
            }else{
                //idoso
                img.setAttribute('src' , 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado que você é ${pronome} ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.height = '350px'
        img.style.width = '300px' 
    }
}
