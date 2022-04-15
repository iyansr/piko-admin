const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DB_HOST", ""),
      port: env.int("DB_PORT", 6543),
      user: env("DB_USER", ""),
      password: env("DB_PASSWORD", ""),
      database: env("DB_NAME", ""),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    useNullAsDefault: true,
  },
});
