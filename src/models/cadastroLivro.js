const mongoose = require('../database');

const CadastroSchema = new mongoose.Schema({
    livro:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    emailDonoLivro:{
        type:String,
        required:true,
        required: true,
        lowercase:true
    },
    negociado: {
        type:Boolean,
        require: true,
        default: false
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
})

const Cadastro = mongoose.model("Cadastro",CadastroSchema);
module.exports = Cadastro;