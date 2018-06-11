let express = require('express');

let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())

let listaCeps = [];

app.get('/ws/ceps',function(requisicao, resposta){
    resposta.send(listaCeps)
})

app.get('/ws/ceps',function(req, resp){
    resp.send(listaCeps)
})

//numero cep, localidade


// app.get('/api/pessoa',function(req, res){
//     res.send({
//         message: 'Cadastrado'
//     })
// })

app.post('/ws/cadastro',function(req, resp){
    listaCeps.push(req.body)
    console.log(listaCeps);

    resp.send({
        message: 'Deu certo'
    })

})


app.listen(3000, function(){
    console.log('Rodando na porta 3k')
})
