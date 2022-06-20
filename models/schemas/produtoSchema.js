const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
        codigo: {type: Number, required: [true, "Código é obrigatório"]},
        nome: {type: String, required: [true, "Nome é obrigatório"]},
        preco: {type: Number,
                required: [true, "Código é obrigatório"],
                min: [0, "Preço não pode ser negativo"]
                },
        descricao: String,
        desc:String,
        foto: String,
        avaliacao: Number,
        professorId: {type: mongoose.Schema.Types.ObjectId, ref: 'professor'}
});

module.exports = produtoSchema;