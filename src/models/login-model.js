const mongoose = require('mongoose');
const Login = mongoose.Schema;


const login = new Login({

    username:{
        type: String,
        require: true,
    },
    senha:{
        type: String,
        required: true
    },
    ativo:{
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Login', login);