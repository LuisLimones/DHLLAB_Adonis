'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'pg'),

  
  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', '127.0.0.1'),
      port: Env.get('DB_PORT', '5432'),
      user: Env.get('DB_USER', 'postgres'),
      password: Env.get('DB_PASSWORD', 'rockero'),
      database: Env.get('DB_DATABASE', 'adivina')
    },
   
    debug: Env.get('DB_DEBUG', false)
  },
  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('MONGO_CONNECTION_STRING', 'mongodb://127.0.0.1:27017/chat'),
    connection: {
      host: Env.get('MONGO_HOST', '127.0.0.1'),
      port: Env.get('MONGO_PORT', 27017),
      username: Env.get('MONGO_USER', ''),
      password: Env.get('MONGO_PASSWORD', ''),
      database: Env.get('MONGO_DATABASE', 'chat'),
      options: {
        useNewUrlParser: true
        // replicaSet: Env.get('DB_REPLICA_SET', '')
        // ssl: Env.get('DB_SSL, '')
        // connectTimeoutMS: Env.get('DB_CONNECT_TIMEOUT_MS', 15000),
        // socketTimeoutMS: Env.get('DB_SOCKET_TIMEOUT_MS', 180000),
        // w: Env.get('DB_W, 0),
        //readPreference: Env.get('MONGO_READ_PREFERENCE', 'secondary')
        // authSource: Env.get('DB_AUTH_SOURCE', ''),
        // authMechanism: Env.get('DB_AUTH_MECHANISM', ''),
        // other options
      }
    }
  }
}
