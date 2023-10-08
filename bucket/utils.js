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


module.exports = {
  getContentType,
}