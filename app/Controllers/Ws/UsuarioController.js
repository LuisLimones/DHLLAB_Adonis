'use strict'

class UsuarioController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  // este metodo se ejecutará cada vez se actualicen los usuarios
  onActualizar(usuarios) {
    this.socket.broadcastToAll("actualizar",usuarios)
  }
}

module.exports = UsuarioController
