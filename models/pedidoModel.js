const mongoose = require('mongoose');
const produtoSchema = require('./schemas/produtoSchema');

const  pedidoSchema = new mongoose.Schema({
        codigo: {type: Number, required: [true,"Código é obrigatório"]},
        nome:  {type: String, required: [true,"Nome é obrigatório"]},
        data: {type: Date, default: Date.now},
        itens: [produtoSchema],
        total: Number,
        cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'cliente'},
        statusId: {type: mongoose.Schema.Types.ObjectId, ref: 'status'}
});

module.exports = mongoose.model('pedido',  pedidoSchema )