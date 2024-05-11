const http = require('http');
const toolkit = require('./toolkit');

server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    toolkit.log(`URL: ${url}, Method: ${method}`, 'Got request');
    if (url === '/')
        toolkit.loadHtml('index', res);
});

server.listen(1300);