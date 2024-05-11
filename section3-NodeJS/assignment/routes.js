const fs = require('fs');
const { log, loadHtml, processReq, processedData } = require('./toolkit');


function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;
    let done = false;
    log(`URL:${url} | Routing...`, 'Routes');
    if (url === '/')
        return loadHtml('index', res);
    else if (url === '/users')
        return loadHtml('users', res);
    else if (url === '/create-user' && method === 'POST') {
        processReq(req, res, true);
        log(processedData, 'Routes');
        
        res.end();
    }

}

module.exports = {
    handler: requestHandler
};