const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const { parseCookies } = require("../utils");

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
  return `session=${token}; path=/; expires=${new Date(
    new Date().getTime() + expirationTime
  ).toUTCString()}`;
}

async function getUserIdByToken(token) {
  const data = await fs.promises.readFile(DATA_FILE_SESSIONS);
  const sessions = JSON.parse(data);
  for (const [key, value] of Object.entries(sessions)) {
    if (value === token) {
      return key;
    }
  }
  return null;
}

async function getUserIdFromRequest(req) {
  const { session } = parseCookies(req);
  return await getUserIdByToken(session);
}

module.exports = {
  createToken,
  getSessionCookie,
  getUserIdByToken,
  getUserIdFromRequest
};
