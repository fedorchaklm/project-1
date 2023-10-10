const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const { sha256 } = require("../utils");
const { isUniqueUsername } = require("../helper");

const DATA_FILE_USERS = path.resolve(__dirname, "../data/users.json");

async function create(user) {
  const data = await fs.promises.readFile(DATA_FILE_USERS);
  const users = JSON.parse(data);
  if (!isUniqueUsername(users, user.username)) {
    throw new Error("Username already exist");
  }
  const id = crypto.randomUUID();
  user.password = sha256(user.password);
  users[id] = user;
  fs.promises.writeFile(DATA_FILE_USERS, JSON.stringify(users));
  return { id, username: user.username };
}

module.exports = {
  create,
};
