const express = require('express')
const listaLivros = require('../models/cadastroLivro');
const { model } = require('../models/cadastroLivro');

const router = express.Router()

router.get('/',async(req,res) =>{
    try{
        const livros = await listaLivros.find();
        return res.send({ livros })
    }catch(err){
        return res.status(400).send({error:"não há livro registrado"})
    }
})

router.get('/:livroId',async(req,res)=>{
    try{
        const livro = await listaLivros.findById(req.params.livroId);
        return res.send({ livro })
    }catch(err){
        return res.status(400).send({error:"não há livro registrado"})
    }
})

router.put('/:livroId', async(req,res)=>{
    try{
        const { negociado } = req.body
        const livro = await listaLivros.findByIdAndUpdate(req.params.livroId,{ negociado }, { new:true })
        await livro.save()
        return res.send({ livro })
    }catch{
        return res.status(400).send({error:"Não atualizado"})

    }
})

router.delete('/:livroId',async(req,res)=>{
    try{
        await listaLivros.findByIdAndRemove(req.params.livroId);
        return res.status(200).send({message: "livro apagado"})
    }catch(err){
        return res.status(400).send({error:"livro não existe"})
    }
})

module.exports = app => app.use('/livros',router)