const sessions = require("../services/sessions");
const notesService = require("../services/notes");
const url = require("url");

async function create(req, res) {
  req.body = "";
  req.on("data", (chunk) => {
    req.body += chunk;
  });
  req.on("end", async () => {
    try {
      const userId = await sessions.getUserIdFromRequest(req);
      const note = JSON.parse(req.body);
      const created = await notesService.create(userId, note);
      res.writeHead(200, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(created.id);
    } catch (err) {
      res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(err.message);
    }
  });
}

async function read(req, res) {
  try {
    const userId = await sessions.getUserIdFromRequest(req);
    const notes = await notesService.read(userId);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(notes));
  } catch (err) {
    res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
    res.end(err.message);
  }
}

async function remove(req, res) {
  try {
    const userId = await sessions.getUserIdFromRequest(req);
    const { query } = url.parse(req.url, true);
    await notesService.remove(userId, query.id);
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
      const userId = await sessions.getUserIdFromRequest(req);
      const note = JSON.parse(req.body);
      const updated = await notesService.update(userId, note);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updated));
    } catch (err) {
      res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(err.message);
    }
  });
}

module.exports = {
  create,
  read,
  remove,
  update,
};
