const path = require('path');

const mimeTypes = {
  'css':'text/css',
  'gif':'image/gif',
  'png':'image/png',
  'jpg':'image/jpeg',
  'jpeg':'image/jpeg',
  'json':'application/gif',
  'js':'text/javascript',
  'html':'text/html',
  'xml':'text/xml',
  'txt':'text/plain'
};

module.exports = (filePath) => {
  let ext = path.extname(filePath)
    .split('.')//分割取最后一部分
    .pop()
    .toLowerCase();
    if (!ext) {//读不到拓展名
      ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes['txt'];
};
