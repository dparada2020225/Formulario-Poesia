const Formulario = require('../models/formulario.model');


function newForm(req, res) {
    var modeloFormulario = new Formulario();
    var parametros = req.body;
    Formulario.find({ carnet: parametros.carnet }, (err, formularioEncontrado) => {
        if (formularioEncontrado.length > 0) {

            if (err) return res.status(500).send({ mensaje: 'error en la peticion ' })
            if (!formularioEncontrado) return res.status(500).send({ mensaje: 'error' })
            return res.status(200).send({ mensaje: "este estudiante ya lleno el formulario" })

        } else {
            let carnet = parametros.carnet
            let longuitud = carnet.length
            let cero = carnet.includes('0')
            let primerLetra = carnet.charAt(0)
            let TercerLetra = carnet.charAt(2)
            let UltimaLetra = carnet.charAt(5)


            if (longuitud === 6) {
                if (cero == false) {
                    if (primerLetra === "A") {
                        if (TercerLetra === "5") {
                            if (UltimaLetra === "1" || UltimaLetra === "3" || UltimaLetra === "9") {
                                if (parametros.carnet && parametros.nombre && parametros.direccion && parametros.genero && parametros.telefono && parametros.fechaNacimiento && parametros.carrera && parametros.generoLiterario) {

                                    function calcularEdad(fecha) {
                                        var hoy = new Date();
                                        var cumpleanos = new Date(fecha);
                                        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
                                        var m = hoy.getMonth() - cumpleanos.getMonth();
                                        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                                            edad--;
                                        }
                                        return edad
                                    }

                                    let Mayor17 = String(calcularEdad(parametros.fechaNacimiento))

                                    if (Mayor17 >= "17") {
                                        modeloFormulario.carnet = parametros.carnet
                                        modeloFormulario.nombre = parametros.nombre
                                        modeloFormulario.direccion = parametros.direccion
                                        modeloFormulario.genero = parametros.genero
                                        modeloFormulario.telefono = parametros.telefono
                                        modeloFormulario.fechaNacimiento = parametros.fechaNacimiento
                                        modeloFormulario.carrera = parametros.carrera
                                        modeloFormulario.generoLiterario = parametros.generoLiterario
                                        modeloFormulario.fechaInscripcion = new Date()
                                        modeloFormulario.edad = Number(calcularEdad(parametros.fechaNacimiento))

                                         
                                        let generoLiterario = modeloFormulario.generoLiterario;
                                        let inscripcion = modeloFormulario.fechaInscripcion;
                                        function sumarDias(fecha, dias) {
                                            fecha.setDate(fecha.getDate() + dias);
                                            return fecha;
                                        }
                                        if (UltimaLetra === "1" && generoLiterario === "dramatico") {
                                            let day;
                                            switch (inscripcion.getDay()) {
                                                case 0:
                                                    day = sumarDias(inscripcion, 5)
                                                    break;
                                                case 1:
                                                    day = sumarDias(inscripcion, 4)
                                                    break;
                                                case 2:
                                                    day = sumarDias(inscripcion, 3)
                                                    break;
                                                case 3:
                                                    day = sumarDias(inscripcion, 2)
                                                    break;
                                                case 4:
                                                    day = sumarDias(inscripcion, 1)
                                                    break;
                                                case 5:
                                                    day = sumarDias(inscripcion, 7)
                                                    break;
                                                case 6:
                                                    day = sumarDias(inscripcion, 6)
                                            }
                                            modeloFormulario.fechaDeclamacion = day
                                            modeloFormulario.save((err, formularioGuardado) => {
                                                if (err) return res.status(500).send({ mensaje: 'error en la peticion ' })
                                                if (!formularioGuardado) return res.status(500).send({ mensaje: 'error al crear formulario ' })
                                                return res.status(200).send({ Formulario: formularioGuardado })
                                        
                                            })
                                        } else if (UltimaLetra === "3" && generoLiterario === "epica") {
                                            var date = new Date()
                                            var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                                            let day;
                                            switch (ultimoDia.getDay()) {
                                                case 0:
                                                    day = sumarDias(ultimoDia, -2)
                                                    break;
                                                case 6:
                                                    day = sumarDias(ultimoDia, -1)
                                                    break;
                                                default:
                                                    day = sumarDias(ultimoDia, 0)
                                            }
                                            modeloFormulario.fechaDeclamacion = day
                                            modeloFormulario.save((err, formularioGuardado) => {
                                                if (err) return res.status(500).send({ mensaje: 'error en la peticion ' })
                                                if (!formularioGuardado) return res.status(500).send({ mensaje: 'error al crear formulario ' })
                                                return res.status(200).send({ Formulario: formularioGuardado })
                                        
                                            })
                                        } else if ((UltimaLetra === "1" || UltimaLetra === "3" || UltimaLetra === "9") && (generoLiterario === "epica" || generoLiterario === "lirica" || generoLiterario === "dramatico")) {
                                            let day;
                                            switch (inscripcion.getDay()) {
                                                case 0:
                                                    day = sumarDias(inscripcion, 5)
                                                    break;
                                                case 1:
                                                    day = sumarDias(inscripcion, 4)
                                                    break;
                                                case 2:
                                                    day = sumarDias(inscripcion, 3)
                                                    break;
                                                case 3:
                                                    day = sumarDias(inscripcion, 2)
                                                    break;
                                                case 4:
                                                    day = sumarDias(inscripcion, 1)
                                                    break;
                                                case 5:
                                                    day = sumarDias(inscripcion, 0)
                                                    break;
                                                case 6:
                                                    day = sumarDias(inscripcion, 6)
                                            }
                                            modeloFormulario.fechaDeclamacion = day
                                            modeloFormulario.save((err, formularioGuardado) => {
                                                if (err) return res.status(500).send({ mensaje: 'error en la peticion ' })
                                                if (!formularioGuardado) return res.status(500).send({ mensaje: 'error al crear formulario ' })
                                                return res.status(200).send({ Formulario: formularioGuardado })
                                        
                                            })
                                        } else {
                                            return res.status(500).send({ message: "escriba bien los datos" })
                                        }
                                    } else {
                                        return res.status(500).send({ mensaje: "no eres mayor a 17 años" })
                                    }
                                } else {
                                    return res.status(500).send({ mensaje: "agregue todos los parametros" })
                                }
                            } else {
                                return res.status(200).send({ mensaje: "El último carácter debe de terminar en 1,3 o 9" })
                            }
                        } else {
                            return res.status(200).send({ mensaje: "El tercer carácter deberá de ser 5" })
                        }
                    } else {
                        return res.status(200).send({ mensaje: "El primer carácter deberá ser A (mayúscula)" })
                    }
                } else {
                    return res.status(500).send({ mensaje: "el carnet no debe tener 0" })
                }
            } else {
                return res.status(500).send({ mensaje: "el carnet debe tener 6 caracteres" })
            }
        }
    })

}

function VerFormularios(req, res) {
    Formulario.find({}, (err, formularioEncontrados) => {
        if (err) return res.status(500).send({ mensaje: 'error en la peticion' });
        if (!formularioEncontrados) return res.status(500).send({ mensaje: 'Error al encontrar Formularios' });
        return res.status(200).send(formularioEncontrados);
    }) 
}

module.exports = {
    newForm,
    VerFormularios
}