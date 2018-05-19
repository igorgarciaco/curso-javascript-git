primeiroPedido = {
    nome: 'Luciel, Karine, Vicente',
    pedidos: [
        {
            nome: "Alaminuta",
            quantidade: 2,
            frango: 3,
            carne: 1,
            ovo: 4,
            valor: 25
        },
        {
            nome: "Batata Frita",
            quantidade: 1,
            valor: 12
        }
    ]
};

segundoPedido = {
    nome: 'Arthur, Raphael, Filipe, Guilindo',
    pedidos: [
        {
            nome: "Alaminuta",
            quantidade: 2,
            frango: 3,
            carne: 1,
            ovo: 4,
            valor: 25
        },
        {
            nome: "Batata Frita",
            quantidade: 1,
            valor: 12
        }
    ]
}

pedido = [primeiroPedido, segundoPedido]

let soma = 0;
for(let i=0; i < pedido.length;i = i+1){
    let objeto_pedido = pedido[i];
    console.log(objeto_pedido.nome, `Eu to no loop ${i+1}`);
}