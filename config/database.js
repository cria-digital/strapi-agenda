module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "db-postgresql-nyc3-33054-do-user-11643467-0.b.db.ondigitalocean.com"
      ),
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "defaultdb"),
      user: env("DATABASE_USERNAME", "doadmin"),
      password: env("DATABASE_PASSWORD", "AVNS_a80B6JK7FR1qVJfyjIC"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});


