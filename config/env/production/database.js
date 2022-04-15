const parse = require("pg-connection-string").parse;
const { database, host, password, user, port } = parse(
  process.env.SUPABASE_URL
);

module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          user,
          password,
          ssl: { rejectUnauthorized: false },
        },
        options: {},
      },
    },
  };
};
