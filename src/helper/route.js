const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const conf = require('../config/defaultConfig')
const mime = require('./mime');
const compress = require('./compress');

const tplPath = path.join(__dirname,'../template/fileList.tpl')
const source = fs.readFileSync(tplPath);
const template = handlebars.compile(source.toString());

module.exports = async function(req,res,filePath){
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.statusCode = 200;
      const contentType = mime(filePath);
      res.setHeader('Content-Type',contentType);
      let rs = fs.createReadStream(filePath);
      if (filePath.match(conf.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type','text/html');
      const dir = path.relative(conf.root,filePath);
      res.end(template({
        title:path.basename(filePath),
        dir:dir ? `/${dir}`:'',
        files
      }));
    }
  } catch (ex) {
    console.error(ex);
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end(`${filePath} is not a directory or file.`);
  }
}