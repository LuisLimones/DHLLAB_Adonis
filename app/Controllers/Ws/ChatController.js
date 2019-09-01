'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  // este metodo se ejecutará cada vez que el cliente lo solicite
  onActualizar(mensajes) {
    this.socket.broadcastToAll("actualizar",mensajes)
  }
  onEscribiendo(){
    this.socket.broadcast("escribiendomsj")
  }
}

module.exports = ChatController
