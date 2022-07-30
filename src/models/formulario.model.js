const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormularioSchema = Schema({
    carnet: String,
    nombre: String,
    direccion: String,
    genero: String,
    telefono: Number,
    fechaNacimiento: Date,
    carrera: String,
    generoLiterario: String,
    fechaInscripcion: Date,
    fechaDeclamacion: Date,
    edad: Number
});

module.exports = mongoose.model('Formularios', FormularioSchema);