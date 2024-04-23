//requiere packages and set the port
const express = requiere('express');
const port = 3002;
//para permitir manejo de post y put
const bodyParser = requiere ('body-parser');
const routes = requiere('./routes/routes');
const app = express();
 //usar node.js body parsing middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded ({
    extends: true,

 }));
 routes(app);
 //iniciar el servidor 
 const server = app.listen(port,(error)=>{
    if (error) return console.log(`error: ${error}`);
    console.log(`el servidor escucha en el puerto ${server.addres().port}`);
 });