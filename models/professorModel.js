const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
        codigo: {type: Number, required: [true, "Código é obrigatório"]},
        nome:  {type: String, required: [true, "Nome é obrigatório"]},
        descricao: String,
});

module.exports = mongoose.model('professor', professorSchema )