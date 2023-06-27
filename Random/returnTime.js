// função para achar a quantidade de dias entre duas datas
function returnTime() {
    // data 1 é a referencia 16/09/2022
    // data 2 é o dia atual 
    let data1 = new Date(2022, 8, 16);
    let data2 = new Date();

    // diferença em milissegundos
    let diff = data1.getTime() - data2.getTime();

    // transformando em dias
    let diffDias = diff / (1000 * 60 * 60 * 24);
    diffDias = Math.ceil(diffDias);
    //dia negativo troca sinal
    if (diffDias < 0) {
        diffDias = diffDias * -1;
    }
    console.log(diffDias);
    return diffDias;
}

