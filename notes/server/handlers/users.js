const usersService = require("../services/users");

function create(req, res) {
  req.body = "";
  req.on("data", (chunk) => {
    req.body += chunk;
  });
  req.on("end", async () => {
    try {
      const user = JSON.parse(req.body);
      const created = await usersService.create(user);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(created));
    } catch (err) {
      res.writeHead(400, { "Content-Type": "text-plain;charset=UTF-8" });
      res.end(err.message);
    }
  });
}

module.exports = {
  create,
};
