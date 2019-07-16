const http = require('http');
const path = require('path');
const conf = require('./config/defaultConfig')
const route = require('./helper/route')

class Server {
  constructor(config) {
    this.conf = Object.assign({}, conf, config);
  }
  start () {
    const server = http.createServer((req,res) => {
      const filePath = path.join(this.conf.root,req.url);
      route(req,res,filePath,this.conf);
    });

    server.listen(conf.port,conf.hostname,() => {
      const addr = `http://${conf.hostname}:${conf.port}`;
      console.info(`server started at ${addr}`);
    });
  }
}

module.exports = Server;
