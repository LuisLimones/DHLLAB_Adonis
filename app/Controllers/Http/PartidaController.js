'use strict'
const Partida = use('App/Models/Partida');

class PartidaController {
    async crearPartida({response, request}){
        try {
            let pa = new Partida();
            pa.jugadores=0;
            await pa.save();
            return response.json(pa);
        } catch (error) {
            return response.json("Error Crear Partida");
        }
    }

    async getPartidas({response, request}){
        try {
            let partidas = await Partida.all();
            return response.json(partidas);
        } catch (error) {
            return response.json(error);
        }
    }

    async obtenerPartida({request, response}){
        try {
            let id = request.input('idPartida');
            const partida = await Partida.find(id);
            return response.json(partida);
        } catch (error) {
            return response.json(error);
        }
    }

    async depurarPartidas({response}){
        try {
            await Partida.truncate();
            return "hecho";
        } catch (error) {
            return response.json(error);
        }
    }

    async entrar({request, response}){
        try {
            let id=request.input('id');
            console.log(id);
            let pa = await Partida.find(id);
            let numero=pa.jugadores;
            if(numero<2){
                numero++;
                pa.jugadores=numero;
                await pa.save();
                return response.json(pa);
            }
            else{
                return response.json({condicion: "lleno"});
            }
        } catch (error) {
            console.log("valio");
            return response.json("Valio");
        }
    }

    async salir({request, response}){
        try {
            let id=request.input('id');
            let pa = await Partida.find(id);
            let numero=pa.jugadores;
            if(numero>0){
                numero--;
                pa.jugadores=numero;
                await pa.save();
                return response.json(pa);
            }
            else{
                return response.json({condicion: "vacio"});
            }
        } catch (error) {
            return response.json(error);
        }
    }
}

module.exports = PartidaController
