const http = require('http');
const routes = require('./routes');
const { log } = require('./toolkit');

const server = http.createServer(routes.handler);

server.listen(3000);
log('server is running...');