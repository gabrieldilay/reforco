const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
        codigo: {type: Number, required: [true, "Código é obrigatório"]},
        nome:  {type: String, required: [true, "Nome é obrigatório"]},
});

module.exports = mongoose.model('status', statusSchema )