'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  
  up () {
   
   
    this.create('users', (table) => {
      table.increments()
      table.string('usuario', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('tipo').notNullable()
      table.integer('partidas').notNullable()
      table.integer('ganadas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
