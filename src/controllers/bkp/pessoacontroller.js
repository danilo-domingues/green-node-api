'use strict';
const repository = require('../../repositories/pessoa-repository');


exports.post = async(req, res, next) => {


    try {
        let pessoa = req.body;
        var result =  await repository.create(pessoa);
        console.log(result);
        return res.status(201).send({message: `Pessoa cadastrada com sucesso: ${result}`});
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            error: `${error}`
        });
        
    }  
}


exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            error: `${error}`
        });
        
    }
}


exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}


