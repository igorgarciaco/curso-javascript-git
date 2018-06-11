function botaMaiusc(nome){
    return new Promise(
        (resolver, reject) => {
            let nomeNovo = nome.toUpperCase();
            resolver(nomeNovo)
    })
}

let nome = botaMaiusc('nome')
console.log(nome)

nome.then(resposta => {
    console.log(resposta)
})

botaMaiusc('outro nome').then(function(maiusculo){
    console.log(maiusculo)
})

.catch(
    (reject) => {
        console.error('ERROR 404')
    }
)