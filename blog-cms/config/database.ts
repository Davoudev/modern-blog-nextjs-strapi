// ./config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "sqlite"),
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", ""),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: env.bool("DATABASE_SSL", false)
        ? {
            rejectUnauthorized: env.bool(
              "DATABASE_SSL_REJECT_UNAUTHORIZED",
              true
            ),
          }
        : false,
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
});
