// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {

//     },
//     useNullAsDefault: true,
//   },
// });

module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "postgres",
        settings: {
          client: "postgres",
          host: env("DB_HOST", ""),
          port: env.int("DB_PORT", 6543),
          user: env("DB_USER", ""),
          password: env("DB_PASSWORD", ""),
          database: env("DB_NAME", ""),
          ssl: { rejectUnauthorized: false },
        },
        options: {
          ssl: false,
        },
      },
    },
  };
};
