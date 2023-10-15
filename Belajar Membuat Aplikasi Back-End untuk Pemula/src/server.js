const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = new Hapi.server({
    port: 5000,
    host: "127.0.0.1",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server Berjalan pada  port ${server.info.port} `);
};

init();
