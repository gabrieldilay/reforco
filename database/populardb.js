require('./mongoodb');

const statusModel = require('../models/statusModel');
const status = require('./status.json');

const professorModel = require('../models/professorModel');
const professor = require('./professor.json');

const clienteModel = require('../models/clienteModel');
const clientes = require('./clientes.json');

const produtoModel = require('../models/produtoModel');
const produto = require('./produto.json');

const pedidoModel = require('../models/pedidoModel');
const pedido = require('./pedido.json');

function carregarDados(){

    statusModel.deleteMany({}, () => {
        status.forEach(obj => {
            produtoModel.create(obj);
        })
    })

    professorModel.deleteMany({}, () => {
        professor.forEach(obj => {
            produtoModel.create(obj);
        })
    })

    clienteModel.deleteMany({}, () => {
        clientes.forEach(obj => {
            produtoModel.create(obj);
        })
    })

    produtoModel.deleteMany({}, () => {
        produto.forEach(obj => {
            produtoModel.create(obj);
        })
    })

    pedidoModel.deleteMany({}, () => {
        pedido.forEach(obj => {
            produtoModel.create(obj);
        })
    })
}

carregarDados();
setTimeout(process.exit, 3000);