export default ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("HOST_PORT_SITE1", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
