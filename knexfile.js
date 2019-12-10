// Update with your config settings.

/*

this file contains instructions knex needs to connect
to the database

Each key on the exported object has the configuration
for a database environment (dev, production, testing, etc)

The knex CLI will use the configuration on this file to find the DB.

The knex CLI will use the "development" environment by default, but
we can override that behavior.

*/

module.exports = {

  // teaches knex to connect to the development database
  development: {
    client: 'sqlite3', // the DB driver
    useNullAsDefault: true, //only needed when using SQLite3
    connection: {
      filename: './data/produce.db3' // where is the database
    },
    migrations: {
      directory: "./data/migrations" // this will be created automatically
    },
    seeds: {
      directory: "./data/seeds" // this will be created automatically
    }
  },


  //wont be using this today either
  // how to connect to the staging (testing) environment
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  // wont be using them today 
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
