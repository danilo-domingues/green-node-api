const mongoose = require('mongoose');
const Pessoa = mongoose.Schema;


const pessoa = new Pessoa({

    nome:{
        type: String,
        required: true
    },
    sobrenome:{
        type: String,
        required: true
    },
    hashId:{
        type: String,
        required: true
    },
    endereco:{
        type: String,
        required: true
    },
    sexo:{
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Pessoa',pessoa);