'use strict'
const User = use('App/Models/User');

class UsuarioController {
    async registrarUsuario({request, response}){
        try {
            const us = new User();
            us.usuario=request.input('usuario');
            us.password=request.input('password');
            us.tipo=request.input('tipo');
            us.partidas=0;
            us.ganadas=0;
            await us.save();
            return response.json(us);
        } catch (error) {
            return response.json(error);
        }
    }

    async getUsuario({response, auth}){
    }

    async login({request, response, auth}){
        try {
            const usuario=request.input('usuario');
            const password=request.input('password');
            let token = await auth.attempt(usuario, password);
            let us = await User.findBy('usuario', usuario);
            return response.json({token: token, us: us});
        } catch (error) {
            return response.json(error);
        }
    }
}

module.exports = UsuarioController
