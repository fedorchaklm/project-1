const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

async function create(userId, note) {
  const filePath = path.resolve(__dirname, `../data/notes/${userId}.json`);
  if (!fs.existsSync(filePath)) {
    await fs.promises.appendFile(filePath, "[]");
  }
  const data = await fs.promises.readFile(filePath);
  const notes = JSON.parse(data);
  note.id = crypto.randomUUID();
  notes.push(note);
  await fs.promises.writeFile(filePath, JSON.stringify(notes));
  return note;
}

async function read(userId) {
  const filePath = path.resolve(__dirname, `../data/notes/${userId}.json`);
  const data = await fs.promises.readFile(filePath);
  return JSON.parse(data);
}

async function remove(userId, noteId) {
  const filePath = path.resolve(__dirname, `../data/notes/${userId}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error("Note was not found");
  }
  const notes = JSON.parse(await fs.promises.readFile(filePath));
  const index = notes.findIndex(({ id }) => id === noteId);
  notes.splice(index, 1);
  await fs.promises.writeFile(filePath, JSON.stringify(notes));
}

async function removeAll(userId) {
  const filePath = path.resolve(__dirname, `../data/notes/${userId}.json`);
  fs.rmSync(filePath, { force: true });
}

async function update(userId, note) {
  const filePath = path.resolve(__dirname, `../data/notes/${userId}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error("Notes were not found");
  }
  const notes = JSON.parse(await fs.promises.readFile(filePath));
  const index = notes.findIndex(({ id }) => id === note.id);
  if (index < 0) {
    throw new Error("Note was not found");
  }
  notes[index] = { ...notes[index], ...note };
  await fs.promises.writeFile(filePath, JSON.stringify(notes));
  return notes[index];
}

module.exports = {
  create,
  read,
  remove,
  removeAll,
  update,
};
