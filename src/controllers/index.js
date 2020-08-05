const express = require('express')
const Livros = require('../models/cadastroLivro');
const { model } = require('../models/cadastroLivro');

const router = express.Router()

router.post('/livros/register',async (req,res)=>{
    try{
        const cadastro = await Livros.create(req.body);
        return res.send({ cadastro })
    } catch(err){
        return res.status(400).send({ error: 'Falha ao registrar'});
    }  
});
router.get('/livros/',async(req,res) =>{
    try{
        const livros = await Livros.find();
        return res.send({ livros })
    }catch(err){
        return res.status(400).send({error:"não há livro registrado"})
    }
})

router.get('/livros/:livroId',async(req,res)=>{
    try{
        const livro = await Livros.findById(req.params.livroId);
        return res.send({ livro })
    }catch(err){
        return res.status(400).send({error:"não há livro registrado"})
    }
})

router.put('/livros/:livroId', async(req,res)=>{
    try{
        const { negociado } = req.body
        const livro = await Livros.findByIdAndUpdate(req.params.livroId,{ negociado }, { new:true })
        await livro.save()
        return res.send({ livro })
    }catch{
        return res.status(400).send({error:"Não atualizado"})

    }
})

router.delete('/livros/:livroId',async(req,res)=>{
    try{
        await Livros.findByIdAndRemove(req.params.livroId);
        return res.status(200).send({message: "livro apagado"})
    }catch(err){
        return res.status(400).send({error:"livro não existe"})
    }
})

module.exports = app => app.use('/',router)