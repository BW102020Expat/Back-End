require('dotenv').config();

const pgConnection = process.env.DATABASE_URL || "postgres://xwrsnfcejdtegn:80da53d53ef4627460fc9bece79550fbc486c0fad335e15174a40443cb9bb2d6@ec2-54-157-234-29.compute-1.amazonaws.com:5432/dc6qh4nlu1ee2l";

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dbExpat.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: pgConnection
    },
    // in video, he did client pg, connection:pgConnection
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testdb.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
