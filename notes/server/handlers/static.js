const fs = require("fs");
const url = require("url");
const path = require("path");
const { getContentType } = require("../utils");

const CLIENT_DIRECTORY = "../client";

function readFile(req, res) {
  const endpoint = url.parse(req.url).pathname;
  const filename = endpoint.substring(1).replace(/\.\.\//g, "") || "index.html";
  const file = path.resolve(CLIENT_DIRECTORY, filename);
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

module.exports = {
  readFile,
};
