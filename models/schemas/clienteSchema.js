const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
 descricao: String,
                codigo:Number,
                sobrenome :  String ,
                nome: {type: String, required: true},
                cpf :  Number,
                saldoCarteira : Number,
                receita : Number,
                empresa :  String,
                fone :  Number ,
                endereco :  String,
                cep :  Number ,
                cidade :  String ,
                estado :  String ,
                usuario : Number,
                loja : Number
              
});

module.exports = clienteSchema