const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
  .usage('everywhere [options]')
  .option('p', {
    alias: 'port',
    describe: '端口号',
    default: 3000
  })
  .option('h', {
    alias: 'hostname',
    describe: 'host',
    default: '127.0.0.1'
  })
  .option('d', {
    alias: 'root',
    describe: '静态服务器根目录',
    default: process.cwd()
  })
  .version()
  .alias('v', 'version')
  .help()
  .argv;

const server = new Server(argv);
server.start();
