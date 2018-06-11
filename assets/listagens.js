primeiroJogo = {
    nome: "Devil May Cry",
    valor: 49.50
}

segundoJogo = {
    nome: "Horizon: Zero Dawn",
    valor: 99.90
}

listaJogos = [primeiroJogo, segundoJogo];

for(let i = 0 ; i<listaJogos.length; i++){
    let objeto = listaJogos[i].nome
    console.log(objeto)
}

function somaValor(){
        let soma = 0 
        for (let i=0 ; i<listaJogos.length; i++){
            soma += listaJogos[i].valor;
        }
        return soma                
    }

console.log("Valor total: "+somaValor());

