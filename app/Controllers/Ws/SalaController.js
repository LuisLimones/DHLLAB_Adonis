'use strict'

class SalaController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onActualizar(partidas){
    this.socket.broadcast("actualizar", partidas);
  }
}

module.exports = SalaController
