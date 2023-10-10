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

module.exports = {
  getContentType,
  sha256,
}