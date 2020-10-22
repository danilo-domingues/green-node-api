'use strict';
const mongoose = require('mongoose');
const Pessoa = require('../models/pessoa-model');


exports.get = async() =>{
    const res = await Pessoa.find();
    return res;
}

exports.getById = async(id) => {
    const res = await Pessoa
        .findById(id);
    return res;
}


exports.create = async(data) => {
    var pessoa = new Pessoa(data);
    var result = await pessoa.save();
    return result;
}