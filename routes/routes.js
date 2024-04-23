//cargue la conexion del grupo MySQL
const pool = require('../data/config');

//ruta de la app
const router = app => {
    //mostrar mensaje de bienvenida de root
    app.get('/',(request, response)=>{
        response.send ({
            message: 'Bienvenidos a node.js express restapi!'
        });
    
});

//mostrar todos los usuarios
app.get ('/users', (request,response)=>{
    pool.query('SELECT * FROM user',(error,result)=>{
        if(error)throw error;

        response.sand(result);
    });
});
}
//mostrar un solo usuario po ID
app.get('/user/:id',(request,response)=>{
    const id= request.params.id;

    pool.query('SELECT* FROM user WHERE id = ?', id, (error,result) =>{
        if (error) throw error;

        response.send(result);
    });
});
//agregar un nuevo usuario
app.post('/user',(request,response)=>{
    pool.query('INSERT INTO user SET ?', request.body,(error,result)=>{
        if (error)throw error;
        response.status(201).send('User added with ID: $ ()');
    });
});
// Actualizar un usuario existente 
app-put ('/users/:id', (request, response)=>{
    const id = request.params.id;
    pool. query ('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) =>{
    if (error) throw error;

    response. send ('User updated successfully.');
    });
});


// Eliminar un usuario
app.delete('/users/:id', (request, response) => {
    const id = request.params. id;
  pool.query ('DELETE FROM users WHERE id = ?', id, (error, result){
    if (error) throw error;
   response. send( 'User deleted.');
  });
});
// Exportar el router
module.exports = router;