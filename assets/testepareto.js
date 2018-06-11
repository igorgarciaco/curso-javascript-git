function in_on(){

let lista = ['first item', 'second item'];
    for (let itemIndex in lista){
        // IN retorna o indíce de cada elemento
        console.log('[Item IN]:'+itemIndex)
    }
    
    for (let item of lista){
        // OF retorna o elemento 
        console.log('[Item OF]:'+item)
    }
}


let listaNumeros = [20,30,40,50]
somarNumero(listaNumeros)


function somarNumero(listaNumeros){
    resultadoFinal = 0;
    for( let numero of listaNumeros){
        resultadoFinal = resultadoFinal + numero;
        
    }
    console.log (resultadoFinal)
}

function botaMaiusculo(nome, callback){
    let maiusculo = nome.toUpperCase();
    callback(maiusculo);

}

botaMaiusculo('Carlos Juarez', function(botaEmMaiusculo){
    console.log(botaEmMaiusculo)
})


module.exports = {botaMaiusculo}