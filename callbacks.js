function botaEmMaiusculo(palavra, callback){
    callback(palavra.toUpperCase());
}

botaEmMaiusculo('roger rabbit', log);

function log(palavra){
    console.log(palavra);

}

function somaDois(primeiroValor, segundoValor, callback){
    callback(primeiroValor + segundoValor)
  
}

somaDois(5,10,resultado);

function resultado(result){
    console.log(result);
    if (result>0){
        console.log("sucess")
    }
}

   