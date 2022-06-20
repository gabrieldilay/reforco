require('./mongoodb');
const produtoModel = require('../models/produtoModel');
const dados = require('./produto.json');

function carregarDados(){
    produtoModel.deleteMany({}, () => {
        dados.forEach(produto => {
            produtoModel.create(produto);
        })
    })
}

carregarDados();
setTimeout(process.exit, 3000);