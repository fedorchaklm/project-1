const { sha256 } = require('./utils');

function isUniqueUsername(users, username) {
  return !Object.values(users)
    .map((item) => item.username)
    .includes(username);
}

function checkPassword(user, password) {
  return sha256(password) === user.password;
}

module.exports = {
  checkPassword,
  isUniqueUsername,
};
