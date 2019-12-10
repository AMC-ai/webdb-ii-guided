// Update with your config settings.

module.exports = {

  // teaches knex to connect to the development database
  development: {
    client: 'sqlite3',
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
