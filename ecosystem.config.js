module.exports = {
  apps: [
    {
      name: "site1",
      cwd: "/Users/saradchhetri/Desktop/strapi/test_strapi",
      script: "npm",
      args: "run develop",
      env: {
        NODE_ENV: "site1",
        HOST_PORT_SITE1: 1337,
        DOMAIN_URL: "site1.example.com",
      },
    },
    {
      name: "site2",
      cwd: "/Users/saradchhetri/Desktop/strapi/test_strapi",
      script: "npm",
      args: "run develop",
      env: {
        NODE_ENV: "site2",
        HOST_PORT_SITE2: 4338,
        DATABASE_NAME: "db_strapi_site_2",
        DATABASE_USERNAME: "saradchhetri",
        DATABASE_PASSWORD: "pepsodent123",
        DOMAIN_URL: "site2.example.com",
      },
    },
  ],
};
