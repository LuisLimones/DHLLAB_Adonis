'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PartidasSchema extends Schema {
  up () {
    this.create('partidas', (table) => {
      table.increments()
      table.integer('jugadores').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('partidas')
  }
}

module.exports = PartidasSchema
