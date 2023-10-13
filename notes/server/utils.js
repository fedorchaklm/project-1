const crypto = require('crypto')

function getContentType(extention) {
  switch (extention) {
    case ".html":
    case ".htm":
      return "text/html";
    case ".js":
      return "text/javascript";
    case ".css":
      return "text/css";
    case ".png":
      return "image/png";
    case ".txt":
      return "text/plain";     
    default:
      return "application/octet-stream";
  }
}

function sha256(content) {  
  return crypto.createHash('sha256').update(content).digest('hex')
}

function parseCookies(req) {
  const list = {};
  const cookieHeader = req.headers?.cookie;
  if (!cookieHeader) return list;

  cookieHeader.split(`;`).forEach((cookie) => {
    let [name, ...rest] = cookie.split(`=`);
    name = name?.trim();
    if (!name) return;
    const value = rest.join(`=`).trim();
    if (!value) return;
    list[name] = decodeURIComponent(value);
  });

  return list;
}

module.exports = {
  getContentType,
  parseCookies,
  sha256,
}