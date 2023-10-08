const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const busboy = require("busboy");

const { getContentType } = require("./utils.js");
const DIRECTORY = `${__dirname}/public`;

function echoHandler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" });
  res.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\r\n\r\n`);
  const headers = req.rawHeaders;
  for (let i = 0; i < headers.length; i += 2) {
    res.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
  }
  res.write("\r\n");
  req.pipe(res);
}

function downloadHandler(req, res) {
  const endpoint = url.parse(req.url).pathname;
  const filename = endpoint.substring(1).replace(/\.\.\//g, "");
  const file = path.resolve(DIRECTORY, filename);
  const type = getContentType(path.extname(file));
  const stream = fs.createReadStream(file);
  stream.once("readable", () => {
    res.writeHead(200, { "Content-Type": type });
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.writeHead(404, { "Content-Type": "text-plain;charset=UTF-8" });
    res.end(err.message);
  });
}

function uploadHandler(req, res) {
  const bb = busboy({ headers: req.headers });
  bb.on("file", (_, file, info) => {
    const saveTo = path.join(DIRECTORY, info.filename);
    file.pipe(fs.createWriteStream(saveTo));
  });
  bb.on("close", () => {
    res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" });
    res.end('upload success');
  });
  req.pipe(bb);
}

function serve(port) {
  const server = new http.Server();
  server.listen(port, () => console.log("listening on port: " + port));

  server.on("request", (req, res) => {
    const endpoint = url.parse(req.url).pathname;
    if (endpoint === "/echo") {
      echoHandler(req, res);
    } else if (endpoint === "/upload") {
      uploadHandler(req, res);
    } else {
      downloadHandler(req, res);
    }
  });
}

serve(3000);
