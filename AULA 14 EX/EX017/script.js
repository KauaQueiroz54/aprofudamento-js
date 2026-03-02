 function gerar() {
    var num = document.getElementById('txtn')
    var tabu = document.getElementById('seltab')
    if (num.value.length == 0){  
        alert("DIGITE UM NÚMERO")
    }else{
        var n1 = Number(num.value) 
        tabu.innerHTML = ''
        for (var num1 = 1; num1 <=10; num1++){
        var item = document.createElement('option')
        item.text = `${n1} x ${num1} = ${n1*num1}`
        tabu.appendChild(item)
    }
    }
    
    
 }