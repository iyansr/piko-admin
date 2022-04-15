const parse = require("pg-connection-string").parse;
const { database, host, password, user, port } = parse(
  process.env.SUPABASE_URL
);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
