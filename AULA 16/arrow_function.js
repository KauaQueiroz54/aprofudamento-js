//FORMA NOVA DE ORGANIZAR UMA FUNÇÃO

function subtracao(a,b){
    return a - b;
}

const subtracao2 = (a,b) =>  a - b;


function somar2(a){
    return a +2;
}


const somar2_2 = a =>  a +2;



function diaDoMes(){
    return (new Date()).getDate();
}

const diaDoMes2 = () => (new Date()).getDate();

console.log(`O DIA DE HOJE É ${diaDoMes2()}`)

//------------------------------------------//
//EXEMPLO DE FUNÇÃO ROBUSTA
function superfuncao(a,b) {
    let subtra = a - b;
    subtra -= 2;
    let diaDoMes =  new Date().getDate();
    return diaDoMes;
}

const superfuncao = (a, b) => {
    let subtra = a - b;
    subtra -= 2;
    let diaDoMes =  new Date().getDate();
    return diaDoMes;
}
// --------------------------------------------//