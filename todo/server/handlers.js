const fs = require("fs");
const url = require("url");
const crypto = require("crypto");
const path = require('path');
const { getContentType } = require('./utils');
const { updateTodos } = require("./helper");

const DATA_FILE = "data.json";
const CLIENT_DIRECTORY = '../client';

function readFile(req, res) {
  const endpoint = url.parse(req.url).pathname;
  const filename = endpoint.substring(1).replace(/\.\.\//g, "") || 'index.html';
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

function read(res) {
  const stream = fs.createReadStream(DATA_FILE);
  stream.once("readable", () => {
    res.writeHead(200, { "Content-Type": "application-json" });
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.writeHead(404, { "Content-Type": "text-plain;charset=UTF-8" });
    res.end(err.message);
  });
}

function create(req, res) {
  req.body = "";
  req.on("data", (chunk) => {
    req.body += chunk;
  });
  req.on("end", async () => {
    try {
      const data = await fs.promises.readFile(DATA_FILE);
      const todos = JSON.parse(data);
      const created = JSON.parse(req.body);
      created.id = crypto.randomUUID();
      todos.push(created);
      fs.promises.writeFile(DATA_FILE, JSON.stringify(todos, null, " "));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(created));
    } catch (err) {
      res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(err.message);
    }
  });
}

async function remove(req, res) {
  try {
    const { query } = url.parse(req.url, true);
    const data = await fs.promises.readFile(DATA_FILE);
    const todos = JSON.parse(data);
    const updated = todos.filter((item) => item.id !== query.id);
    fs.promises.writeFile(DATA_FILE, JSON.stringify(updated, null, " "));
    res.writeHead(200, { "Content-Type": "text-plain;charset=UTF-8" });
    res.end(query.id);
  } catch (err) {
    res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
    res.end(err.message);
  }
}

async function update(req, res) {
  req.body = "";
  req.on("data", (chunk) => {
    req.body += chunk;
  });
  req.on("end", async () => {
    try {
      const data = await fs.promises.readFile(DATA_FILE);
      const todos = JSON.parse(data);
      const { _next, ...patch } = JSON.parse(req.body);
      const updated = updateTodos(todos, patch, _next);
      fs.promises.writeFile(DATA_FILE, JSON.stringify(updated, null, " "));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(patch.id);
    } catch (err) {
      console.log('>', err)
      res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(err.message);
    }
  });
}

module.exports = {
  read,
  create,
  remove,
  update,
  readFile
};
