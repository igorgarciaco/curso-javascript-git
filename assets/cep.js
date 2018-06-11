let button = document.getElementById('search')
let textField = document.getElementById('cCep')
let city = document.getElementById('city')

button.textContent = "BUSCAR CEP"


button.onclick = function(){
    // mostraValor(textField.value)
    gotoApi()
}

// function mostraValor(value){
// alert(value);
// }

function gotoApi(){
    axios
        .get(`https://viacep.com.br/ws/${textField.value}/json/`)
        .then(function(resposta){
           city.innerHTML = 'CIDADE: '+resposta.data.localidade.toUpperCase()+' - '+resposta.data.uf;
        })
}

// se for numero, busca cidade, se não, busca cep
