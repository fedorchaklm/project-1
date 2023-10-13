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
  user.id = id;
  user.password = sha256(user.password);
  users[id] = user;
  fs.promises.writeFile(DATA_FILE_USERS, JSON.stringify(users));
  return { id, username: user.username };
}

async function remove(userId) {
  const users = JSON.parse(await fs.promises.readFile(DATA_FILE_USERS));
  delete users[userId];
  // need to remove users notes as well, and clean all sessions
  await fs.promises.writeFile(DATA_FILE_USERS, JSON.stringify(users));
}

async function getUserByUsername(username) {
  const data = await fs.promises.readFile(DATA_FILE_USERS);
  const users = Object.values(JSON.parse(data));
  const user = users.find((item) => item.username === username);
  if (!user) {
    throw new Error("There`s not such username");
  }
  return user;
}

module.exports = {
  create,
  remove,
  getUserByUsername
};
