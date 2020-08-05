const express = require('express')
const Cadastro = require('../models/cadastroLivro');
const { model } = require('../models/cadastroLivro');

const router = express.Router()

router.post('/',async (req,res)=>{
    try{
        const cadastro = await Cadastro.create(req.body);
        return res.send({ cadastro })
    } catch(err){
        return res.status(400).send({ error: 'Falha ao registrar'});
    }
});
module.exports = app => app.use('/register',router)