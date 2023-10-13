const usersService = require("../services/users");
const sessionsService = require("../services/sessions");
const { checkPassword } = require('../helper');

function signIn(req, res) {
  req.body = "";
  req.on("data", (chunk) => {
    req.body += chunk;
  });
  req.on("end", async () => {
    try {
      const {username, password} = JSON.parse(req.body);
      const user = await usersService.getUserByUsername(username);
      if (checkPassword(user, password)) {
        const token = await sessionsService.createToken(user.id);
        res.writeHead(200, {
          "Set-Cookie": sessionsService.getSessionCookie(token),
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(user));
      } else {
        throw new Error("Username or password isn`t correct");
      }
    } catch (err) {
      res.writeHead(401, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(err.message);
    }
  });
}

function signUp(req, res) {
  req.body = "";
  req.on("data", (chunk) => {
    req.body += chunk;
  });
  req.on("end", async () => {
    try {
      const user = JSON.parse(req.body);
      const created = await usersService.create(user);
      const token = await sessionsService.createToken(created.id);
      res.writeHead(200, {
        "Set-Cookie": sessionsService.getSessionCookie(token),
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(created));
    } catch (err) {
      res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(err.message);
    }
  });
}

module.exports = {
  signIn,
  signUp,
};
