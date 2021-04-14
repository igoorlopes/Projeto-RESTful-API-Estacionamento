const express = require('express');
const app = express();
const rotaCarros = require('./routes/carros');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/carros', rotaCarros);

module.exports = app;