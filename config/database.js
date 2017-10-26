/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */

'use strict'

module.exports = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */
  stores: {

    /**
     * Define a store called "local" which uses SQLite3 to persist data.
     *
     */
    dev: {
      database: 'ProxyRouter',
      storage: './.tmp/temp.sqlite',
      host: '127.0.0.1',
      dialect: 'sqlite'
    }
  },

  models: {
    defaultStore: 'dev',
    migrate: 'alter'
  }
}
