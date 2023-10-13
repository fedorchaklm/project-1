const http = require("http");
const users = require("./handlers/users.js");
const auth = require("./handlers/auth.js");
const static = require("./handlers/static.js");
const url = require("url");
const notes = require("./handlers/notes.js");

function serve(port) {
  const server = new http.Server();
  server.listen(port, () => console.log("listening on port: " + port));

  server.on("request", async (req, res) => {
    const endpoint = url.parse(req.url).pathname;

    if (endpoint.startsWith("/api")) {
      if (endpoint.startsWith("/api/users")) {
        if (req.method === "POST") {
          users.create(req, res);
        }
      } else if (endpoint.startsWith("/api/auth")) {
        if (req.method === "POST" && endpoint.startsWith("/api/auth/signup")) {
          auth.signUp(req, res);
        } else if (
          req.method === "POST" &&
          endpoint.startsWith("/api/auth/signin")
        ) {
          auth.signIn(req, res);
        }
      } else if (endpoint.startsWith("/api/notes")) {
        if (req.method === "POST") {
          notes.create(req, res);
        }
        if (req.method === "GET") {
          notes.read(req, res);
        }
        if (req.method === "DELETE") {
          notes.remove(req, res);
        }
        if (req.method === "PATCH") {
          notes.update(req, res);
        }
      } else {
        res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
        res.end("unsupported API request");
      }
    } else {
      static.readFile(req, res);
    }
  });
}

serve(3005);
