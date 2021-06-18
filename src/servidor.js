const express = require("express");
const servidor = express();
const path = require("path");

//configuraciones(settings)
servidor.set("puerto",3000);

//herramientas intermedias(middleware)


//rutas (routes)
servidor.use(require("./rutas/solicitudes.js"));



//Servidor escuchando
servidor.listen(servidor.get("puerto"), () =>
{
    console.log("Servidor escuchando en el puerto: ",servidor.get("puerto"));
});



//node archivo.js
//npm nodemon archivo.js
//npm run dev
