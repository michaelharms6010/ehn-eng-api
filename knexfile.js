// Update with your config settings.

module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/ehn-eng.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'sqlite3',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations",
    },
    seeds: { directory: "./data/seeds" },
  }

};
