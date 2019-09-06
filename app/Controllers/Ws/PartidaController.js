'use strict'

class PartidaController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMensajes(mensajes){
    this.socket.broadcastToAll("mensajes", mensajes);
  }

  onTablero(numeros){
    this.socket.broadcast("tablero", numeros);
  }

  onPersonaje(personaje){
    this.socket.broadcast("personaje", personaje);
  }

  onGanador(ganador){
    this.socket.broadcast("ganador", ganador);
  }
}

module.exports = PartidaController
