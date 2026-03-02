var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)
 

//num[3]  = 6  - ADICIONA OUTRO VALOR AO ARRAY, CASO NÃO EXISTA O INDICE
//num.push(7)  - ADCIONA UM VALOR (QUE ESTA DENTRO DOS PARÊNTESES) AO ULTIMO INDICE, SEM PRECISAR SE PREOCUPAR COM O TANTO DE VARIÁVEIS
//num.length  DIZ O COMPRIMENTO DO ARRAY
//num.sort ORDENA OS ITENS DO ARRAY EM ORDEM CRESCENTE

/*for(var pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}  //código tradicional*/

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //para cada posição dentro/em de num - só funciona para arrays e objetos

num.indexOf(7) //procurar onde ta o valor dentro do parênteses - se o valor que for a resposta for igual a "-1" então não existe um valor no array

console.log(num.indexOf(3))




