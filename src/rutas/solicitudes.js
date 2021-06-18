const express = require("express");
const route = express.Router();

var options = {root:require("path").join(__dirname,"../vistas")};

route.get("/", (req,res) =>
{
    //res.send("peticion  solucionada");
    //res.sendFile("./vistas/index.html");
    res.sendFile("index.html",options);
});


route.get("/index", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("index.html",options);
});

route.get("/utilizacion", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("utilizacion.html",options);
});

route.get("/demostracion", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("demostracion.html",options);
});

route.get("/estilo", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("css/estilo.css",options);
});

route.get("/vertical", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("css/vertical.css",options);
});


//imagenes

route.get("/img1", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/archivo.png",options);
});

route.get("/img2", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/sublime.png",options);
});

route.get("/img3", (req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/init.png",options);
});

route.get("/img4",(req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/status.png",options);
    res.sendFile("img/add.png",options);
});

route.get("/img5",(req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/add.png",options);
});

route.get("/img6",(req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/commit.png",options);
});

route.get("/img7",(req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/global.png",options);
});

route.get("/img8",(req,res) =>
{
    //res.send("peticion  solucionada");
    res.sendFile("img/diff.png",options);
});

route.get("/img9",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/c.png",options);
});


route.get("/img10",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/restore.png",options);
});

route.get("/img11",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/branch.png",options);
});

route.get("/img12",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/f.png",options);
});

route.get("/img13",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/merge.png",options);
});

route.get("/img14",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/push.png",options);
});

route.get("/img15",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/pull.png",options);
});

route.get("/img16",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/rm.png",options);
});

route.get("/img17",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/sw.png",options);
});

route.get("/img18",(req,res) =>    
{
    //res.send("peticion  solucionada");
    res.sendFile("img/clone.png",options);
});

module.exports = route;








