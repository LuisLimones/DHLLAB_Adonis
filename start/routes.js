'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Usuarios
Route.post('/registrarUsuario', 'UsuarioController.registrarUsuario');
Route.post('/login', 'UsuarioController.login');
Route.get('/getUsuario', 'UsuarioController.getUsuario');

//Juego (Partidas y Salas)
Route.get('/partidas', 'PartidaController.getPartidas');
Route.get('/crearPartida', 'PartidaController.crearPartida');
Route.get('/depurar', 'PartidaController.depurarPartidas');
Route.post('/entrar', 'PartidaController.entrar');
Route.post('/salir', 'PartidaController.salir');
