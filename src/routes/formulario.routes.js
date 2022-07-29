const express = require('express');
const formularioControlador = require('../controllers/formulario.controller');

const api = express.Router();

api.post('/newForm',formularioControlador.newForm);
api.get('/VerFormularios',formularioControlador.VerFormularios);

module.exports = api;