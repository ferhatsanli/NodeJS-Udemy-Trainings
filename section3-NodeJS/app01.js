// importing global library, http
const http = require('http');

// if you want to import your of libraries in same (relative folder)
// const myLib = requier('./myLib');


function rqListener(req, res) {
    console.log(req.url, req.method, req.headers);
    if (req.url == "/ferhat")
        console.log("hello boss");
    // process.exit(); // ends the server after a request processed
    // probably people use it at DDoS management (I think)
    // --------------------------------------

    // the course didn't descirebe with template literals
    // I did it like this
    const htmlResponse = `
    <html>
    <head><title>My LEGGGGGENDARY first p4g3!</title></head>
    <body>
    Hello <h1>Ferhat!!!</h1>
    </body>
    </html>
    `;
    res.setHeader("Content-type", "text/html"); // it says the response will HTML
    res.write(htmlResponse); // define the response
    res.end(); // editing the response is done!
}

const server = http.createServer(rqListener);

// alternative usage:::
// http.createServer(function(req, res) {
//     // process the request and response
// });

// alternative usage:::
// http.createServer((req, res) => {
//     // process the request and response
// });


// starting the server
// listen from 1301 port
server.listen(1301);