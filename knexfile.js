// Update with your config settings.
var config = require('./config')

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: config.DATABASE,
      user: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: config.DATABASE,
      user: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: config.DATABASE,
      user: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
