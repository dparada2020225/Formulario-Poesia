require('dotenv').config()

const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_Connection, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(process.env.PORT || 3200, function () {
        console.log("La aplicacion esta corriendo Puerto:"+ process.env.PORT || 3200)  
    })

}).catch(error => console.log(error));