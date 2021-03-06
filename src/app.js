'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Connect to Mongo
mongoose.connect(config.connectionString);


// Carrega Models
const Pessoa = require('./models/pessoa-model');
const Login = require('./models/login-model');

// Carrega as rotas
const pessoaRoute = require('./routes/pessoa-route');
const loginRoute = require('./routes/login-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
    }));

app.use('/pessoa', pessoaRoute);
app.use('/login', loginRoute);

 
module.exports = app;