function verificar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var msg = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("|ERRO| FALTAM DADOS!")
    }else{
        msg.innerHTML = 'CONTANDO: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert("PASSO INVALIDO! CONSIDERANDO PASSO 1")
            p = 1
        }
        if(i < f){
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c = c+p){
            msg.innerHTML += ` ${c} \u{1f603} `
        } 
        }else {
            //CONTAGEM DECRESCENTE
            for (var c = i; c >= f; c-= p){
                msg.innerHTML += ` ${c} \u{1F603}`
            }
      
        }
    }


}