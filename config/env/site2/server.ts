export default ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("HOST_PORT_SITE2", 4338),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
