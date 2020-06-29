const Blipp = require("blipp");

module.exports = {
  name: "app-blipp",
  async register(server) {
    await server.register([Blipp]);
  },
};
