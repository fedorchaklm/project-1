const http = require("http");
const handlers = require('./handlers.js');
const url = require("url");

function serve(port) {
  const server = new http.Server();
  server.listen(port, () => console.log("listening on port: " + port));

  server.on("request", async (req, res) => {
    const endpoint = url.parse(req.url).pathname;

    if (endpoint.startsWith('/api')) {
      if (req.method === "GET") {
        handlers.read(res);
      }
      if (req.method === "POST") {
        handlers.create(req, res);
      }
  
      if (req.method === "DELETE") {
        handlers.remove(req, res);
      }
  
      if (req.method === "PATCH") {
        handlers.update(req, res);
      }
    } else {
      handlers.readFile(req, res);
    }
  });
}

serve(3005);
