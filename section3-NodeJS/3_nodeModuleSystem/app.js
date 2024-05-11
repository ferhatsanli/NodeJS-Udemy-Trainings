// const { log } = require('console'); // to make shorter the console.log()
const http = require('http');
const fs = require('fs');
const { log } = require('./toolkit');
const routes = require('./routes');



const server = http.createServer(routes.handler);

server.listen(1301);
log('server is running...');