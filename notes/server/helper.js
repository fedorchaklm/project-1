function isUniqueUsername(users, username) {
  return !Object.values(users)
    .map((item) => item.username)
    .includes(username);
}

module.exports = {
  isUniqueUsername,
};
