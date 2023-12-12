module.exports = {
  client: 'postgresql',
  connection: {
    host: 'postgres',
    user: 'postgres',
    password: 'postgres',
    database: 'social',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};
