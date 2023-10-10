const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const { sha256 } = require("../utils");
const { isUniqueUsername } = require("../helper");

const DATA_FILE_SESSIONS = path.resolve(__dirname, "../data/sessions.json");

async function createToken(id) {
  const token = crypto.randomUUID();
  const data = await fs.promises.readFile(DATA_FILE_SESSIONS);
  const sessions = JSON.parse(data);
  sessions[id] = token;
  await fs.promises.writeFile(DATA_FILE_SESSIONS, JSON.stringify(sessions));
  return token;
}

function getSessionCookie(token, expirationTime = 86409000) {
  return `session=${token}; expires=${new Date(
    new Date().getTime() + expirationTime
  ).toUTCString()}`;
}

module.exports = {
  createToken,
  getSessionCookie,
};
